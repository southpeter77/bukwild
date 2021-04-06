import React from "react";
import layoutUi from "./layout-Ui.css"

const Menu = ({data,setBackground,setHeadline,setSubHead,setCallToAction})=>{

    return (
        <div className="Industries-Services-AboutUs">
        <div
        style={{cursor:"pointer"}}
        onClick={()=>{
            setBackground(data.slug)
            setHeadline(data.blocks[0].headline)
            setSubHead(data.blocks[0].subhead)
            setCallToAction(data.blocks[0].cta)
        }}
        >{data.title}</div>
        </div>
    )
}


export default Menu