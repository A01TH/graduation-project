import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./Post.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const animatedComponents = makeAnimated();

const Post = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Your Post Is Live Now! Hurry To Finish It", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const options = [
    { value: "frontend", label: "Frontend Development" },
    { value: "backend", label: "Backend Developemnt" },
    { value: "ui/ux", label: "UI/UX" },
  ];
  return (
    <>
      <div>
        <div className="row post">
          <div className=" py-3  rounded-5 py-4 px-4 post-form">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center w-100 text-light">
                  Add title
                </Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Add your breif here ..."
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    {...register("post", { required: true })}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={options}
                      placeholder="Select your challenge category"
                    />
                  )}
                />
              </Form.Group>
              <Form.Group>
                <Form.Check
                  className="text-light"
                  type="switch"
                  id="custom-switch"
                  label="Want People Join with you?"
                  {...register("postStatus")}
                />
              </Form.Group>
              <Form.Group>
                <p className="text-center text-light">
                  Complete your challenge to earn points 👌🥳
                </p>
              </Form.Group>
              <Form.Group className="text-end">
                <button className="btn btn-primary ">
                  Post Your Challenge!
                </button>
              </Form.Group>
            </Form>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
        />
      </div>
    </>
  );
};

export default Post;