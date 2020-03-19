import { useJournalEntries } from "./journalDataProvider.js"
import { journalEntryComponent } from "./journalEntry.js"

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

const eventHub = document.querySelector(".container");
const entryLog = document.querySelector(".entriesContainer");

export const entryListComponent = () => {
    entryLog.innerHTML = "";
    const entries = useJournalEntries();

    for (const entry of entries) {
        entryLog.innerHTML += journalEntryComponent(entry);
    }
}

/*
*   Listens for the custom event, noteStateChanged, on the eventHub
*   and calls the function getNotes to re-evaluate the notes array.
*/
eventHub.addEventListener("entriesStateChanged", event => {
    entryListComponent();
})