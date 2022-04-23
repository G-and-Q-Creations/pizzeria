import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">pizza!</Link>
      <Link href="/about">about</Link>
    </header>
  );
}
