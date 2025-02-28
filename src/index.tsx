import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UserSearch";

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 24 },
  { name: 'Michael', age: 23 }
];

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      {/* <EventComponent></EventComponent> */}
      <UserSearch />
    </div>
  );
};

root.render(<App />);
