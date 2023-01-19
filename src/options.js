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

export default OPTIONS;