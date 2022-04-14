import { Container } from "./style";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const Login = () => {
  return (
    <Container className="main">
      <div className="container__header">
        <h1>Login</h1>
      </div>
      <div className="container__input">
        <div className="input input__email">
          <AiOutlineMail />
          <input type="text" />
        </div>
        <div className="input input__password">
          <AiOutlineLock />
          <input type="text" />
        </div>
      </div>
      <div className="container__button">
        <button>Login</button>
      </div>
    </Container>
  );
};

export default Login;
