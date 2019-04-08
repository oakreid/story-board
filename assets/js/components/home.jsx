import React from 'react';
import Article from './article';
import StackGrid from "react-stack-grid";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {search_results, session} = this.props;
    return (<div>
      <StackGrid
          columnWidth={300}
          gutterWidth={20}
          gutterHeight={20}
          monitorImagesLoaded={true}
          gridRef={grid => this.grid = grid}
        >
          {search_results.map((source, x) => (
              <Article key={x} source={source} session={session}/>
          ))}
        </StackGrid>
    </div>);
  }
}

export default Home;
