import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card-creationmain.css"
import WordEditor from "../../components/WordEditor/WordEditor";

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
            <>
                Conversation
            </>
        )
    }
    const renderStoryComponent = () => {
        return (
            <WordEditor></WordEditor>
        )
    }
    const renderStorySegmentComponent = () => {
        return (
            <>
                Story Segment
            </>
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
        <div className="card-crestion-main h-screen flex flex-col py-4 gap-4">
            <div className="creation-main-body flex flex-row" style={{transform: `translateX(-${shift * 25}%)`}}>
                <div className="creation-body-part">
                    {renderStoryConversationComponent()}
                </div>

                <div className="creation-body-part">
                    {renderStoryComponent()}
                </div>

                <div className="creation-body-part">
                    {renderStorySegmentComponent()}
                </div>

                <div className="creation-body-part">
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