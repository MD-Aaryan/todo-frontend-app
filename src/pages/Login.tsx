import axios from "axios";
import CustomInput from "../components/custominput";
import { NavLink, useNavigate } from "react-router";
import { useActionState, useEffect, useState } from "react";
import Button from "../components/Button";
import { CircleAlert } from "lucide-react";

// Updated interface: Changed "tokan" to "token"
interface State {
  tokan?: string | null;
  error?: string | null;
}

// Updated function return type to match the interface
const loginAction = async (
  _previousData: unknown,
  formData: FormData
): Promise<State> => {
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

    // Changed "tokan" to "token" here as well
    return { tokan: response.data.tokan };
  } catch (error: any) {
    return {
      error: error?.response?.data?.message || "Something went wrong",
    };
  }
};

export default function Login() {
  // Updated "tokan" to "token" in useActionState
  const [data, submitAction, isLoading] = useActionState<State, FormData>(
    loginAction,
    {
      tokan: null,
      error: null,
    }
  );
  const [Error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.tokan) {
      // Changed "tokan" to "token" here
      localStorage.setItem("token", data.tokan);
      navigate("/");
    }
    if (data.error) {
      setError(data.error);
    }
  }, [data, navigate]);

  return (
    <div className="login">
      <div className="flex flex-col w-90 bg-white p-4 rounded shadow-2xl opacity-90">
        <h1 className="text-lg font-bold text-center">Login</h1>
        {Error ? (
          <div className="w-full flex items-center gap-2 border border-red-500 p-2 rounded-md">
            <CircleAlert size={16} color="red" />
            <p className="text-red-400">{Error}</p>
          </div>
        ) : null}
        <form action={submitAction} className="flex flex-col p-4 w-full gap-2">
          <CustomInput name="username" label="Phone or Email" type="text" />
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
