import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={"/icon.svg"} alt="logo" height={150} width={150} />
    </Link>
  );
}
