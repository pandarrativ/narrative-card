import { useState } from "react";
import "./sliding-carousel.css";
import defaultCard from "./imgs/default-card.png";

function SlidingCarousel() {
    const [centerIndex, setCenterIndex] = useState(0);
    const [dataList, setDataList] = useState([0,1,2,3,4,5, 6, 7])

    const calculateStyle = (index) => {
        if(index === centerIndex){
            return {x:"50%", y:"50%", z:dataList.length+1, scale:"22%"};
        }else if(index < centerIndex){
            let gap = 50/(centerIndex+1);
            let x = gap*(index + 1);
            let scale = 50 + 50/(centerIndex)*index;
            return {x:`${x}%`, y:"50%", z:index+1, scale:`${0.22*scale}%`};
        }else{
            let gap = 50/(dataList.length - centerIndex);
            let x = 100 - gap*(dataList.length - index);
            let scale = 100 - 50/(dataList.length - centerIndex - 1)*(index - centerIndex);
            return {x:`${x}%`, y:"50%", z:dataList.length - index + 1, scale:`${0.22*scale}%`};
        }
    }

    // for(let i=0; i<dataList.length; i++){
    //     console.log("cur:", centerIndex)
    //     console.log(i, ": ", calculateStyle(i));
    // }



    return ( 
        <div className="sliding-carousel">
            {dataList.map((item, i) => {
                let style = calculateStyle(i);
                return (
                    <div 
                        className={`sliding-carousel-card ${i === centerIndex ? "carousel-card-selected": ""}`} 
                        key={i} 
                        style={{left:style.x, top:style.y, zIndex:style.z, width:style.scale, transition:"all 0.5s ease"}}
                        onClick={() => setCenterIndex(i)}
                    >
                        <img src={defaultCard} alt="a green card"></img>
                    </div>
                )
            })}
        </div>
     );
}

export default SlidingCarousel;