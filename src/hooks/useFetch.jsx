import { useEffect, useState } from "react";
import { getRecipeInformation } from "../api";

const useFetch = (id, param) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    getRecipeInformation(id, param)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [id]);

  return { data, loading, error };
};

export default useFetch;
