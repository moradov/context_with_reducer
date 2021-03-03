import React, { useState, useEffect } from 'react';

export default (message, color, position, delay) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertJSX, setAlertJSX] = useState(null);

  const setAlert = () => {
    setShowAlert(true);
    //hide alert
    const defaultDelay = 5000;
    setTimeout(
      () => setAlertJSX(null),
      delay && typeof delay === 'number' ? delay : defaultDelay
    );
  };
  const setPositionStyle = () => {
    let returnedStyle = {};
    //set position style
    if (position && position === 'top') {
      returnedStyle = {
        ...returnedStyle,
        top: 0,
      };
    } else if ((position && position === 'bottom') || !position) {
      returnedStyle = {
        ...returnedStyle,
        bottom: 0,
      };
    }
    //set color style
    color
      ? (returnedStyle = { ...returnedStyle, backGroundColor: color })
      : (returnedStyle = { ...returnedStyle, backGroundColor: 'blue' });
    return returnedStyle;
  };
  useEffect(() => {
    if (showAlert) {
      setAlertJSX(
        <div
          style={{
            padding: '10px 10px',
            backgroundColor: color ? color : '#FFF',
            color: 'white',
            textAlign: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            ...setPositionStyle(),
          }}
        >
          {message && typeof message == 'string'
            ? message
            : 'the operation is done'}
        </div>
      );
    } else {
      setShowAlert(false);
    }
    // eslint-disable-next-line
  }, [showAlert]);

  return [alertJSX, setAlert];
};
