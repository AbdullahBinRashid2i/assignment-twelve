import { SessionWrapper } from "@/components/SessionWrapper";
import SignInComponent from "@/components/login/SignInComponent";
import SignOutComponent from "@/components/login/SignOutComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const isAuthenticated = !!session?.user;

  return (
    <SessionWrapper>
      <div className="flex justify-center items-center h-screen">
        {isAuthenticated ? <SignOutComponent /> : <SignInComponent />}
      </div>
    </SessionWrapper>
  );
}
