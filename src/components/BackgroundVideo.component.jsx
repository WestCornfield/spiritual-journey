import React, { useState, useEffect } from 'react';

import classes from './BackgroundVideo.module.css';

import videoLink from '../resources/videos/waves.mp4';
import videoLinkMobile from '../resources/videos/waves_iphone6.mp4';

import ApplicationContainer from './ApplicationContainer.component';

const BackgroundVideo = () => {

  const size = useWindowSize();

  return (<div className={classes.Container}>
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
                <source src={videoLinkMobile} type="video/mp4" />
            </video>
            <div className={classes.Content}>
              <div className={classes.SubContent} >
                <ApplicationContainer />
              </div>
            </div>
          </div>);
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default BackgroundVideo;