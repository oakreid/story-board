//Component taken from https://github.com/nygardk/react-share/blob/master/demo/Demo.jsx
import React, { Component } from 'react';
import {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,

  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,

  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
} from 'react-share';

// import exampleImage from '../../static/react-share-pin-example.png';
const exampleImage = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.imgur.com%2F2FEflUQ.jpg&imgrefurl=https%3A%2F%2Fimgur.com%2Fr%2FNEU%2FFrFAu&docid=6Lld-rq6wJfObM&tbnid=5ltSoL4lRHVPqM%3A&vet=10ahUKEwiJ4pbOhb_hAhWMg-AKHa06Bl0QMwhCKAIwAg..i&w=720&h=960&bih=693&biw=1440&q=nat%20tuck&ved=0ahUKEwiJ4pbOhb_hAhWMg-AKHa06Bl0QMwhCKAIwAg&iact=mrc&uact=8'
class Share extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {shareUrl, title} = this.props;

    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
        </div>

        <div className="Demo__some-network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>

        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>

        <div className="Demo__some-network">
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
        </div>

        <div className="Demo__some-network">
          <PinterestShareButton
            url={String(window.location)}
            media={`${String(window.location)}/${exampleImage}`}
            windowWidth={1000}
            windowHeight={730}
            className="Demo__some-network__share-button">
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </div>

        <div className="Demo__some-network">
          <VKShareButton
            url={shareUrl}
            image={`${String(window.location)}/${exampleImage}`}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button">
            <VKIcon
              size={32}
              round />
          </VKShareButton>
        </div>

        <div className="Demo__some-network">
          <OKShareButton
            url={shareUrl}
            image={`${String(window.location)}/${exampleImage}`}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button">
            <OKIcon
              size={32}
              round />
          </OKShareButton>
        </div>

        <div className="Demo__some-network">
          <RedditShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button">
            <RedditIcon
              size={32}
              round />
          </RedditShareButton>
        </div>

        <div className="Demo__some-network">
          <TumblrShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button">
            <TumblrIcon
              size={32}
              round />
          </TumblrShareButton>
        </div>

        <div className="Demo__some-network">
          <LivejournalShareButton
            url={shareUrl}
            title={title}
            description={shareUrl}
            className="Demo__some-network__share-button"
          >
            <LivejournalIcon size={32} round />
          </LivejournalShareButton>
        </div>

        <div className="Demo__some-network">
          <MailruShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <MailruIcon
              size={32}
              round />
          </MailruShareButton>
        </div>

        <div className="Demo__some-network">
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            className="Demo__some-network__share-button">
            <EmailIcon
              size={32}
              round />
          </EmailShareButton>
        </div>
        <div className="Demo__some-network">
          <ViberShareButton
            url={shareUrl}
            title={title}
            body="body"
            className="Demo__some-network__share-button">
            <ViberIcon
              size={32}
              round />
          </ViberShareButton>
        </div>

        <div className="Demo__some-network">
          <WorkplaceShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <WorkplaceIcon
              size={32}
              round />
          </WorkplaceShareButton>
        </div>

        <div className="Demo__some-network">
          <LineShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <LineIcon
              size={32}
              round />
          </LineShareButton>
        </div>

        <div className="Demo__some-network">
          <WeiboShareButton
            url={shareUrl}
            title={title}
            pic={`${String(window.location)}/${exampleImage}`}
            className="Demo__some-network__share-button">
            <img className="Demo__some-network__custom-icon" src="http://icons.iconarchive.com/icons/martz90/circle-addon2/512/weibo-icon.png" alt="Weibo share button" />
          </WeiboShareButton>
        </div>
      </div>
    );
  }
}

export default Share;
