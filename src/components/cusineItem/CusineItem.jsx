import React, { useEffect, useState } from "react";
import "./style.css";
import { getFoodData } from "../../api";

const CusineItem = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getFoodData();
      setResult(result.recipes);
    };

    fetchData();
  }, []);
  return (
    <div className="cusineItemContainer">
      <div className="cusineTitle">Explore The Recipes</div>
      <div className="cardWrapper">
        {result.map((data) => (
          <div className="card" key={data.id}>
            <img
              src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
            <div className="cusineItemTitle">{data.title}</div>
            <div className="cusineItemNutrition">
              <span className="calories">calories</span>
              <span className="protein">protein</span>
              <span className="totalfat">totalfat</span>
              <span className="carbs">carbs</span>
              <span className="healthScore">healthScore</span>
            </div>
            <button>Click here for Recipe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CusineItem;
