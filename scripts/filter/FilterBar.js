import { MoodFilter } from "./MoodFilter.js";
import { SearchBarFilter } from "./SearchBar.js";

const filtersContentTarget = document.querySelector(".filters");

// Invokes the function, MoodFilter, and renders it to the DOM in the section (.filters).
export const FilterBar = () => {
    const filterRender = () => {
        filtersContentTarget.innerHTML = `
            ${SearchBarFilter()}
            ${MoodFilter()}
        `
    }
    filterRender();
}