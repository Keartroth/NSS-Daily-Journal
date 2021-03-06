import { resetJournalForm } from "./JournalEntryForm.js";

/*
 *   Journal data provider for Daily Journal application
 *
 *      Accesses the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */


const eventHub = document.querySelector(".container");

// Sets an empty array, entries, for getEntries to place the parsed data in.
let entries = [];

// Returns a copy of the array entries which has been sorted by entry date to be used later.
export const useJournalEntries = () => {
    const journalEntries = entries.slice();
    const sortedByDate = journalEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    .reverse();
    return sortedByDate;
}

// Fetches a JSON string of notes data and then converts it to a JavaScript array.
export const getEntries = () => {
    return fetch('http://localhost:8088/entries')
    .then(response => response.json())
    .then(
        parsedEntries => {
            entries = parsedEntries
        }
    )
}

// Converts a JavaScript string of data to a JSON string, Posts it, and then dispatches a custom event to the eventHub to refresh the journal entries.
export const saveEntry = entry => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(resetJournalForm)
    .then(dispatchStateChangeEvent);
}

// Deletes a string of entry data in a JSON file, and then dispatches a custom event to the eventHub to refresh the entries array.
export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent);
}

// Edits the data in a JSON file, and then dispatches a custom event to the eventHub to refresh the entries array.
export const editEntry = (entry) => {
    return fetch(`http://localhost:8088/entries/${entry.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent);
}

// Dispatches entryStateChanged to the eventHub so that getEntries will update the array entries.
export const dispatchStateChangeEvent = () => {
    const entryStateChanged = new CustomEvent("entriesStateChanged");
    eventHub.dispatchEvent(entryStateChanged);
}

/*
*   Listens for the custom event "deleteEntryEvent" which invokes the function,
*   deleteEntry, and then sets an updated array to render the entry list again.
*/
eventHub.addEventListener("deleteEntryEvent", theDeleteEvent => {
    deleteEntry(theDeleteEvent.detail.entry)
    .then(getEntries)
})
/*
*   Listens for the custom event "editEntryClickedDetailEvent" which invokes the function,
*   editEntry, and then dispatches a custom event to the eventHub to refresh the entries array.
*/
eventHub.addEventListener("editEntryClickedDetailEvent", theEditEvent => {
    editEntry(theEditEvent.detail.entry)
    .then(getEntries)
})