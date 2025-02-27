import { useState } from "react";
//import Button from "../Button/Button";
import styles from "./SearchField.module.css";

const SearchField = () => {
  //save search text
  const [searchText, setSearchText] = useState("");

  const menuItems = [
    { name: "Sushi" },
    { name: "Mikan" },
    { name: "Ramen" },
    { name: "Onigiri" },
    { name: "Matcha" },
  ];

   //find filter
   const FilterdMenu = menuItems.filter(item =>
     item.name.toLowerCase().includes (searchText.toLowerCase())
   );
   
   console.log({searchText});

  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"
        value={searchText}
        onChange={(event)=> setSearchText(event.target.value)}     
      />
      <ul>
        {FilterdMenu.map((item, index)=>(
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchField;
