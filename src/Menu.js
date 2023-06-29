import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, ingredients, price } = item;
        return (
          <article key={id} className="menu-item">
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price} ,-</h4>
              </header>
              <p className="item-text">{ingredients}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
