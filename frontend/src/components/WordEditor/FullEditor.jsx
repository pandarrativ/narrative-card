import "./word-editor.css";
import "./index.css";
import {useEffect, useState} from 'react';


import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import Placeholder from './ui/Placeholder';
import ToolbarPlugin from './plugins/ToolbarPlugin/index';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import PlaygroundNodes from './nodes/PlaygroundNodes';


import {useSettings} from './context/SettingsContext';
import useLexicalEditable from '@lexical/react/useLexicalEditable';
import {MaxLengthPlugin} from "./plugins/MaxLengthPlugin/index";
import DragDropPaste from './plugins/DragDropPastePlugin/index';
import {DraggableBlockPlugin} from './plugins/DraggableBlockPlugin/index';

import {ActionsPlugin} from './plugins/ActionsPlugin/index';
import {AutocompletePlugin} from './plugins/AutocompletePlugin/index';
import {AutoEmbedPlugin} from './plugins/AutoEmbedPlugin/index';
import {AutoLinkPlugin} from './plugins/AutoLinkPlugin/index';
import CodeActionMenuPlugin from './plugins/CodeActionMenuPlugin/index';
import {CodeHighlightPlugin} from './plugins/CodeHighlightPlugin/index';
import {CollapsiblePlugin} from './plugins/CollapsiblePlugin/index';
import {CommentPlugin} from './plugins/CommentPlugin/index';
// import ComponentPickerPlugin from './plugins/ComponentPickerPlugin/index';
import {ContextMenuPlugin} from './plugins/ContextMenuPlugin/index';
import {EmojiPickerPlugin} from './plugins/EmojiPickerPlugin/index';
import {EmojisPlugin} from './plugins/EmojisPlugin/index';
import {EquationsPlugin} from './plugins/EquationsPlugin/index';
import {FigmaPlugin} from './plugins/FigmaPlugin/index';
import {FloatingLinkEditorPlugin} from './plugins/FloatingLinkEditorPlugin/index';
import {FloatingTextFormatToolbarPlugin} from './plugins/FloatingTextFormatToolbarPlugin/index';
import {ImagesPlugin} from './plugins/ImagesPlugin/index';
import {InlineImagePlugin} from './plugins/InlineImagePlugin/index';
import {KeywordsPlugin} from './plugins/KeywordsPlugin/index';
import {LayoutPlugin} from './plugins/LayoutPlugin/LayoutPlugin';
import {LinkPlugin} from './plugins/LinkPlugin/index';
import {ListMaxIndentLevelPlugin} from './plugins/ListMaxIndentLevelPlugin/index';
import {MarkdownShortcutPlugin} from './plugins/MarkdownShortcutPlugin/index';
import {MentionsPlugin} from './plugins/MentionsPlugin/index';
import {PageBreakPlugin} from './plugins/PageBreakPlugin/index';
import {PollPlugin} from './plugins/PollPlugin/index';
import {SpeechToTextPlugin} from './plugins/SpeechToTextPlugin/index';
import {TabFocusPlugin} from './plugins/TabFocusPlugin/index';
import TableCellActionMenuPlugin from './plugins/TableActionMenuPlugin/index';
import {TableCellResizer} from './plugins/TableCellResizer';
import {TableOfContentsPlugin} from './plugins/TableOfContentsPlugin/index';
import {TreeViewPlugin} from './plugins/TreeViewPlugin/index';
import {TwitterPlugin} from './plugins/TwitterPlugin/index';
import {YouTubePlugin} from './plugins/YouTubePlugin/index';
import {CharacterLimitPlugin} from '@lexical/react/LexicalCharacterLimitPlugin';
import {CheckListPlugin} from '@lexical/react/LexicalCheckListPlugin';
import {ClearEditorPlugin} from '@lexical/react/LexicalClearEditorPlugin';
import LexicalClickableLinkPlugin from '@lexical/react/LexicalClickableLinkPlugin';
import {CollaborationPlugin} from '@lexical/react/LexicalCollaborationPlugin';
import {HashtagPlugin} from '@lexical/react/LexicalHashtagPlugin';
import {HorizontalRulePlugin} from '@lexical/react/LexicalHorizontalRulePlugin';
import {ListPlugin} from '@lexical/react/LexicalListPlugin';
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {TabIndentationPlugin} from '@lexical/react/LexicalTabIndentationPlugin';
import {TablePlugin} from '@lexical/react/LexicalTablePlugin';





const PlaceHolder = () => {
    return (
        <div className="editor-placeholder">Enter your story...</div>
    )
}


