import React, { useEffect, useState } from "react";
import logo from "../../Constants/Images/yt-logo.png";
import userIcon from "../../Constants/Images/UserIcon.jpg";
import "./_header.scss";
import { setIsleftPaneExpanded } from "../../Utils/store/leftPaneSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchSuggestionsApi } from "../../Constants/API/Api";
import { addSuggestionCache } from "../../Utils/store/searchSuggestionSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps, MdNotifications } from "react-icons/md";
import { ImYoutube2 } from "react-icons/im";
const Header = () => {
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const suggestionCache = useSelector((store) => store.searchSuggestion);
  const navigate = useNavigate();

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
      className="header"
      onClick={() => {
        setShowSuggestions(false);
      }}
    >
      <div className="header-left-section">
        <div className="hamburger-icon">
          <FaBars
            className="yt-hamburger header-icon"
            onClick={handleLeftPaneExpansion}
          ></FaBars>
        </div>
        <div
          className="ytlogo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="yt-logo" src={logo} alt="logo" />
          <ImYoutube2 className="header-logo-icon" />
        </div>
      </div>

      <div className="header-middle-section">
        <form
          className="search-bar-section"
          onSubmit={(e) => e.preventDefault()}
        >
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
          <button className="header-icon search-icon">
            <AiOutlineSearch />
          </button>
          {searchQuery !== "" && showSuggestions && (
            <div className="searchSuggestions">
              <ul>
                {searchSuggestions?.map((searchSuggestion) => (
                  <li key={searchSuggestion}>🔍 {searchSuggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
      <div className="header-right-section">
        <MdNotifications className="header-icon notification-icon" />
        <MdApps className="header-icon apps-icon" />
        <img className="user-icon" src={userIcon} alt="UserIcon" />
      </div>
    </div>
  );
};

export default Header;
