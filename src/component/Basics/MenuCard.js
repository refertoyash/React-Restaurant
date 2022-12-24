import React from 'react'

const MenuCard = ({ menu_data }) => {

  return (
    <>
      <section className="main-card--cointainer">
        {menu_data.map((curElem) => {
          return (
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{curElem.id}</span>
                  <span className="card-author subtle" style={{ color: "blue" }}>{curElem.category}</span>
                  {/* <span className="card-author subtle" style={myStyle}> Breakfast</span> */}
                  <h2 className="card-title">{curElem.name}</h2>
                  <span className="card-description subtle">
                    {curElem.description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={curElem.image} alt="" className='card-media' />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );

};

export default MenuCard
