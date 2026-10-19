import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // User logout handler
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Search execution handler with trim safety
  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearchNote(searchQuery.trim());
    }
  };

  // Clear search handler
  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          const value = target.value;
          setSearchQuery(value);
          
          // FIX: Agar user backspace se poora input mita de, toh auto-reset kar dein
          if (value === "") {
            handleClearSearch();
          }
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;