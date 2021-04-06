import React,{useState} from "react"
import layoutUi from "./layout-Ui.css"
import Logo from "./Logo"
import Menu from "./Menu"
import ContactUs from "./ContactUs"

const LayoutUi = function ({ data, setBackground, setHeadline, setSubHead, setCallToAction }) {
    return (
        <>
            <div className="LayoutUI__Container">
                <div className="left_LogoMenu_Container">
                    <Logo></Logo>
                    {data.map((each,i) => <Menu 
                        key={i}
                        data={each}
                        setBackground={setBackground}
                        setHeadline={setHeadline}
                        setSubHead={setSubHead}
                        setCallToAction={setCallToAction}
                    ></Menu>)}
                </div>
                <div className="right_ContactUs_Container">
                    <ContactUs />
                </div>

            </div>
        </>
    )
}

export default LayoutUi