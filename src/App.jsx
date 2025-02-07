import React, { useState, useCallback, useMemo } from "react";
import {  MemoizedRecipeList } from "./components/recipes/recipes-list";
import { fetchRecipes } from "./api/fetch-recipes";
import "./App.css";
import { SecondCounter, MemoizedCounter, } from "./components/counter";
import {  MemoizedPagination } from "./components/pagination";
import { useFetchRecipes } from "./hooks/use-fetch-recipes";
export const App = () => {
 const {limit, setLimit, fetchRecipesHandler, sortedRecipes} = useFetchRecipes(5)

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>React Basics</h1>
      <h2 style={{ textAlign: "center" }}>Custom Hooks</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <MemoizedCounter />

        <SecondCounter />
      </div>
      <MemoizedPagination limit={limit} setLimit={setLimit} />
      <button onClick={fetchRecipesHandler}>Fetch Manually</button>

      <MemoizedRecipeList recipes={sortedRecipes} />
    </div>
  );
};
