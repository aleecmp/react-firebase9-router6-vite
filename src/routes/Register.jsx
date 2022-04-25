import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navegate = useNavigate();

  const { registerUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("process form:", email, password);

    try {
      await registerUser(email, password);
      console.log("user created");
      navegate("/");
    } catch (error) {
      console.log(error);
      // console.log(error.code)
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter your password"
          value={email}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </>
  );
};

export default Register;
