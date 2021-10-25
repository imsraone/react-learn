import React from "react";
import './search.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
);