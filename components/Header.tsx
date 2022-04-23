import { useRouter } from "next/router";
import Link from "next/link";
// import bio from "../pages/bio";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header>
      <Link href="/">pizza!</Link>
      <Link href="/about">about</Link>
    </header>
  );
}
