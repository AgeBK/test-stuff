import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Image from "./Image";
import styles from "./App.module.css";

function App() {
  return (
    <section className={styles.app}>
      <Router>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/category">Category</Link>
        </nav>
        <div>
          <Image image="barrel.png" imageAlt="alt" imageStyle="logo" />
          <Image image="sad.jpg" imageAlt="sad" imageStyle="logo" />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
