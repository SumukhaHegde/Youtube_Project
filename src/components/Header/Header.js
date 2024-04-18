import React, { useEffect, useState } from "react";
import logo from "../../Constants/Images/youTubeLogo.png";
import userIcon from "../../Constants/Images/UserIcon.jpg";
import ".//Header_module.scss";
import { setIsleftPaneExpanded } from "../../Utils/store/leftPaneSlice";
import { useDispatch } from "react-redux";
import { searchSuggestionsApi } from "../../Constants/API/Api";
const Header = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleLeftPaneExpansion = () => {
    dispatch(setIsleftPaneExpanded());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchQueryResult();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchQueryResult = async () => {
    const data = await fetch(searchSuggestionsApi + searchQuery);
    const dataJson = await data.json();
    setSearchSuggestions(dataJson[1]);
  };

  return (
    <div>
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
              //onClick={() => setShowSuggestions(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                //setShowSuggestions(true);
              }}
            />
            <button>🔍</button>
          </div>
          <div className="searchSuggestions">
            <ul>
              {searchSuggestions?.map((searchSuggestion) => (
                <li key={searchSuggestion}>🔍 {searcsearchSuggestionhQuery}</li>
              ))}
            </ul>
          </div>
          )}
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
