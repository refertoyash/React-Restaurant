import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi';
import MenuCard from './MenuCard';

const Restaurant = () => {
  const [menuData, setmenuData] = useState(Menu);
  return (
    <>
      <MenuCard  menuData={menuData}/>
    </>
  )
}
export default Restaurant
 