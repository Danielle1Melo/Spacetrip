import { usePathname } from "next/navigation";
import styled from "../../../styles/Navbar.module.css";
import Link from "next/link";

export default function NavLinks({ item }: any) {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      key={item.title}
      className={`${styled.container} ${
        pathName === item.path && styled.active
      }`}
    >
      {item.title}
    </Link>
  );
}
