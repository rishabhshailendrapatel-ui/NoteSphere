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
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-6 py-3 shadow-sm transition-all">
      {/* Brand / Logo Title with Gradient Accent */}
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
        NoteSphere
      </h2>

      {/* Search Bar Component */}
      <div className="flex-1 max-w-md mx-4">
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            const value = target.value;
            setSearchQuery(value);

            // Logic: Agar user backspace se poora input mita de, toh auto-reset kar dein
            if (value === "") {
              handleClearSearch();
            }
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      </div>

      {/* User Profile Info & Logout */}
      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;