import styles from "./Hello.module.scss";
// import "./Hello.module.scss";
import logo from "../logo.svg";

type AppProps = { num: number };

const Hello = ({ num }: AppProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.greeting}>Hello</h1>
        <h2 className={styles.secondLine}>
          Hello world React! <strong>Num: {num}</strong>
        </h2>

        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </div>
  );
};

// const Hello = () => {
//   return (
//     <div className={styles.App}>
//       <header className={styles.AppHeader}>
//         <img src={logo} className={styles.AppLogo} alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className={styles.AppLink}
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Hello;
