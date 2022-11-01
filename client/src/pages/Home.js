import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Memo</h1>
      <p>Please feel free to use this app as your memo</p>
      {JSON.stringify(auth)}
    </div>
  )
}

export default Home;