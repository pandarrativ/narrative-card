import WordEditor from "../components/WordEditor/WordEditor";

function Testing() {
    return ( 
        <div className="w-full p-36 bg-gray-3">
            <button className="testing">asd</button>
            <WordEditor setIsLinkEditMode={false}></WordEditor>
        </div>
     );
}

export default Testing;