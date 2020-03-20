import { useJournalEntries } from "./journalDataProvider.js"
import { journalEntryComponent } from "./journalEntry.js"

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component from entries.json.
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

const filteredEntryListComponent = (arrayOfEntryObjects) => {
    entryLog.innerHTML = "";
    for (const entryObject of arrayOfEntryObjects) {
        entryLog.innerHTML += journalEntryComponent(entryObject);
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
*   filters the array of journal entries and renders the entries to the DOM.
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
/*
*   Listens for the custom event, searchInitialized, on the eventHub and
*   filters the array of journal entries and renders the entries to the DOM.
*/
eventHub.addEventListener("searchInitialized", searchEvent => {
    if (searchEvent.detail.search === "") {
        entryListComponent();
    } else {
        const arrayOfJournalEntries = useJournalEntries();
        const searchCriteria = searchEvent.detail.search;
        let filteredArray = [];
        
        for (const entry of arrayOfJournalEntries) {
            let duplicateCheck = false;

            for (const value of Object.values(entry)) {
                let valuesString = null;

                if (typeof value !== 'number') {
                    valuesString = value.includes(searchCriteria);
                }
                if (value === searchCriteria || valuesString === true) {
                    if (duplicateCheck === false) {
                        duplicateCheck = true;
                        filteredArray.push(entry);
                    }
                }    
            }
        }
        filteredEntryListComponent(filteredArray);
    }
})