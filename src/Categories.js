import React from "react";

const Categories = ({ categories, filterItems, activeCategory }) => {
  // Exclude the "all" category from the categories array
  const filteredCategories = categories.filter(
    (category) => category !== "all"
  );

  return (
    <div className="btn-container">
      {filteredCategories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
