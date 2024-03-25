import { useState } from "react";
import "./wood-panel.css"
import iconWoodPanel from "./imgs/woodpanel.png";
import iconMouse from "./imgs/mouse.svg";

function WoodPanel() {
    const [isExpand, setIsExpand] = useState(false);

    return ( 
        <div className={`wood-panel ${isExpand ? "wood-panel-expand": ""}`}>
            <img src={iconWoodPanel} alt="a wood panel" className="wood-panel-img"></img>
            <button className="wood-panel-mouse hover:cursor-pointer" onClick={() => setIsExpand(!isExpand)}>
                <img src={iconMouse} alt="a mouse to click"></img>
            </button>
            <div className="wood-panel-body flex flex-col justify-between items-center">
                <textarea className="gray-text-area h-64 w-full" placeholder="Enter your prompt... "></textarea>
                {/* <button className="btn-white-1 font-content flex flex-row gap-1"><WoodFont text="CONTINUE"/></button> */}
                <button className="btn-white-1 font-monofett text-h3 flex flex-row gap-1">CONTINUE</button>
            </div>
        </div>
     );
}

export default WoodPanel;