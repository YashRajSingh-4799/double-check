import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import SearchBar from "./components/SearchForm/searchform";
import Hero from "./components/Hero/hero";
import Wave from "./components/Wave/wave";
import axios from "axios";
import loader from "./assets/YmvJ.gif";
import ResultList from "./components/ResultList/resultlist";

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (keyword) => {
    try {
      setLoading(true);
      let domainName = keyword;

      // Check if the keyword contains a TLD
      if (!domainName.includes(".")) {
        // Append ".com" if TLD is not present
        domainName += ".com";
      }

      const response = await axios.post(
        "https://domain-check-api.vercel.app/compare",
        {
          domainName: domainName,
        }
      );
      setSearchResult(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-800">
      <div className="pb-[100px]">
        <Navbar />
      </div>
      <div className="mx-[20%] mb-6 lg:mb-[70px]">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex justify-center items-center ">
        {loading && (
          <div className="justify-center items-center">
            <img src={loader} alt="search" />
          </div>
        )}
        {!loading && !searchResult && <Hero />}
        {!loading && searchResult && <ResultList results={searchResult} />}
      </div>
      <Wave />
    </div>
  );
}

export default App;
