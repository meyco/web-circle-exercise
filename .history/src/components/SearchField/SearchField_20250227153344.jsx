import { useState } from "react";
import Button from "../Button/Button";
import styles from "./SearchField.module.css";

const SearchField = () => {
  //save search text
  const [searchText, setSearchText] = useState("");

   //find filter
   const FilterdMenu = menuitems.filter(item =>
     item.name.toLowerCase().includes (searchText.toLowerCase())
   );

  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"
        value={searchText}
        onChange={(event)=> setSearchText(event.target.value)}     
      />
      <Button>find</Button>
    </div>
  );
  console.log({searchText});
};

export default SearchField;
