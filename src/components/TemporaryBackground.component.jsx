import React, { useState, useEffect } from 'react';
import styles from "./temporary-background-styles.css";

import ApplicationContainer from './ApplicationContainer.component';

const TemporaryBackground = () => {

  return (<div className="background">
            <ApplicationContainer />
          </div>);
}

export default TemporaryBackground;