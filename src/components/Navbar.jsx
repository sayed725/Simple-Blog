import Image from "next/image";
import Link from "next/link";


import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "./ui/button";



const Navbar = async() => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
   <div className="bg-blue-400">
     <nav className="py-4 container mx-auto border-b-2">
      <div className="navbar bg-base-100 flex items-center px-2">
        <div className="flex-1">
          <Link href="/" prefetch={true}>
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={150}
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="flex gap-3 sm:gap-6 items-center">
            <Link
              href={"/"}
              prefetch={true}
              className={"font-semibold hover:underline"}
            >
              Home
            </Link>
            <Link
              href={"/blogs"}
              prefetch={true}
              className={"font-semibold hover:underline"}
            >
              Blogs
            </Link>
            <Link
              href={user ? "/profile" : "/api/auth/login"}
              className={"font-semibold hover:underline "}
            >
              Profile
            </Link>
           
            {user ? (
              <>
                <LogoutLink postLogoutRedirectURL="/">
                  <Button>Logout</Button>
                </LogoutLink>
              </>
            ) : (
              <LoginLink>
                <Button>Login</Button>
              </LoginLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;