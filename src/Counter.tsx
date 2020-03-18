//use snippet created: tsxf

import React, { useState } from "react";

interface Props {
    //children type if a function that takes data and returns jsx
    children: (
        //data is the parameter with type object that receives count and has a dispatch function setCount
        data: {
            count: number;
            setCount: React.Dispatch<React.SetStateAction<number>>;
        }
    ) => JSX.Element | null;
}

const Counter: React.FC<Props> = ({ children }) => {
    // state is set to number type
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            {children({
                count,
                setCount
            })}
        </div>
    );
};

export default Counter;
