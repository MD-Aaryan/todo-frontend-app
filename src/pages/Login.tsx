import axios from "axios";
import CustomInput from "../components/custominput";
import { NavLink } from "react-router";
import { useActionState, useEffect } from "react";
import Button from "../components/Button";

const loginAction = async (_previousData: unknown, formData: FormData) => {
  try {
    const fde = formData.entries();
    const payload = Object.fromEntries(fde);
    const response = await axios("http://localhost:3000/auth/login", {
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
export default function Login() {
  const [data, submitAction, isLoading] = useActionState(loginAction, null);
  console.log(data);

  useEffect(() => {
    if (data && data?.tokan) {
      localStorage.setItem("token", data.tokan);
    }
  }, [data]);
  return (
    <div className=" login ">
      <div className="flex flex-col w-90 bg-white p-4 rounded shadow-2xl opacity-90 ">
        <h1 className="text-lg font-bold text-center">Login</h1>
        <form action={submitAction} className="flex flex-col p-4 w-full gap-2">
          {/* <CustomInput label="Mobilenumber" type="tel" /> */}
          <CustomInput name="username" label="phone or email" type="text" />
          <CustomInput name="password" label="Password" type="password" />
          <Button
            label={isLoading ? "Logging in..." : "Login"}
            type="submit"
            className="bg-black text-white mt-4 rounded py-1"
          />
        </form>
        <p className="w-full mt-4 text-center">
          Don't have an account?
          <span className="ml-2 text-blue-500 hover:underline">
            <NavLink to="/register">Register</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
}
// if we need to go one page to another page we need to use react router
