/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

const eventHub = document.querySelector(".container");
const entryLogContentTarget = document.querySelector(".entriesContainer");

export const journalEntryComponent = (record) => {
    return `
        <section id="entry--${record.id}" class="journalEntry">
            <h4 id="entry--concept--${record.id}"><span class="bold">Concept Covered</span>: ${record.concept}</h4>
            <h5 id="entry--date--${record.id}"><span class="bold">Date</span>: ${record.date}</h5>
            <h5 id="entry--mood--${record.id}"><span class="bold">Mood</span>: ${record.mood}</h5>
            <p id="entry--journalEntry--${record.id}"><span class="bold">Journal Entry</span>:\n \n ${record.entry}</p>

            <button id="deleteEntry--${record.id}" class="deleteEntryButton">Delete Entry</button>

            <button id="editEntry--${record.id}" class="editEntryButton">Edit Entry</button>
    
        </section>
    `;
}

entryLogContentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, chosenEntryId] = clickEvent.target.id.split("--");
        const deleteEntry = new CustomEvent("deleteEntryEvent", {
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
        // const dateUnsplit = document.querySelector(`#entry--date--${chosenEntry}`).innerText;
        // const [dateprefix, entryDate] = dateUnsplit.split(": ");
        const openDialogBox = new CustomEvent("editDialogButtonClickedDetailEvent", {
            detail: {
                entry: chosenEntry,
                // date: entryDate
            }
        })
        eventHub.dispatchEvent(openDialogBox);
    }
})