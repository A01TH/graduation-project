import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { FaGoogle } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import "./auth.scss";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [value, setValue] = useState();

  const [date, setDate] = useState();

  const style = {
    control: (base, state) => ({
      ...base,
      // This line disable the blue border
      border: state.isFocused
        ? "1px solid rgba(54,23,94, 0.5)"
        : "1px solid #cccccc",
      boxShadow: state.isFocused
        ? "0px 0px 0px 4px rgba(54,23,94, 0.2)"
        : "none",
      "&:hover": {
        border: state.isFocused
          ? "1px solid rgba(54,23,94, 0.5)"
          : "1px solid #cccccc",
        boxShadow: state.isFocused
          ? "0px 0px 0px 4px rgba(54,23,94, 0.2)"
          : "none",
      },
    }),
  };

  const options = [
    {
      value: 1,
      label: "Male",
    },
    {
      value: 2,
      label: "Female",
    },
  ];

  const multiOptions = [
    {
      value: 1,
      label: "Reading",
    },
    {
      value: 2,
      label: "Training",
    },
    {
      value: 3,
      label: "Studying",
    },
    {
      value: 4,
      label: "Cooking",
    },
  ];

  return (
    <div className="px-3">
      <Button variant="warning" type="submit" className="d-block mx-auto w-50 ">
        <FaGoogle className="me-3" /> Signup with Google
      </Button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Your Name"
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 20,
            })}
          />
          {errors?.name?.type === "required" && (
            <Form.Text className="text-danger">Name is required</Form.Text>
          )}
          {errors?.name?.type === "minLength" && (
            <Form.Text className="text-danger">
              Minimum length is 2 charachters
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {errors?.email?.type === "required" && (
            <Form.Text className="text-danger">Email is required</Form.Text>
          )}
          {errors?.email?.type === "pattern" && (
            <Form.Text className="text-danger">Wrong Mail Format</Form.Text>
          )}
        </Form.Group>

        {/* <Form.Group className="mb-3 " controlId="formBasicNumber">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="phoneNumber"
            placeholder="Enter your number"
            {...register("phoneNumber", {
              required: true,
              pattern: /^01[0-2]\d{1,8}$/,
            })}
          />
          {errors?.number?.type === "required" && (
            <Form.Text className="text-danger">
              Phone number is required
            </Form.Text>
          )}
          {errors?.number?.type === "pattern" && (
            <Form.Text className="text-danger">Wrong Number</Form.Text>
          )}


        </Form.Group> */}
        <Form.Group className="mb-3 " controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            className="mb-3 phone-input form-control d-flex"
          />
        </Form.Group>

        <div className="d-flex align-items-stretch">
          <Form.Group className="mb-3  me-2 w-50" controlId="formBasicPassword">
            <Form.Label>Gender </Form.Label>

            <Select options={options} styles={style} className="mb-3 w-100" />
          </Form.Group>

          <Form.Group className="mb-3 w-50" controlId="formBasicNumber">
            <Form.Label>Birthdate</Form.Label>
            <div>
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                className="form-control "
              ></input>
            </div>
          </Form.Group>
        </div>

        <div className="d-flex">
          <Form.Group className="mb-3 w-50 me-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
              })}
            />
            {errors?.password?.type === "required" && (
              <Form.Text className="text-danger">
                Password is required
              </Form.Text>
            )}
            {errors?.password?.type === "pattern" && (
              <Form.Text className="text-danger">
                password should be formatted like: At least 1 Uppercase /1
                Lowercase / 1 Number / 1 Symbol, symbol allowed -- !@#$%^&*_=+-
                / Min 8 chars and Max 12 chars
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group
            className="mb-3 w-50"
            controlId="formBasicConfirmPassword"
          >
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              name="confirmPass"
              placeholder="Confirm Password"
              {...register("confirmPass", {
                required: true,

                validate: (val) => val === watch("password"),
              })}
            />
            {errors?.confirmPass?.type === "required" && (
              <Form.Text className="text-danger">
                Confirming password is required
              </Form.Text>
            )}
            {errors?.confirmPass?.type === "validate" && (
              <Form.Text className="text-danger">
                {" "}
                Passwords don't match
              </Form.Text>
            )}
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Interests </Form.Label>

          <Select
            options={multiOptions}
            className="mb-3 select-custom"
            styles={style}
            isMulti
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Register;
