import React from 'react';
import pageUI from './page-UI.css'
import Headline from "./Headline"
import Subhead from "./Subhead"
import CallToAction from "./CallToAction"

function Container({headline, subHead, callToAction}) {
    return (
        <>
        <div className="container">
        <Headline headline={headline}></Headline>
        <Subhead subHead={subHead}></Subhead>
        </div>
        <CallToAction callToAction={callToAction}></CallToAction>

        </>
    );
}

export default Container;