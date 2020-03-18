import React from "react";
import TextField from "./TextField";
import Counter from "./Counter";

const App: React.FC = () => {
    return (
        <div>
            <TextField
                text="Hello"
                person={{ firstName: "John", lastName: "Doe" }}
                handleChange={evt => console.log(evt)}
            />
            <Counter>
                {({ count, setCount }) => (
                    <div>
                        {count}
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                )}
            </Counter>
        </div>
    );
};

export default App;
