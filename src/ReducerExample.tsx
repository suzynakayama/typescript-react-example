import React, { useReducer } from "react";

type Actions =
    //this object of this other object
    | { type: "add"; text: string }
    | {
          type: "remove";
          idx: number;
      };

interface Todo {
    text: string;
    complete: boolean;
}

//array. You can also create like this: Array<Todo>
type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case "add":
            return [...state, { text: action.text, complete: false }];
        case "remove":
            return state.filter((_, i) => action.idx !== i);
        default:
            return state;
    }
};

export const ReducerExample: React.FC = () => {
    const [todos, dispatch] = useReducer(TodoReducer, []);

    return (
        <div>
            {JSON.stringify(todos)}
            <button
                onClick={() => {
                    dispatch({ type: "add", text: "..." });
                    dispatch({ type: "remove", idx: 5 });
                }}
            >
                +
            </button>
        </div>
    );
};
