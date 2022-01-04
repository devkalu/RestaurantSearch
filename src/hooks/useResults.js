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

      setErrorMessage("");
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong, please try again later.");
    }
  };
  useEffect(() => {
    setErrorMessage("");
    term ? searchApi(term) : searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
