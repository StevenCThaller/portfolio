import _axios from "../utils/axios.utils";
import { toast } from "react-toastify";

export const handleSignin: (
  email: string,
  password: string
) => Promise<AuthLoginResponse | void> = async (
  email: string,
  password: string
) => {
  try {
    const response: AuthLoginResponse = await _axios.post("/auth/signin", {
      email,
      password,
    });
    toast.success("Welcome, Cody!");
    return response;
  } catch (error) {
    console.log("like, idk", error);
  }
};

export const handleSubmitContactMessage: (
  name: string,
  email: string,
  message: string
) => Promise<void> = async (name: string, email: string, message: string) => {
  try {
    await _axios.post("/contact", { name, email, message });

    toast.success(`Thanks, ${name}! Cody will email you back ASAP.`);
  } catch (error) {
    toast.error("Invalid submission, check the error messages!");

    throw error;
  }
};
