import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {favorite} from '../redux/actions';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Article extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleFavorite = (article) => {
    const { session, username } = this.props;
    const {source, author, title, description, url, urlToImage, publishedAt} = article;
    const { user_id } = session;
    this.props.favorite({
      article: {
        source: source.name,
        author,
        title,
        description,
        url,
        urlToImage,
        user_id,
        publishedAt
      }
    }, session, username);
  }

  render() {
    const { classes, source, session, username } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={source.title}
          subheader={source.publishedAt}
        />
        <CardMedia
          className={classes.media}
          image={source.urlToImage}
        />
        <CardContent>
          <Typography component="p">
            {source.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={() => this.handleFavorite(source, session)} disabled={!session}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    favorite: (article, session, username) => favorite(article, session, username)
  },
  dispatch
)};

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

Article = withStyles(styles)(Article);

export default connect(mapStateToProps, mapDispatchToProps)(Article);
