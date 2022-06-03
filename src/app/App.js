import React from "react";
import { SearchTerm } from "../features/searchTerm/SearchTerm";
import { Posts } from "../features/posts/Posts";


export default function App(){
        return (
        <div className="appContainer">
            <div className="navContainer">
                <div className="navbar">
                    <div className="logo"></div>
                    <SearchTerm />
                </div>
            </div>
            <Posts />
        </div>
    )
}