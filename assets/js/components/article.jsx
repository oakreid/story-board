import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import ButtonBase from '@material-ui/core/ButtonBase';
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
import Menu from '@material-ui/core/Menu';
import {favorite, unfavorite} from '../redux/actions';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import Share from './share';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
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

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    }
  }

  handleShareMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = (article) => {
    const { session, username } = this.props;
    const {id, source, author, title, description, url, urlToImage, publishedAt} = article;
    const { user_id } = session;
    id ?
    this.props.unfavorite({ id }, session, username)
    :
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
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <Share shareUrl={source.url} title={source.title}/>
      </Menu>
    );

    return (
      <div>
      <Card className={classes.card}>
      <ButtonBase
          className={classes.cardAction}
          onClick={event => window.location = source.url}
      >
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
        </ButtonBase>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={() => this.handleClick(source, session)} disabled={!session}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share" onClick={(event) => this.handleShareMenuOpen(event)}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      {renderMenu}
      </div>
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
    favorite: (article, session, username) => favorite(article, session, username),
    unfavorite: (id, session, username) => unfavorite(id, session, username)
  },
  dispatch
)};

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

Article = withStyles(styles)(Article);

export default connect(mapStateToProps, mapDispatchToProps)(Article);
