import React from 'react';

function CallToAction({ callToAction }) {
    return (
        <>
            <div className="callToAction">
                <div>
                    {callToAction}
                </div>
                <div style={{cursor:"pointer"}}>
                    LET'S TALK ->
            </div>
            </div>
        </>
    );
}

export default CallToAction;