import React, { useEffect, useState } from "react";
import logo from "../../Constants/Images/youTubeLogo.png";
import userIcon from "../../Constants/Images/UserIcon.jpg";
import ".//Header_module.scss";
import { setIsleftPaneExpanded } from "../../Utils/store/leftPaneSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchSuggestionsApi } from "../../Constants/API/Api";
import { addSuggestionCache } from "../../Utils/store/searchSuggestionSlice";
import { Link, Navigate } from "react-router-dom";
const Header = () => {
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const suggestionCache = useSelector((store) => store.searchSuggestion);

  const handleLeftPaneExpansion = () => {
    dispatch(setIsleftPaneExpanded());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (suggestionCache[searchQuery]) {
        setSearchSuggestions(suggestionCache[searchQuery]);
      } else {
        getSearchQueryResult();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchQueryResult = async () => {
    const data = await fetch(searchSuggestionsApi + searchQuery);
    const dataJson = await data.json();
    setSearchSuggestions(dataJson[1]);
    dispatch(addSuggestionCache({ [searchQuery]: dataJson[1] }));
  };

  return (
    <div
      onClick={() => {
        setShowSuggestions(false);
      }}
    >
      <div className="header">
        <div className="header-left-section">
          <div className="yt-hamburger" onClick={handleLeftPaneExpansion}>
            ☰
          </div>

          <img className="yt-logo" src={logo} alt="logo" />
        </div>

        <div className="header-middle-section">
          <div className="search-bar-section">
            <input
              className="search-bar"
              value={searchQuery}
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
            />
            <button>🔍</button>
            {searchQuery !== "" && showSuggestions && (
              <div className="searchSuggestions">
                <ul>
                  {searchSuggestions?.map((searchSuggestion) => (
                    <li key={searchSuggestion}>🔍 {searchSuggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="header-right-section">
          <button>🔔</button>
          <img className="user-icon" src={userIcon} alt="UserIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
