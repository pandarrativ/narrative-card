import { useState, useEffect } from "react";
import "./word-editor.css";
import "./index.css";
import {useSettings} from './context/SettingsContext';
import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

import ToolbarPlugin from './plugins/ToolbarPlugin/index';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import PlaygroundNodes from './nodes/PlaygroundNodes';

import {ListPlugin} from '@lexical/react/LexicalListPlugin';
import {CheckListPlugin} from '@lexical/react/LexicalCheckListPlugin';
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin/index';
import MarkdownShortcutPlugin from './plugins/MarkdownShortcutPlugin/index';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin/index';
import {TablePlugin} from '@lexical/react/LexicalTablePlugin';
import TableCellResizer from './plugins/TableCellResizer';
import ImagesPlugin from './plugins/ImagesPlugin';
import InlineImagePlugin from './plugins/InlineImagePlugin';
import LinkPlugin from './plugins/LinkPlugin';
import PollPlugin from './plugins/PollPlugin';
import TwitterPlugin from './plugins/TwitterPlugin';
import YouTubePlugin from './plugins/YouTubePlugin';
import FigmaPlugin from './plugins/FigmaPlugin';
import {HorizontalRulePlugin} from '@lexical/react/LexicalHorizontalRulePlugin';
import EquationsPlugin from './plugins/EquationsPlugin';
import TabFocusPlugin from './plugins/TabFocusPlugin';
import {TabIndentationPlugin} from '@lexical/react/LexicalTabIndentationPlugin';
import CollapsiblePlugin from './plugins/CollapsiblePlugin';
import PageBreakPlugin from './plugins/PageBreakPlugin';
import {LayoutPlugin} from './plugins/LayoutPlugin/LayoutPlugin';
import DraggableBlockPlugin from './plugins/DraggableBlockPlugin';
import CodeActionMenuPlugin from './plugins/CodeActionMenuPlugin';
import FloatingLinkEditorPlugin from './plugins/FloatingLinkEditorPlugin';
import TableCellActionMenuPlugin from './plugins/TableActionMenuPlugin';
import FloatingTextFormatToolbarPlugin from './plugins/FloatingTextFormatToolbarPlugin';
import {ClearEditorPlugin} from '@lexical/react/LexicalClearEditorPlugin';
import EmojiPickerPlugin from './plugins/EmojiPickerPlugin';
import AutoEmbedPlugin from './plugins/AutoEmbedPlugin';
import MentionsPlugin from './plugins/MentionsPlugin';
import EmojisPlugin from './plugins/EmojisPlugin';
import {HashtagPlugin} from '@lexical/react/LexicalHashtagPlugin';
import KeywordsPlugin from './plugins/KeywordsPlugin';
import SpeechToTextPlugin from './plugins/SpeechToTextPlugin';
import AutoLinkPlugin from './plugins/AutoLinkPlugin';
import TreeViewPlugin from './plugins/TreeViewPlugin';


const PlaceHolder = () => {
    return (
        <div className="editor-placeholder">Enter your story...</div>
    )
}


function WordEditor() {
    const {
        settings: {
            isCollab,
            isAutocomplete,
            isMaxLength,
            isCharLimit,
            isCharLimitUtf8,
            isRichText,
            showTreeView,
            showTableOfContents,
            shouldUseLexicalContextMenu,
            tableCellMerge,
            tableCellBackgroundColor, 
            emptyEditor, 
            measureTypingPerf,
            },
        } = useSettings();
    const initialConfig = {
        namespace: 'Pandarrative Word Editor',
        nodes: [...PlaygroundNodes],
        onError: (error) => {
          throw error;
        },
        theme: PlaygroundEditorTheme,
    };
    

    const [floatingAnchorElem, setFloatingAnchorElem] = useState(null);
    const [isSmallWidthViewport, setIsSmallWidthViewport] = useState(false);
    const [isLinkEditMode, setIsLinkEditMode] = useState(false);
    const onRef = (_floatingAnchorElem) => {
        if (_floatingAnchorElem !== null) {
        setFloatingAnchorElem(_floatingAnchorElem);
        }
    };
    

    return (
        <div id="word-editor">
            <LexicalComposer initialConfig={initialConfig}>
            <AutoFocusPlugin />
            <ClearEditorPlugin />
            <EmojiPickerPlugin />
            <AutoEmbedPlugin />

            <MentionsPlugin />
            <EmojisPlugin />
            <HashtagPlugin />
            <KeywordsPlugin />
            <SpeechToTextPlugin />
            <AutoLinkPlugin />
            <HistoryPlugin />


            <div className="editor-container">
                <ToolbarPlugin />
                {/* <div className="editor-inner "> */}
                <div className="editor-shell">
                <RichTextPlugin
                    contentEditable={<ContentEditable className="editor-input" />}
                    placeholder={<PlaceHolder></PlaceHolder>}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <MarkdownShortcutPlugin />
                <CodeHighlightPlugin />
                <ListPlugin />
                <CheckListPlugin />
                <ListMaxIndentLevelPlugin maxDepth={7} />
                <TablePlugin
                    hasCellMerge={tableCellMerge}
                    hasCellBackgroundColor={tableCellBackgroundColor}
                />
                <TableCellResizer />
                <ImagesPlugin />
                <InlineImagePlugin />
                <LinkPlugin />
                <PollPlugin />
                <TwitterPlugin />
                <YouTubePlugin />
                <FigmaPlugin />
                {/* {!isEditable && <LexicalClickableLinkPlugin />} */}
                <HorizontalRulePlugin />
                <EquationsPlugin />
                <TabFocusPlugin />
                <TabIndentationPlugin />
                <CollapsiblePlugin />
                <PageBreakPlugin />
                <LayoutPlugin />
                {floatingAnchorElem && !isSmallWidthViewport && (
                    <>
                        <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
                        <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />
                        <FloatingLinkEditorPlugin
                        anchorElem={floatingAnchorElem}
                        isLinkEditMode={isLinkEditMode}
                        // setIsLinkEditMode={setIsLinkEditMode}
                        />
                        <TableCellActionMenuPlugin
                        anchorElem={floatingAnchorElem}
                        cellMerge={true}
                        />
                        <FloatingTextFormatToolbarPlugin
                        anchorElem={floatingAnchorElem}
                        />
                    </>
                    )}
                {/* {(isCharLimit || isCharLimitUtf8) && (
                <CharacterLimitPlugin
                    charset={isCharLimit ? 'UTF-16' : 'UTF-8'}
                    maxLength={5}
                />
                )} */}


    
                <TreeViewPlugin />
                </div>
            </div>
            </LexicalComposer>
        </div>
    );
}

export default WordEditor;