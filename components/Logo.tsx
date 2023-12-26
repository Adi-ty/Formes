import Link from "next/link";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-rose-400 to-teal-400 text-transparent bg-clip-text hover:cursor-pointer"
    >
      Former
    </Link>
  );
}

export default Logo;
