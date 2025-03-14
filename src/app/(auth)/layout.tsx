import Image from "next/image";
import Link from "next/link";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Link href="/home" className="flex items-center p-2">
        <Image
          src="/Logo.svg"
          alt="People sharing iftar meal"
          width={60}
          height={40}
          className="fixed top-8 left-8 object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>
      <div className="max-w-80 py-10">{children}</div>
    </div>
  );
}

export default AuthLayout;
