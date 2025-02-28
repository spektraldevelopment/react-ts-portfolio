import { useState, useRef, useEffect } from 'react';

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 24 },
    { name: 'Michael', age: 23 }
];

const UserSearch: React.FC = () => {

    // * Create new ref to reference the input element
    const inputRef = useRef<HTMLInputElement | null>(null);

    // * Set state for name and user
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    // * useEffect to focus on the input element
    useEffect(() => {
        // * Add type guard to check if inputRef.current is null
        // * inputRef.current is null when the component is first rendered
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    }, []);

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser);
    };

    return (<div>
        <h3>User Search</h3>
        <label>Enter Name: </label>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            Name: {user?.name}
            <br />
            Age: {user?.age}
        </div>
    </div>);
};

export default UserSearch;