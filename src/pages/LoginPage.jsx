import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";

const LoginPage = () => {
  const { handleSubmit, reset, register } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const submit = (data) => {
    loginUser(data, navigate);
  };
  return (
    <section className="login__container">
      <form onSubmit={handleSubmit(submit)} className="form__login">
        <h2 className="title__login">
          Welcome! Enter your email and password to continue
        </h2>
        <p className="paragraph__login">
          You have to log in to access your cart
        </p>

        <div className="form__email">
          <label htmlFor="email" className="form__email-password">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="form__input"
          />
        </div>
        <div className="form__email">
          <label htmlFor="password" className="form__email-password">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="form__input"
          />
        </div>
        <button className="btn__login">Login</button>
      </form>
    </section>
  );
};

export default LoginPage;
