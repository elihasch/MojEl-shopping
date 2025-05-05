import React from "react";

function Category({ setCategorySelected, categories }) {
  const changeHandler = (e) => {
    setCategorySelected(e.target.value);
  };

  return (
    <form className="flex gap-5 border px-3 py-2 rounded-lg border-gray-300 ">
      <label htmlFor="category">Choose a category :</label>
      <select name="category" id="category" onChange={changeHandler}>
        <option value="">All</option>
        {categories.map((i) => (
          <option className="capitalize" key={i} value={i.toLowerCase()}>
            {i}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Category;
