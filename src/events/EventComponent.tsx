import { ChangeEvent, DragEvent } from "react";

const EventComponent: React.FC = () => {

    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        console.log(evt);
    };

    const onDragStart = (evt: DragEvent<HTMLDivElement>) => {
        console.log("I am being dragged: evt: ", evt);
    };

    // * Inline functions are inferred by TypeScript, so we don't need to specify the type of the event
    // * External functions need to specify the type of the event, they can't be inferred by TypeScript
    return (
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>Drag Me</div>
        </div>
    );
};

export default EventComponent;