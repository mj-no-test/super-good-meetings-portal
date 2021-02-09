import Link from "next/link";
import styles from "./styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <h1>
          <img src="/images/sgm_logo.png" alt="SuperGoodMeetings" />
          <span>β版</span>
        </h1>
      </Link>
      <ul className={styles.sessions}>
        <li class={styles.contact_button}>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc2sXdcxDEz5Boi08Vymj7EtGeZAsCSljg6bBB0g1d9Aea0g/viewform">
            <a target="_blank">お問い合わせ</a>
          </Link>
        </li>
        <li>
          <Link href="https://sgms.app/login">ログイン</Link>
        </li>
        <li className={styles.signup_button}>
          <Link href="https://sgms.app/login">新規登録</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
