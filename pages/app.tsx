import { useContext } from "react";
import { UserContext } from "../helpers/usercontext";

export default function App() {
  const user = useContext(UserContext);
  return (
    <div>
      app stuff
      {JSON.stringify(user)}
    </div>
  );
}
