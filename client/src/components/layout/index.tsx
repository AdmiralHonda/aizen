import classNames from "classnames";
import logo from "../../assets/logo.svg";
import styles from "./layout.module.scss";

type Props = React.PropsWithChildren<Record<string, unknown>>;

export const layoutId = "layout-root";

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div
      id={layoutId}
      className={classNames(styles.pageContainer, "m-context")}
    >
      {/* そんな複雑じゃないしとりあえず直接で良いっしょ */}
      <header className={classNames(styles.header, "m-z1")}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className={styles.main}>
        <div>{children}</div>
      </main>
      <footer className={styles.footer}>フッターだよ</footer>
      <div className="m-z2">{/* Portal 経由でモーダルを置く */}</div>
    </div>
  );
};
