import Image from "../Image";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <h1>Home Component</h1>
      <div>
        <Image image="barrel.png" imageAlt="alt" imageStyle="logo" />
        <Image image="sad.jpg" imageAlt="sad" imageStyle="logo" />
      </div>
    </section>
  );
};

export default Home;
