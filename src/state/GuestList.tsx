// * A controlled input is an input that is controlled by the state of the component.
import { useState } from "react";
const GuestList: React.FC = () => {

    const [name, setName] = useState("");
    // * Passing <string[]> tells useState that the state will be an array of strings.
    // * If TypeScript is not able to infer the type of the state, it returns a type of 'never[]'.
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName("");
        setGuests([...guests, name]);
    };

    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map(guest => <li key={guest}>{guest}</li>)}
        </ul>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Add Guest</button>
    </div>;
};

export default GuestList;