/*
*  Purpose: HTML string representation of a search bar that will
*           allow the user to search data in entries.json.
*/

const eventHub = document.querySelector(".container");
const filtersContentTarget = document.querySelector(".filters");

export const SearchBarFilter = () => {
    return `
    <fieldset class="fieldset filter--searchBar">
        <label for="entriesSearch">Search Journal Entries:</label>
        <input type="search" id="entriesSearch" name="entriesSearch">
    </fieldset>
    `
}
/*
 *  Listens for a "keypress" ("Enter") event in an element ("#entriesSearch"), and
 *  dispatches a custom event, searchInitialized, to the eventHub with the search parameter.
*/
filtersContentTarget.addEventListener("keypress", keypressEvent => {
    if (keypressEvent.target.id === "entriesSearch" && keypressEvent.key === "Enter") {
        const searchCriteria = keypressEvent.target.value;
        const theSearchEntriesEvent = new CustomEvent("searchInitialized", {
            detail: {
                search: searchCriteria
            }
        })
        eventHub.dispatchEvent(theSearchEntriesEvent);
    }
})