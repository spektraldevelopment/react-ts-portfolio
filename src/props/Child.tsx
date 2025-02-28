import React from "react";
// * For child components we want to add an interface to ensure that the parent component is passing the correct props.
// * This is a good practice to ensure that the child component is used correctly.
interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me</button>
    </div>;
};

// * ex. export const Child = ({ color }: ChildProps) => { - in this example TS doesn't know we are defining a React component.
// * All React Components has default props of propTypes, displayName, defaultProps, contextTypes, etc.
// * To fix this we can add a type annotation to the function to tell TS that this is a React component.
// * Below is the same component as above but with a type annotation to tell TS that this is a React component.
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}>Click Me</button>
    </div>;
};