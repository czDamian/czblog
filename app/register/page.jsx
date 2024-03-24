import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import RegisterForm from "@/components/RegisterForm";

async function Register() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return <RegisterForm />;
}

export default Register;
