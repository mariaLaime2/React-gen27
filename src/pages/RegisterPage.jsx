import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./styles/RegisterPage.css";

const RegisterPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const submit = (data) => {
    createUser(data, navigate);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
  };
  return (
    <section className="register__container">
      <form className="register__form" onSubmit={handleSubmit(submit)}>
        <h2 className="register__title">Register</h2>
        <div className="register__form-div">
          <label htmlFor="firstname" className="register__label">
            First Name
          </label>
          <input
            {...register("firstName")}
            type="text"
            className="input__register"
          />
        </div>
        <div className="register__form-div">
          <label htmlFor="lastName" className="register__label">
            Last Name
          </label>
          <input
            {...register("lastName")}
            type="text"
            className="input__register"
          />
        </div>
        <div className="register__form-div">
          <label htmlFor="email" className="register__label">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="input__register"
          />
        </div>
        <div className="register__form-div">
          <label htmlFor="password" className="register__label">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="input__register"
          />
        </div>
        <div className="register__form-div">
          <label htmlFor="phone" className="register__label">
            Phone
          </label>
          <input
            {...register("phone")}
            type="phone"
            className="input__register"
          />
        </div>
        <button className="btn__register">Create User</button>
      </form>
    </section>
  );
};

export default RegisterPage;
