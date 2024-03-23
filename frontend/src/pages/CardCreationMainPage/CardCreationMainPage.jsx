import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card-creationmain.css"
import WordEditor from "../../components/WordEditor/WordEditor";
// import FullEditor from "../../components/WordEditor/FullEditor";
import MessageBlock from "../../components/MessageBlock/MessageBlock";

function CardCreationMainPage() {
    const navigate = useNavigate();
    const [workingTask, setWorkingTask] = useState("STORY") // STORY -> STORY_SEGMENTATION -> IMAGE_GENERATION 
    const [shift, setShift] = useState(0); 
    const goLastStep = () => {
        switch (workingTask) {
            case "STORY":
                navigate("/card/creation-goal");
                break;
            case "STORY_SEGMENTATION":
                setWorkingTask("STORY");
                setShift(shift-1);
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
  
    // Page compoennt code go here
    const renderStoryConversationComponent = () => {
        return (
            <div className="card-conversation py-4 h-full flex flex-col">
                <div className="flex flex-row w-[480px] mx-auto justify-end"><button className="btn btn-neutral">Add</button></div>
                <div className="flex flex-col gap-4 p-8 bg-white w-[480px] mx-auto overflow-auto">
                    <MessageBlock/>
                    <MessageBlock/>
                    <MessageBlock/>
                    <MessageBlock/>
                    <div ref={conversationBottomRef}></div>
                </div>
            </div>
        )
    }
    const renderStoryComponent = () => {
        return (
            <div className="card-story py-4 px-8 h-full w-full">
                {/* <WordEditor></WordEditor> */}
                {/* <FullEditor></FullEditor> */}
            </div>
        )
    }
    const renderStorySegmentComponent = () => {
        return (
            <div className="card-conversation py-4 h-full flex flex-col">
                <div className="flex flex-row w-[480px] mx-auto justify-end"><button className="btn btn-neutral">Add</button></div>
                <div className="flex flex-col gap-4 p-8 bg-white w-[480px] mx-auto overflow-auto">
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
        <div className="card-creation-main h-screen flex flex-col py-4 gap-4">
            <div className="creation-main-body flex flex-row" style={{transform: `translateX(-${shift * 25}%)`}}>
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
                <button className="btn" onClick={goLastStep}>Last Step</button>
                <button className="btn" onClick={goNextStep}>Next Step</button>
            </div>
            
        </div>
     );
}

export default CardCreationMainPage;