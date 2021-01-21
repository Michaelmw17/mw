import React from "react";


const  MyComp = ()  => {
    return <img src={process.env.PUBLIC_URL + '/Images/circle-cropped.png'} alt="Logo" style={{ height: '200px', width: '200px'}}/>;
};

export default MyComp;