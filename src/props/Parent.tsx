import { ChildAsFC } from "./Child";

const Parent  = () => {
    return <ChildAsFC color="red" onClick={() => console.log("clicked")}>
        <h1>Children</h1>
    </ChildAsFC>;
};

export default Parent;