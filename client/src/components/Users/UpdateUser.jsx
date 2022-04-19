import React, { useRef } from "react";
import Modal from "../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { updateUserToggleAction } from "../../store/updateUserToggle";
import useUsers from "../../hooks/useUsers";

const UpdateUser = ({ id, user }) => {
  const updateUserToggle = useSelector(
    (state) => state.updateUserToggle.toggle
  );

  const dispatch = useDispatch();

  const { toggle } = updateUserToggleAction;

  const { updateUser } = useUsers();

  const nameRef = useRef("");
  const ageRef = useRef("");
  const emailRef = useRef("");

  const updateUserHandlerToggle = () => {
    dispatch(toggle());
  };

  const updateUserSubmitHandler = (event) => {
    event.preventDefault();
    updateUser(id, {
      name: nameRef.current.value,
      age: +ageRef.current.value,
      email: emailRef.current.value,
    });
    dispatch(toggle());
  };

  return (
    <React.Fragment>
      {updateUserToggle && (
        <Modal
          onClick={updateUserHandlerToggle}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-white font-bold text-[2rem] mb-[1.5rem]">
            Update User
          </h1>
          <form onSubmit={updateUserSubmitHandler}>
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
                defaultValue={user.name}
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
                defaultValue={user.age}
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
                defaultValue={user.email}
              />
            </div>
            <div className="flex text-center justify-center">
              <button className="bg-white mt-[1.5rem] text-[rgba(119,0,255,0.85)] h-[2.5rem] rounded w-[10rem] font-semibold transition-all duration-[0.3s] ease-in-out  hover:text-[rgb(255,255,255)] hover:bg-[rgb(214,164,255)]">
                Update
              </button>
            </div>
          </form>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default UpdateUser;
