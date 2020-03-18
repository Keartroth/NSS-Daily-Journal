/*
 *   Journal data provider for Daily Journal application
 *
 *      Accesses the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

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


/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
// export const useJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate;
// }