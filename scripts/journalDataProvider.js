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
    .then(dispatchStateChangeEvent);
}

// Dispatches entryStateChanged to the eventHub so that getEntries will update the array entries.
export const dispatchStateChangeEvent = () => {
    const entryStateChanged = new CustomEvent("entriesStateChanged");
    eventHub.dispatchEvent(entryStateChanged);
}