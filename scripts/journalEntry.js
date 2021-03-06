/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

const eventHub = document.querySelector(".container");
const entryLogContentTarget = document.querySelector(".entriesContainer");
/*
 *  Defines the function, journalEntryComponent (which accepts a journal entry object from entries.json 
 *  as the parameter of an argument) and evaluates to a string HTML representation of that journal entry.
*/
export const journalEntryComponent = (record) => {
    return `
        <section id="entry--${record.id}" class="journalEntry">
            <div class="flex">
                <h4 id="entry--concept--${record.id}" class="entryList--concepts"><span class="bold">Concept Covered</span>: ${record.concept}</h4>
                <h5 id="entry--date--${record.id}" class="entryList--date"><span class="bold">Date</span>: ${record.date}</h5>
                <h5 id="entry--mood--${record.id}" class="entryList--mood"><span class="bold">Mood</span>: ${record.mood}</h5>
            </div>
            <p id="entry--journalEntry--${record.id}" class="entryList--journal"><span class="bold">Journal Entry</span>:\n \n ${record.entry}</p>

            <div class="flex">
                <button id="deleteEntry--${record.id}" class="button--change">Delete Entry</button>

                <button id="editEntry--${record.id}" class="button--change">Edit Entry</button>
            </div>
        </section>
    `;
}

// Listens for a "click" event and dispatches the custom event, deleteEntryWarningDetailEvent, to the eventHub.
entryLogContentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, chosenEntryId] = clickEvent.target.id.split("--");
        const deleteEntry = new CustomEvent("deleteEntryWarningDetailEvent", {
            detail: {
                entry: chosenEntryId,
            }
        })
        eventHub.dispatchEvent(deleteEntry);
    }
})

/*
 *  Listens for a "click" event and dispatches the custom event, editDialogButtonClickedDetailEvent,
 *  to the eventHub to create a dialog box with the corresponding entry object.
*/
entryLogContentTarget.addEventListener(
    "click", 
    clickEvent => {
    if (clickEvent.target.id.startsWith("editEntry--")) {
        const [prefix, chosenEntry] = clickEvent.target.id.split("--");
        const openDialogBox = new CustomEvent("editDialogButtonClickedDetailEvent", {
            detail: {
                entry: chosenEntry,
            }
        })
        eventHub.dispatchEvent(openDialogBox);
    }
})