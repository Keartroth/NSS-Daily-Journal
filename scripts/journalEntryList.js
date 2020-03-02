import { useJournalEntries } from "./journalDataProvider.js"
import journalEntryComponent from "./journalEntry.js"

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

const entryListComponent = () => {
    // DOM reference to where all entries will be rendered
    const entryLog = document.querySelector(".formContainer");
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries();

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML += journalEntryComponent(entry);
    }
}

export default entryListComponent;