import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi';
import MenuCard from './MenuCard';

const Restaurant = () => {
  const [menuData, setmenuData] = useState(Menu);

  //filtering items

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
           return curElem .category=== category;
        }
    );
    setmenuData(updatedList);
  };


  //
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast  </button>
          <button className='btn-group__item' onClick={() =>filterItem("lunch")}>Lunch  </button>
          <button className='btn-group__item' onClick={() =>filterItem("evening")}>Evening</button>
          <button className='btn-group__item' onClick={() =>filterItem("dinner")}>Dinner</button>
          <button className='btn-group__item' onClick={() =>setmenuData(Menu)} >All</button>
        </div>
      </nav>


      {/* <MenuCard  menu_data={Menu}/> // can be simply done without Hooks*/}
      <MenuCard menu_data={menuData} />
    </>
  )
}
export default Restaurant
