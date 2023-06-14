import UserCard from "./components/shared/userCard";
import { users } from "../src/utils/index";

function App() {
  return (
    <div className="user">
      <div className="userHeader">
        <div>
          <h1 className="text-3xl font-bold mb-10">Users</h1>
        </div>
        <nav>
          <ul>
            <li>Repulation</li>
            <li>New users</li>
            <li>Voters</li>
            <li>Editors</li>
          </ul>
        </nav>
      </div>

      <div className="flex gap-2 flex-wrap    ">
        {users.map((item, key) => (
          <UserCard
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
