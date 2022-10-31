import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import {
  TbBrandFacebook,
  TbBrandGoogle,
  TbBrandInstagram,
  TbBrandTiktok,
} from "react-icons/tb";
import "./auth.scss";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="login auth">
      <div className="wrapper pt-5">
        <div className="btn-swticher d-flex justify-content-center gap-5 mb-3">
          <button className="btn-switch-right">SignUp</button>
          <button className="btn-switch-left">Login</button>
        </div>
        <h1 className="text-center ">Login</h1>
        <div className="text-center login-methods d-flex gap-4 justify-content-center mb-3">
          <a className="text-decoration-none fs-1 font-c-sec" href="#">
            <TbBrandFacebook className=" " />
          </a>{" "}
          <a className="text-decoration-none fs-1 font-c-sec" href="#">
            <TbBrandGoogle className=" " />
          </a>
          <a className="text-decoration-none fs-1 font-c-sec" href="#">
            <TbBrandTiktok className=" " />
          </a>{" "}
          <a className="text-decoration-none fs-1 font-c-sec" href="#">
            <TbBrandInstagram className=" " />
          </a>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <h3 className=" text-secondary side-lines">or</h3>
        </div>
        <div className="login-form text-secondary mb-4 px-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-label">Email address</label>
            <input
              className="form-control text-secondary mb-1"
              type="text"
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
            />
            {errors.email && (
              <p className="text-danger">Please enter a valied email</p>
            )}

            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control mb-2"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}

            <input
              className="btn-sec text-white w-100 rounded-1 py-1 mt-3"
              type="submit"
            />
          </form>
        </div>
        <div className="options ">
          <a
            className=" text-decoration-none font-c-sec text-center d-block mb-1"
            href="#"
          >
            Forgat Password?
          </a>
          <div className="d-flex gap-5 justify-content-center">
            <p className="d-d-inline">Don't have an account?</p>
            <a className=" text-decoration-none font-c-sec" href="#">
              SignUp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
