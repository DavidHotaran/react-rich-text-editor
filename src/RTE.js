import { useEffect, useRef, useState } from "react";
import { TypeBold, TypeItalic, TypeUnderline, ListOl, ListUl, TypeH1, TypeH2, TypeH3, Fonts } from "react-bootstrap-icons";

const OPTIONS = [
    {
        "command": "bold",
        "icon": TypeBold
    },
    {
        "command": "italic",
        "icon": TypeItalic
    },
    {
        "command": "underline",
        "icon": TypeUnderline
    },
    {
        "command": "insertOrderedList",
        "icon": ListOl
    },
    {
        "command": "insertUnorderedList",
        "icon": ListUl
    },
    {
        "command": "H1",
        "icon": TypeH1
    },
    {
        "command": "H2",
        "icon": TypeH2
    },
    {
        "command": "H3",
        "icon": TypeH3
    },
    {
        "command": "T",
        "icon": Fonts
    },
];

const RTE = () => {
    const inputFocus = useRef(null);
    const [output, setOutput] = useState("");

    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    const handleClick = (type) => {
        switch (type) {
            case "bold":
                document.execCommand('bold', false)
                break;
            case "italic":
                document.execCommand('italic', false)
                break;
            case "underline":
                document.execCommand('underline', false)
                break;
            case "insertOrderedList":
                document.execCommand('insertOrderedList', false)
                break;
            case "insertUnorderedList":
                document.execCommand('insertUnorderedList', false)
                break;
            case "H1":
                document.execCommand('fontSize', false, '6')
                break;
            case "H2":
                document.execCommand('fontSize', false, '5')
                break;
            case "H3":
                document.execCommand('fontSize', false, '4')
                break;
            case "T":
                document.execCommand('fontSize', false, '3')
                break;
            default:
                break;
        };
        inputFocus.current.focus();
    };

    return (
        <>
            <div className="border rounded-md w-[600px] h-96 overflow-auto mt-3">
                <div className="border-b-2 flex">
                    {OPTIONS.map(item => <Button handleCommand={handleClick} item={item} key={item.command} />)}
                </div>
                <div contentEditable spellCheck={false} className="h-[338px] border-none outline-none p-1" ref={inputFocus}>
                </div>
            </div>
        </>
    );
};

function Button({ handleCommand, item }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(s => !s);
        handleCommand(item.command);
    };

    return (
        <button className={`border p-2 ${isActive ? 'bg-slate-500' : ''}`} onClick={handleClick}>
            <item.icon />
        </button>
    );
};

export default RTE;

