import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card-creationmain.css";
import MessageBlock from "../../components/MessageBlock/MessageBlock";
import SimpleEditor from "../../components/WordEditor/SimpleEditor";
import WoodPanel from "../../components/WoodPanel/WoodPanel";
import bgStoryMain from "../../assets/imgs/bg-card-main.png";
import CardMessageBlock from "../../components/CardMessageBlock/CardMessageBlock";
import bgEditorBoard from "../../assets/imgs/card-text-board.png";

function CardCreationMainPage() {
    const navigate = useNavigate();
    const [workingTask, setWorkingTask] = useState("STORY") // STORY -> STORY_SEGMENTATION -> IMAGE_GENERATION 
    const [shift, setShift] = useState(0); 
    const [showPanel, setShowPanel] = useState(true);
    const goLastStep = () => {
        switch (workingTask) {
            case "STORY":
                navigate("/card/creation-goal");
                break;
            case "STORY_SEGMENTATION":
                setWorkingTask("STORY");
                setShift(shift-1);
                setShowPanel(true)
                // setTimeout(() => {
                //     setShowPanel(true);
                // }, 1000);
                break;
            case "IMAGE_GENERATION":
                setWorkingTask("STORY_SEGMENTATION");
                setShift(shift-1);
                break;
            default:
                alert("Error")
        }
    }
    // scroll to bottom
    const conversationBottomRef = useRef();
    const storySegmentBottomRef = useRef();
    // useEffect(() => {
    //     conversationBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    // }, [msgs]);
    // useEffect(() => {
    //     conversationBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    // }, [msgs]);


    const goNextStep = () => {
        switch (workingTask) {
            case "STORY":
                setWorkingTask("STORY_SEGMENTATION");
                setShift(shift+1);
                setTimeout(() => {
                    setShowPanel(false);
                }, 1000)
                break;
            case "STORY_SEGMENTATION":
                setWorkingTask("IMAGE_GENERATION");
                setShift(shift+1);
                break;
            case "IMAGE_GENERATION":
                navigate("/card/creation-review");
                break;
            default:
                alert("Error")
        }
    }
    
    const widthTransformMap = (shift) => {
        if(shift === 0){
            return 0;
        }else if(shift === 1){
            return 20;
        }else if(shift === 2){
            return 50;
        }else if(shift === 3){
            return 70;
        }
    } 


    // Page compoennt code go here
    const renderStoryConversationComponent = () => {
        return (
            <>
                <div className="card-conversation py-4 px-8 h-full flex flex-col gap-2">
                    <div className="flex flex-row w-full mx-auto justify-end"><button className="btn-white-2 shadow-card font-monofett text-h3">Add</button></div>
                    <div className="flex flex-col flex-grow gap-4 px-8 py-4 rounded-lg shadow-card bg-white w-full mx-auto overflow-auto story-message-block-gradient">
                        <CardMessageBlock/>
                        {/* <CardMessageBlock/>
                        <CardMessageBlock/> */}
                        <div ref={conversationBottomRef}></div>
                    </div>
                </div>
            </>

        )
    }

    const renderWoodPanel = () => {
        return (
            showPanel? (
                <div id="wood-panel-block-conversation" className={shift === 0 ? 'wood-slide-up' : 'wood-slide-down'}>
                    <WoodPanel></WoodPanel>
                </div>
            )
            :
            (
                ""
            )
        );
    }


    const renderStoryComponent = () => {
        return (
            <div className="card-story py-4 px-8 h-full w-full">
                <div className="flex flex-col gap-2 py-4 items-center justify-between w-full h-full relative">
                    <img src={bgEditorBoard} alt="a wood board" className="absolute h-full w-full z-[-10]"></img>

                    <div className="story-board-color font-monofett text-h2 w-5/6 text-left">STORY EDITOR</div>
                    <div className="w-5/6 flex-grow">
                        <SimpleEditor></SimpleEditor>
                    </div>
                </div>
            </div>
        )
    }
    const renderStorySegmentComponent = () => {
        return (
            <div className="card-conversation py-4 px-8 h-full flex flex-col">
                <div className="flex flex-row  w-full mx-auto justify-end"><button className="btn-white-2 font-monofett text-h3">Add</button></div>
                <div className="flex flex-col gap-4 px-8 py-4 bg-white w-full mx-auto overflow-auto story-message-block-gradient">
                    <MessageBlock/>
                    <MessageBlock/>
                    <MessageBlock/>
                    <MessageBlock/>
                    <div ref={conversationBottomRef}></div>
                </div>
            </div>
        )
    }
    const renderImageGenerationComponent = () => {
        return (
            <>
                Image Generation
            </>
        )
    }




    return ( 
        <div className="card-creation-main h-screen flex flex-col pt-16 pb-8 gap-4 relative">
            <div className="absolute h-screen w-screen left-0 top-0 z-[-100] center-full-height-img-box">
                <img src={bgStoryMain} alt="a desktop background" className="center-full-height-box-img"></img>
            </div>

            {/* <div className="creation-main-body flex flex-row" style={{transform: `translateX(-${shift * 25}%)`}}> */}
            <div className="creation-main-body flex flex-row" style={{transform: `translateX(-${widthTransformMap(shift)}%)`}}>
                <div className="creation-body-part h-full">
                    {renderStoryConversationComponent()}
                </div>

                <div className="creation-body-part h-full">
                    {renderStoryComponent()}
                </div>

                <div className="creation-body-part h-full">
                    {renderStorySegmentComponent()}
                </div>

                <div className="creation-body-part h-full">
                    {renderImageGenerationComponent()}
                </div>


            </div>

            <div className="flex flex-row justify-between h-12 px-4">
                <button className="btn-white-2 font-monofett text-h3 shadow-card" onClick={goLastStep}>PREV</button>
                <button className="btn-white-2 font-monofett text-h3 shadow-card" onClick={goNextStep}>NEXT</button>
            </div>
            
            {renderWoodPanel()}
        </div>
     );
}

export default CardCreationMainPage;