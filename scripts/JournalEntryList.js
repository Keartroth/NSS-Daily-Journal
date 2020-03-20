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

const filteredEntryListComponent = (entryObjectArray) => {
    entryLog.innerHTML = "";
    for (const entry of entryObjectArray) {
        entryLog.innerHTML += journalEntryComponent(entry);
    }
}

/*
*   Listens for the custom event, entriesStateChanged, on the eventHub
*   and calls the function entryListComponent to re-evaluate the entries array.
*/
eventHub.addEventListener("entriesStateChanged", event => {
    entryListComponent();
})
/*
*   Listens for the custom event, moodRadialChosen, on the eventHub and
*   filters the array of journal entries and render the entries to the DOM.
*/
eventHub.addEventListener("moodRadialChosen", changeEvent => {
    if (changeEvent.detail.mood === "show all entries") {
        entryListComponent();
    } else {
        const arrayOfJournalEntries = useJournalEntries();
        const mood = changeEvent.detail.mood;
        const filteredArray = arrayOfJournalEntries.filter((entry) => {
            if (entry.mood === mood) {
                return true
            }
            return false
        })
        filteredEntryListComponent(filteredArray);
    }
})