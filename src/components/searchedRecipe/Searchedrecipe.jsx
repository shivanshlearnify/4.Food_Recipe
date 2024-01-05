import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { getRecipeInformation } from "../../api";

const Searchedrecipe = () => {
  const { id } = useParams();
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getRecipeInformation(id);
      setResult(result);
    };

    fetchData();
  }, []);

  return (
    <div className="SearchedrecipeContainer">
      <div className="SearchedrecipeTop">
        <div className="SearchedrecipeImg">
          <img
            src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="SearchedrecipeRight">
          <div className="SearchedrecipeTitle">{result.title}</div>
          <div className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            sapiente dolorem quibusdam impedit voluptatum. Autem neque sequi
            corporis fuga itaque delectus cumque, quae culpa necessitatibus
            minus vel quisquam rerum dignissimos. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dignissimos modi ipsa officiis
            explicabo illo harum inventore sunt vitae similique magnam,
            architecto recusandae voluptatum aspernatur velit maiores non minima
            quod fugit!
          </div>
        </div>
      </div>
      <div className="SearchedrecipeInformation">
        <div className="SearchedrecipeNutrition">
          <div className="title">Nutritional Information</div>
          <div className="nutrition">
            <ul>
              <li>Calories</li>
              <li>Protien</li>
              <li>Total Fat</li>
              <li>Carbs</li>
              <li>Health Score</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchedrecipe;
