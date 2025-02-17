import { useState } from "react";
import styles from "./SearchField.module.css";

const SearchField = () => {
  const [searchText, setSearchText] = useState("");
  
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"
        value={searchText}
        onChange={setSearchText}     
      />
    </div>
  );
  console.log({searchText});
};

export default SearchField;
