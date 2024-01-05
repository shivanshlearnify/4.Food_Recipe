import React, { useEffect, useState } from "react";
import "./style.css";
import { getFoodData } from "../../api";
import { useNavigate } from "react-router-dom";

const CusineItem = () => {
  const navigate = useNavigate();
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
              src={data.image}
              alt="img"
            />
            <div className="cusineItemTitle">{data.title}</div>
            <div className="cusineItemNutrition">
              <span className="calories">calories: null</span>
              <span className="protein">protein: null</span>
              <span className="totalfat">totalfat: null</span>
              <span className="carbs">carbs: null</span>
              <span className="healthScore">healthScore: null</span>
            </div>
            <button onClick={()=> navigate(`/${data.id}`)}>Click here for Recipe</button>
          </div>
        ))}
        {/* <div className="card">
          <img
            src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
          <div className="cusineItemTitle">Soup</div>
          <div className="cusineItemNutrition">
            <span className="calories">calories: null</span>
            <span className="protein">protein: null</span>
            <span className="totalfat">totalfat: null</span>
            <span className="carbs">carbs: null</span>
            <span className="healthScore">healthScore: null</span>
          </div>
          <button onClick={() => navigate("/search")}>
            Click here for Recipe
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CusineItem;
