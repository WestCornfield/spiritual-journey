import React from 'react';

import classes from './BackgroundVideo.module.css';

import videoLink from '../resources/videos/waves_iphone6.mp4';

import ApplicationContainer from './ApplicationContainer.component';

const BackgroundVideo = () => {
  return (<div className={classes.Container}>
            <video autoplay="autoplay" loop="loop" muted className={classes.Video}>
                <source src={videoLink} type="video/mp4" />
            </video>
            <div className={classes.Content}>
              <div className={classes.SubContent} >
                <ApplicationContainer />
              </div>
            </div>
          </div>);
}

export default BackgroundVideo;