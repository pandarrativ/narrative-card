import PlainEditor from "../components/WordEditor/PlainEditor";
import SimpleEditor from "../components/WordEditor/SimpleEditor";
import WordEditor from "../components/WordEditor/WordEditor";

function Testing() {
    return ( 
        <div className="w-full p-36 bg-gray-3">
            <div className="text-h3 text-center">Word Editor</div>
            <WordEditor></WordEditor>
            {/* <PlainEditor></PlainEditor> */}
            {/* <SimpleEditor></SimpleEditor> */}
        </div>
     );
}

export default Testing;