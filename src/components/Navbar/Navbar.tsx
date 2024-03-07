import Link from "next/link";
import styled from "../../styles/Navbar.module.css";
import Links from "./links/Links";
import Image from "next/image";
import planet from "@/assets/planeta.png"

export default function Navbar() {
  return (
    <div className={styled.container}>
      <div className={styled.logosImg}>
        <Link href="/" className={styled.logo}>
          SPACETRIP
        </Link>
        <Image src={planet} width={35} height={35} alt=""/>
      </div>

      <div>
        <Links />
      </div>
    </div>
  );
}
