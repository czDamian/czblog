import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "Register",
};
async function Register() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return <RegisterForm />;
}

export default Register;
