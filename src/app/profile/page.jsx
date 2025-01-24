


import useAuth from "@/hooks/useAuth";

import { redirect } from "next/navigation";

const Profile = async () => {
  const { isAuthenticated, getUser } = useAuth();
  const user = await getUser();
  const { email, family_name, given_name, picture } = user || {};

  return (await isAuthenticated()) ? (
    <div className="py-12 min-h-screen container mx-auto">
      <div className="pb-10">
        <h1 className="text-3xl md:text-4xl text-blue-400 text-center lg:text-5xl mt-3 tracking-widest font-semibold">
          Welcome{" "}
          <span className="my-0 py-0">To Your</span>{" "}
          Profile
        </h1>
      </div>
      {/* profile container */}
      <div className="px-6 py-10 shadow rounded border mx-auto lg:w-2/3 justify-center flex flex-wrap gap-6">
       
        <div className="space-y-1">
          <h1 className="text-xl text-center font-semibold tracking-wider">
            Username:{given_name + " " + family_name}
          </h1>
          <h1 className="text-xl font-semibold tracking-wider pb-1">
            Email:<span className="text-sm sm:text-xl">{email}</span>
          </h1>
          {/* <Button>Edit Profile</Button> */}
        </div>
      </div>
    </div>
  ) : (
    redirect("/api/auth/login")
  );
};

export default Profile;