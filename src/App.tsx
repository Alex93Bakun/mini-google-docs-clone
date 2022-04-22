import './App.css';

import React, { useMemo } from 'react';
import { BaseEditor, createEditor } from 'slate';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';

type CustomElement = { type: 'paragraph'; children: CustomText[] };
type CustomText = { text: string };

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}

const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    } as any,
];

const App = () => {
    const editor = useMemo(() => withReact(createEditor()), []);

    return (
        <Slate editor={editor} value={initialValue}>
            <Editable
                onKeyDown={(event) => {
                    console.log(event.key);
                }}
            />
        </Slate>
    );
};

export default App;