function FullEditor() {
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
        },
    } = useSettings();
    const isEditable = useLexicalEditable();
    const text = isCollab
        ? 'Enter some collaborative rich text...'
        : isRichText
        ? 'Enter some rich text...'
        : 'Enter some plain text...';
    const placeholder = <Placeholder>{text}</Placeholder>;
    const [floatingAnchorElem, setFloatingAnchorElem] = useState(null);
    const [isSmallWidthViewport, setIsSmallWidthViewport] = useState(false);
    const [isLinkEditMode, setIsLinkEditMode] = useState(false);
const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };


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
                    <ToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} />
                    <div className="editor-inner">
                    <div
                        className={`editor-container ${showTreeView ? 'tree-view' : ''} ${
                        !isRichText ? 'plain-text' : ''
                        }`}>
                        {isMaxLength && <MaxLengthPlugin maxLength={30} />}
                        <DragDropPaste />
                        <AutoFocusPlugin />
                        <ClearEditorPlugin />
                        {/* <ComponentPickerPlugin /> */}
                        <EmojiPickerPlugin />
                        <AutoEmbedPlugin />

                        {/* <MentionsPlugin /> */}
                        {/* <EmojisPlugin /> */}
                        {/* <HashtagPlugin /> */}
                        {/* <KeywordsPlugin /> */}
                        {/* <SpeechToTextPlugin /> */}
                        {/* <AutoLinkPlugin /> */}
                        {/* <CommentPlugin
                        providerFactory={isCollab ? createWebsocketProvider : undefined}
                        /> */}
                        
                        {/* <HistoryPlugin externalHistoryState={historyState} /> */}
                        {/* <RichTextPlugin
                        contentEditable={
                            <div className="editor-scroller">
                            <div className="editor" ref={onRef}>
                                <ContentEditable />
                            </div>
                            </div>
                        }
                        placeholder={placeholder}
                        ErrorBoundary={LexicalErrorBoundary}
                        /> */}
                        {/* <MarkdownShortcutPlugin /> */}
                        {/* <CodeHighlightPlugin /> */}
                        {/* <ListPlugin /> */}
                        {/* <CheckListPlugin /> */}
                        {/* <ListMaxIndentLevelPlugin maxDepth={7} /> */}
                        {/* <TablePlugin
                        hasCellMerge={tableCellMerge}
                        hasCellBackgroundColor={tableCellBackgroundColor}
                        /> */}
                        {/* <TableCellResizer /> */}
                        {/* <ImagesPlugin /> */}
                        {/* <InlineImagePlugin /> */}
                        {/* <LinkPlugin /> */}
                        {/* <PollPlugin /> */}
                        {/* <TwitterPlugin /> */}
                        {/* <YouTubePlugin /> */}
                        {/* <FigmaPlugin /> */}
                        {/* {!isEditable && <LexicalClickableLinkPlugin />} */}
                        {/* <HorizontalRulePlugin /> */}
                        {/* <EquationsPlugin /> */}
                        {/* <ExcalidrawPlugin /> */}
                        {/* <TabFocusPlugin /> */}
                        {/* <TabIndentationPlugin /> */}
                        {/* <CollapsiblePlugin /> */}
                        {/* <PageBreakPlugin /> */}
                        {/* <LayoutPlugin /> */}
                        {/* {floatingAnchorElem && !isSmallWidthViewport && (
                        <>
                            <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
                            <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />
                            <FloatingLinkEditorPlugin
                            anchorElem={floatingAnchorElem}
                            isLinkEditMode={isLinkEditMode}
                            setIsLinkEditMode={setIsLinkEditMode}
                            />
                            <TableCellActionMenuPlugin
                            anchorElem={floatingAnchorElem}
                            cellMerge={true}
                            />
                            <FloatingTextFormatToolbarPlugin
                            anchorElem={floatingAnchorElem}
                            />
                        </>
                        )} */}
              
                        
                        {/* {(isCharLimit || isCharLimitUtf8) && (
                        <CharacterLimitPlugin
                            charset={isCharLimit ? 'UTF-16' : 'UTF-8'}
                            maxLength={5}
                        />
                        )} */}
                        {/* {isAutocomplete && <AutocompletePlugin />} */}
                        {/* <div>{showTableOfContents && <TableOfContentsPlugin />}</div> */}
                        {/* {shouldUseLexicalContextMenu && <ContextMenuPlugin />} */}
                        {/* <ActionsPlugin isRichText={isRichText} /> */}
                    </div>
                    {/* {showTreeView && <TreeViewPlugin />} */}



                    </div>
                </div>
            </LexicalComposer>
        </div>
    );
}

export default FullEditor;