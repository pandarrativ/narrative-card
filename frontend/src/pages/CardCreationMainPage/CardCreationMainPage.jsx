import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card-creationmain.css";
import MessageBlock from "../../components/MessageBlock/MessageBlock";
import SimpleEditor from "../../components/WordEditor/SimpleEditor";
import WoodPanel from "../../components/WoodPanel/WoodPanel";
import bgStoryMain from "../../assets/imgs/bg-card-main.png";
import bgEditorBoard from "../../assets/imgs/card-text-board.png";
import CardSegmentWoodPanel from "../../components/CardSegmentWoodPanel/CardSegmentWoodPanel";
import SlidingCarousel from "../../components/SlidingCarousel/SlidingCarousel";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";

function CardCreationMainPage() {
    const navigate = useNavigate();
    const [workingTask, setWorkingTask] = useState("STORY") // STORY -> STORY_SEGMENTATION -> IMAGE_GENERATION 
    const [shift, setShift] = useState(0); 
    const [showPanel, setShowPanel] = useState(true);
    const [showSegmentModal, setShowSegmentModal] = useState(false);
    const [showmModalBGCover, setShowModalBGCover] = useState(false);
    const [showSegmentCarousel, setShowSegmentCarousel] = useState(false);


    const goLastStep = () => {
        switch (workingTask) {
            case "STORY":
                navigate("/card/creation-goal");
                break;
            case "STORY_SEGMENTATION":
                setWorkingTask("STORY");
                setShift(shift-1);
                setShowPanel(true)
                break;
            case "IMAGE_GENERATION":
                setWorkingTask("STORY_SEGMENTATION");
                setShift(shift-1);
                setTimeout(() => {
                    setShowSegmentCarousel(false);
                }, 500);
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
                setTimeout(() => {
                    setShowSegmentCarousel(true);
                }, 500);
                break;
            case "IMAGE_GENERATION":
                navigate("/card/creation-review");
                break;
            default:
                alert("Error")
        }
    }
    

    // 1. Conversation
    const renderStoryConversationComponent = () => {
        return (
            <div className="card-conversation py-4 px-8 h-full flex flex-col gap-2">
                <div className="flex flex-row w-full mx-auto justify-end"><button className="btn-white-2 shadow-card font-monofett text-h3">Add</button></div>
                <div className="flex flex-col flex-grow gap-4 px-8 py-4 rounded-lg shadow-card w-full mx-auto overflow-auto story-message-block-gradient">
                    <MessageBlock/>

                    <div ref={conversationBottomRef}></div>
                </div>
            </div>
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

    // 2.Story
    const renderStoryComponent = () => {
        return (
            <div className="card-story py-4 px-8 h-full w-full">
                <div className="flex flex-col gap-2 py-4 items-center justify-between w-full h-full relative">
                    <img src={bgEditorBoard} alt="a wood board" className="absolute h-full top-0 w-full z-[-10] shadow-thik rounded-md"></img>
                    <div className="story-board-color font-monofett text-h2 w-5/6 text-left">STORY EDITOR</div>
                    <div className="w-5/6 flex-grow shadow-card rounded-lg">
                        <SimpleEditor></SimpleEditor>
                    </div>
                </div>
            </div>
        )
    }


    // 3.Segments
    const renderStorySegmentComponent = () => {
        return (
            showSegmentCarousel ?
            (
                <div className={`card-segment py-4 px-8 h-full flex flex-col gap-2 ${shift === 2 ? "fade-enter-active fade-exit": "fade-exit-activate fade-enter"}`}>
                    <div className="h-full w-full flex flex-col gap-2 px-4 py-4 story-segment-gradient shadow-card rounded-lg">
                        <div className="w-full h-3/6">
                            <SlidingCarousel></SlidingCarousel>
                        </div>
                        <div className="story-board-color font-monofett text-h4">Segment Story</div>
                        <textarea className="w-full h-3/6 resize-none rounded-lg outline-none p-4 shadow-card" placeholder="Pick a card to show the story..."/>
                    </div>
                </div>
            ):
            (
                <div className={`card-segment py-4 px-8 h-full flex flex-col gap-2 ${shift === 2 ? "fade-exit-activate fade-enter" : "fade-exit fade-enter-active"}`}>
                    <div className="h-full w-full flex flex-col gap-2 story-segment-gradient shadow-card rounded-lg px-4 py-4">
                        <div className="flex flex-row justify-between w-full items-center">
                            <div className="story-board-color font-monofett text-h2 w-5/6 text-left">STORY SEGMENTS</div>
                            <button 
                                className="btn-white-2 h-8 shadow-card font-monofett text-h5 whitespace-nowrap" 
                                onClick={() =>{
                                    setShowSegmentModal(true);
                                    setShowModalBGCover(true);
                                }}
                            >AI-Segmentation</button>
                        </div>
                        <div className="card-segments-block flex flex-row flex-grow gap-4 w-full mx-auto overflow-auto pb-4 pt-1 px-1">
                            <MessageBlock openPrompt={true}/>
                            <MessageBlock openPrompt={true}/>
                            <MessageBlock openPrompt={true}/>
                            <MessageBlock openPrompt={true}/>
                            <MessageBlock openPrompt={true}/>
                            <MessageBlock openPrompt={true}/>
                            <MessageBlock openPrompt={true}/>

                            <div ref={storySegmentBottomRef}></div>
                        </div>
                    </div>
                </div>
            )
        )
    }
    const renderSegmentModal = () => {
        return (
            shift === 1 &&
            (<div id="wood-panel-block-segment" className={`card-segment-wood ${showSegmentModal && 'card-segment-wood-up'}`}>
                <CardSegmentWoodPanel 
                    onClose={() => {
                        setShowSegmentModal(false);
                        setTimeout(() => {
                            setShowModalBGCover(false);
                        }, 1000);
                    }}
                ></CardSegmentWoodPanel>
            </div>
            ) 
        );
    }



    // 4.ImageGeneration
    const renderImageGenerationComponent = () => {
        return (
            <div className="card-image-generation py-4 px-8 h-full w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2 p-4 items-center justify-between w-full h-full relative">
                    <img src={bgEditorBoard} alt="a wood board" className="absolute h-full top-0 w-full z-[-10] shadow-thik rounded-md"></img>
                    <div className="w-full flex flex-row justify-between">
                        <div className="story-board-color w-full font-monofett text-h2 text-left">STORY EDITOR</div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="font-title font-semibold">Pick the story segment:</span>
                            </div>
                            <select className="select select-bordered">
                                <option>Card 1</option>
                                <option>Card 2</option>
                                <option>Card 3</option>
                                <option>Card 4</option>
                                <option>Card 5</option>
                            </select>
                        </label>
                    </div>
                    



                    <div className="w-full flex-grow rounded-lg shadow-card">
                        <Excalidraw
                            // initialData={{appState: {viewBackgroundColor: "#fcf7e6" }}}
                            >
                            <MainMenu>
                            <MainMenu.Group title="File Operations">
                                <MainMenu.DefaultItems.LoadScene/>
                                <MainMenu.DefaultItems.SaveAsImage/>
                                <MainMenu.DefaultItems.Export/>
                            </MainMenu.Group>
                            <MainMenu.Group title="Canvas Operations">
                                <MainMenu.DefaultItems.ToggleTheme/>
                                <MainMenu.DefaultItems.ClearCanvas/>
                                <MainMenu.DefaultItems.ChangeCanvasBackground/>
                            </MainMenu.Group>
                            </MainMenu>
                        </Excalidraw>
                    </div>
                </div>
            </div>
        ) 
    }




    return ( 
        <div className="card-creation-main h-screen flex flex-col pt-16 pb-8 gap-4 relative">
            <div className="absolute h-screen w-screen left-0 top-0 z-[-100] center-full-height-img-box">
                <img src={bgStoryMain} alt="a desktop background" className="center-full-height-box-img"></img>
            </div>

            <div className="creation-main-body flex flex-row" style={{transform: `translateX(-${shift * 25}%)`}}>
                <div className={`creation-body-part h-full ${shift === 0 ? 'card-left-part': ''}`}>
                    {renderStoryConversationComponent()}
                </div>

                <div className={`creation-body-part h-full ${shift === 0 ? 'card-right-part': ''} ${shift === 1 ? 'card-left-part': ''}`}>
                    {renderStoryComponent()}
                </div>

                <div className={`creation-body-part h-full ${shift === 1 ? 'card-right-part': ''} ${shift === 2 ? 'card-left-part': ''}`}>
                    {renderStorySegmentComponent()}
                </div>

                <div className={`creation-body-part h-full ${shift === 2 ? 'card-right-part': ''}`}>
                    {renderImageGenerationComponent()}
                </div>


            </div>

            <div className="flex flex-row justify-between h-12 px-4">
                <button className="btn-white-2 font-monofett text-h3 shadow-card" onClick={goLastStep}>PREV</button>
                <button className="btn-white-2 font-monofett text-h3 shadow-card" onClick={goNextStep}>NEXT</button>
            </div>
            
            {renderWoodPanel()}
            {renderSegmentModal()}
            {showmModalBGCover && <div className="bg-modal-cover"></div>}
        </div>
     );
}

export default CardCreationMainPage;