import React from "react";


export default () => {
  return <img lazy='loading' src={process.env.PUBLIC_URL + '/Images/circle-cropped.png'} alt="Logo" style={{ height: '200px' }}/>;
};

