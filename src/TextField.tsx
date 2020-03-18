import React, { useState, useRef } from "react";

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    // Use ? for optional
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => void;
    obj?: {};
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

// React.FC = react functional component type
const TextField: React.FC<Props> = ({ person, text, handleChange }) => {
    // state can be number OR null OR undefined -> or is just one |
    // const [count, setCount] = useState<number | null | undefined>(5)
    // setCount(null)

    // you can also pass an interface of objects as the state type
    const [string, setString] = useState<TextNode>({ text: "hello" });
    setString({ text });

    //creating refs, you need to pass null by default
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    );
};

export default TextField;
