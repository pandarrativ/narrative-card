import "./word-editor.css";
import {$getRoot, $getSelection} from 'lexical';
import {useState, useEffect} from 'react';

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

import ToolbarPlugin from "./ToolbarPlugin";

const theme = {
    // Theme styling goes here
}
function onError(error) {
console.error(error);
}

function WordEditor() {
    const editorConfig = {
        namespace: 'WordEditor',
        theme,
        onError,
      };

    return (
        <div id="word-editor">
            <LexicalComposer initialConfig={editorConfig}>
                <div className="editor-container">
                    <ToolbarPlugin />
                    <div className="editor-inner">
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="editor-input" />}
                        placeholder={"asd"}
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