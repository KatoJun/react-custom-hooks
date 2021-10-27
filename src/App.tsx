import "./styles.css";
import { UserCard } from "./components/UserCard";
import { UserProfile } from "./types/userProfile";

const user = {
  id: 1,
  name: "yamada",
  email: "1111@example.xom",
  address: "ADDRESS"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
