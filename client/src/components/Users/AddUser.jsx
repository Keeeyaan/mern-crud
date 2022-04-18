import React, { useRef } from "react";
import Modal from "../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { addUserToggleAction } from "../../store/addUserToggle";
import useUsers from "../../hooks/useUsers";

const AddUser = () => {
  const addUserToggle = useSelector((state) => state.addUserToggle.toggle);
  const dispatch = useDispatch();

  const { toggle } = addUserToggleAction;

  const { submitUser } = useUsers();

  const nameRef = useRef("");
  const ageRef = useRef("");
  const emailRef = useRef("");

  const addUserHandler = () => {
    dispatch(toggle());
  };

  const addUserSubmitHandler = (event) => {
    event.preventDefault();
    submitUser({
      name: nameRef.current.value,
      age: +ageRef.current.value,
      email: emailRef.current.value,
    });
    dispatch(toggle());
  };

  return (
    <React.Fragment>
      {addUserToggle && (
        <Modal
          onClick={addUserHandler}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-white font-bold text-[2rem] mb-[1.5rem]">
            Register User
          </h1>
          <form onSubmit={addUserSubmitHandler}>
            <div className="mb-[1rem]">
              <label
                htmlFor="name"
                className="text-white font-semibold text-[1.15rem]"
              >
                Name
              </label>
              <input
                ref={nameRef}
                id="name"
                type="text"
                className="block h-[2.5rem] mt-[0.5rem] w-[20rem] outline-none p-[1rem] rounded"
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-[1rem]">
              <label
                htmlFor="age"
                className="text-white font-semibold text-[1.15rem]"
              >
                Age
              </label>
              <input
                ref={ageRef}
                id="age"
                type="text"
                className="block h-[2.5rem] mt-[0.5rem] w-[20rem] outline-none p-[1rem] rounded"
                required
                placeholder="Enter your age"
              />
            </div>
            <div className="block">
              <label
                htmlFor="email"
                className="text-white font-semibold text-[1.15rem]"
              >
                Email
              </label>
              <input
                ref={emailRef}
                id="email"
                type="email"
                className="block mt-[0.5rem] h-[2.5rem] w-[20rem] outline-none p-[1rem] rounded"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="flex text-center justify-center">
              <button className="bg-white mt-[1.5rem] text-[rgba(119,0,255,0.85)] h-[2.5rem] rounded w-[10rem] font-semibold transition-all duration-[0.3s] ease-in-out  hover:text-[rgb(255,255,255)] hover:bg-[rgb(214,164,255)]">
                Login
              </button>
            </div>
          </form>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default AddUser;
