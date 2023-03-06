import { useState } from "react";
import { createBrowserHistory } from "history";
import styles from "./Buscar.module.css";
import { FaSearch } from "react-icons/fa";

export function Buscar() {
  const [searchText, setSearchText] = useState("");
  const history = createBrowserHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}

export default Buscar;
