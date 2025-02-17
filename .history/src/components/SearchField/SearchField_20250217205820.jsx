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
        onChange={(event)=> setSearchText(event.target.value)}     
      />
    </div>
  );
  console.log({searchText});
};

export default SearchField;
