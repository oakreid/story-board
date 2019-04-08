import React from 'react';
import Article from './article';
import StackGrid from "react-stack-grid";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {session, username, cuf} = this.props;
    return (<div>
      <StackGrid
          columnWidth={300}
          gutterWidth={20}
          gutterHeight={20}
          monitorImagesLoaded={true}
          gridRef={grid => this.grid = grid}
        >
          {cuf.map((source, x) => (
              <Article key={x} source={source} username={username} session={session}/>
          ))}
        </StackGrid>
    </div>);
  }
}

export default Favorites;
