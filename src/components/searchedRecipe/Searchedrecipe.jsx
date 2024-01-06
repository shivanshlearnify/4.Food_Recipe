import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { getRecipeInformation } from "../../api";

const Searchedrecipe = () => {
  const { id } = useParams();
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getRecipeInformation(id, "information");
      setResult(result);
    };

    fetchData();
  }, []);
  const [nutriInfo, setNutriInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getRecipeInformation(id, "nutritionWidget.json");
      setNutriInfo(result.nutrients);
    };

    fetchData();
  }, []);

  let filteredNutriInfo = [];
  if (nutriInfo) {
   filteredNutriInfo = nutriInfo.filter(
      (data) =>
        data.name === "Calories" ||
        data.name === "Fat" ||
        data.name === "Saturated Fat" ||
        data.name === "Carbohydrates" ||
        data.name === "Sugar" ||
        data.name === "Protein"
    );
  }

  return (
    <div className="SearchedrecipeContainer">
      {result && (
        <div className="SearchedrecipeTop">
          <div className="SearchedrecipeImg">
            <img
              src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="SearchedrecipeRight">
            <div className="SearchedrecipeTitle">{result.title}</div>
            <div className="summary">{result.summary}</div>
          </div>
        </div>
      )}
      <div className="SearchedrecipeInformation">
        <div className="SearchedrecipeNutrition">
          <div className="title">Nutritional Information</div>
          <div className="nutrition">
            {filteredNutriInfo &&
              filteredNutriInfo.map((data, index) => (
                <div key={index}>
                  <span className="name">{data.name}</span>
                  <span className="name">{data.amount}</span>
                  <span className="name">{data.unit}</span>
                </div>
              ))}
          </div>
          {result && <div className="summary">{result.instructions}</div>}
        </div>
      </div>
    </div>
  );
};

export default Searchedrecipe;
