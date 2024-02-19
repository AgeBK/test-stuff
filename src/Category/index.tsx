import Image from "../Image";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <section className={styles.container}>
      <h1>Category Component</h1>
      <div>
        <Image image="barrel.png" imageAlt="alt" imageStyle="logo" />
        <Image image="sad.jpg" imageAlt="sad" imageStyle="logo" />
      </div>
    </section>
  );
};

export default Category;
