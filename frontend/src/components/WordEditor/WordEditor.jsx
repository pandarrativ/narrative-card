import "./word-editor.css";
import "./index.css";
import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

import ToolbarPlugin from './plugins/ToolbarPlugin/index';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import PlaygroundNodes from './nodes/PlaygroundNodes';

// const theme = {
//     text: {
//         bold: "text-bold",
//         italic: "text-italic",
//         underline: "text-underline",
//         code: 'text-code',
//         highlight: 'text-highlight',
//         strikethrough: 'text-strikethrough',
//         subscript: 'text-subscript',
//         superscript: 'text-superscript',
//     },
// }


const PlaceHolder = () => {
    return (
        <div className="editor-placeholder">Enter your story...</div>
    )
}


function WordEditor() {
    // const editorConfig = {
    //     namespace: 'Pandarrative Word Editor',
    //     theme,
    //     nodes: [HeadingNode],
    //     onError,
    // };
    const initialConfig = {
        namespace: 'Pandarrative Word Editor',
        nodes: [...PlaygroundNodes],
        onError: (error) => {
          throw error;
        },
        theme: PlaygroundEditorTheme,
      };
    

    return (
        <div id="word-editor">
            <LexicalComposer initialConfig={initialConfig}>
                <div className="editor-container">
                    <ToolbarPlugin />
                    <div className="editor-inner">
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="editor-input" />}
                        placeholder={<PlaceHolder></PlaceHolder>}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                    {/* <TreeViewPlugin /> */}
                    </div>
                </div>
            </LexicalComposer>
        </div>
    );
}

export default WordEditor;