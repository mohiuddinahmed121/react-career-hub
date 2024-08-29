import { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-5xl text-center">Job Category List</h2>
      <p className="text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex justify-between  gap-4 mt-7 mb-20">
        {categories.map((category) => (
          <>
            <div className="border-2 border-sky-500 p-5 gap-2">
              <img src={category.logo} alt="" />
              <h6 className="font-bold">{category.category_name}</h6>
              <p>{category.availability}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
