import { useState } from "react";
import "./message-block.css";
import iconAI from "../../assets/icons/ai.svg";

function MessageBlock({title, content, prompt, onTitleChange, onContentChange, onPromptChange, regenerateContent, onDelete}) {
    const [showPrompt, setShowPrompt] = useState(false);

    return ( 
        <div className="message-block flex flex-col gap-0">
            <div className="flex flex-row gap-2 w-full py-2 px-4 items-center">
                <input type="text" className="flex-grow font-semibold outline-none" placeholder="Title" value={title} onChange={onTitleChange}/>
                <button className="message-block-btn" onClick={onDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <textarea 
                className="textarea-message-block text-small1 min-h-24" 
                placeholder="Content Description" 
                value={content} 
                onChange={onContentChange}
            ></textarea>
            <textarea 
                className={`textarea-message-block text-small1 message-prompt message-prompt-show-${showPrompt}`} 
                placeholder="Your Prompt"
                value={prompt}
                onChange={onPromptChange}
            ></textarea>
            <div className="flex flex-row gap-2 justify-between py-1 px-4 items-center message-block-btns">
                <button className="message-block-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </button>
                <button className="message-block-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </button>
                <div className="flex-grow"></div>

                {showPrompt ? 
                    <button className="message-block-btn" onClick={regenerateContent}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                    :
                    ""
                }

                <button className="message-block-btn" onClick={() => setShowPrompt(!showPrompt)}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg> */}
                    <img src={iconAI} alt="click to show ai prompt" className="w-3 h-3 m-[0.125rem]"></img>
                </button>
            </div>
        </div>
     );
}

export default MessageBlock;