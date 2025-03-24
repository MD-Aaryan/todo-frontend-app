import axios from "axios";
import CustomInput from "../components/custominput";
import { NavLink } from "react-router";
import { useActionState, useEffect } from "react";
import Button from "../components/Button";

const RegisterAction = async (_previousData: unknown, formData: FormData) => {
  try {
    const fde = formData.entries();
    const payload = Object.fromEntries(fde);
    const response = await axios("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export default function Register() {
  const [data, submitAction, isLoading] = useActionState(RegisterAction, {});
  console.log(data);

  useEffect(() => {
    if (data && data?.token) {
      localStorage.setItem("token", data.token);
    }
  }, [data]);
  return (
    <div className=" register ">
      <div className="flex flex-col    w-90 bg-white p-4 rounded shadow-md">
        <h1 className="text-lg font-bold text-center ">Register</h1>
        <form action={submitAction} className="flex flex-col p-4 w-full gap-2">
          <CustomInput name="name" label="Name" type="text" />
          <CustomInput name="email" label="Email" type="email" />
          <CustomInput name="mobile" label="Phone" type="tel" />
          <CustomInput name="password" label="Password" type="password" />
          <p className="text-red-400"></p>
          <Button
            type="submit"
            className="bg-black text-white mt-4 rounded py-1"
            label={isLoading ? "Registering..." : "Register"}
          />
          <p className="w-full mt-4 text-center">
            Already have an account?
            <span className="ml-2 text-blue-500 hover:underline">
              <NavLink to="/login">Login</NavLink>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
