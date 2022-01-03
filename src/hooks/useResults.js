import { useState, useEffect } from "react";
import axios from "../api/yelp";

export default (term) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await axios.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "rotterdam",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(
        "Something went wrong with your request please try again later."
      );
    }
  };
  useEffect(() => (term ? searchApi(term) : searchApi("pasta")), []);
  console.log(results);
  return [searchApi, results, errorMessage];
};
