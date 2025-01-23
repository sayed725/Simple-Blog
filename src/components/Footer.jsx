import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-6 border-t-2 flex flex-col justify-center items-center gap-4">
      <Image src="/next.svg" alt="image" width={100} height={150} />
      <h1 className="text-gray-900">
        ©2025 Next.js-Blog-Project. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;