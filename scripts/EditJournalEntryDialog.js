import { useJournalEntries } from "./journalDataProvider.js";

const eventHub = document.querySelector(".container");
const editDialogContentTarget = document.querySelector(".editDialogContainer");
/*
 *  Purpose: To render a single journal entry dialog box as a
 *           form to allow editing of the data in entries.json.
 */
export const editJournalEntryDialog = (journalEntryObject) => {
    const entryDate = `${journalEntryObject.date}`;
    const entryConcepts = `${journalEntryObject.concept}`;
    const entryEntry = `${journalEntryObject.entry}`;
    const entryMood = `${journalEntryObject.mood}`;

    editDialogContentTarget.innerHTML = `
        <dialog class="dialog--editEntry" id="editEntry--details">
            <form action="" class="form" id="editEntry--journalForm">
                <label for="concepts" id="editEntry--conceptsLabel" class="labels">Concepts Covered</label>
                <label for="mood" id="editEntry--moodLabel" class="labels">Current Mood</label>
                <label for="date" id="editEntry--dateLabel" class="labels">Today's Date</label><br>
                <input type="text" name="Concepts" id="editEntry--concepts" />
                <select type="select" name="Mood" id="editEntry--mood">
                    <option value="😡 anrgy 🤬" id="editEntry--angry">😡 anrgy 🤬</option>
                    <option value="😶 ennui 😑" id="editEntry--ennui">😶 ennui 😑</option>
                    <option value="😍 excited 🤩" id="editEntry--excited">😍 excited 🤩</option>
                    <option value="😏 funky 😎" id="editEntry--funky">😏 funky 😎</option>
                    <option value="😀 happy 😁" id="editEntry--happy">😀 happy 😁</option>
                    <option value="💣.🧠.💥.🤯" id="editEntry--mindBlown">💣.🧠.💥.🤯</option>
                    <option value="🙃 normal 🙃" id="editEntry--normal">🙃 normal 🙃</option>
                    <option value="😖 overwhelmed 😵" id="editEntry--overwhelmed">😖 overwhelmed 😵</option>
                    <option value="😤 pumped 😆" id="editEntry--pumped">😤 pumped 😆</option>
                    <option value="🤢 sick 🤮" id="editEntry--sick">🤢 sick 🤮</option>
                    <option value="🧐 smart 🤓" id="editEntry--smart">🧐 smart 🤓</option>
                    <option value="😢 sorrowful 😭" id="editEntry--sorrowful">😢 sorrowful 😭</option>
                    <option value="☠ PIT OF DESPAIR ☠" id="editEntry--pitOfDepair">☠ PIT OF DESPAIR ☠</option>
                </select>
                <input type="date" name="Date" id="editEntry--date"/><br>
                <label for="journal" id="editEntry--journalLabel" class="labels">Daily Journal</label><br>
                <textarea name="Journal" id="editEntry--journal" cols="30" rows="10"></textarea>
        
            </form>

            <div class="flex edit--button--container">
                <button id="button--submit--${journalEntryObject.id}" class="button--edit">Submit Edited Entry</button>
            
                <button id="button--close" class="button--edit">Close Unedited</button>
            </div>
        </dialog>
    `;

    document.querySelector("#editEntry--date").value = entryDate;
    document.querySelector("#editEntry--concepts").value = entryConcepts;
    document.querySelector("#editEntry--journal").value = entryEntry;
    document.querySelector("#editEntry--mood").value = entryMood;
}
/*
 *  Listens for the custom event, editDialogButtonClickedDetailEvent, on the eventHub
 *  and then creates a dialog box with a form to edit the corresponding journal entry.
*/
eventHub.addEventListener("editDialogButtonClickedDetailEvent", CustomEvent => {
    const EntryId = CustomEvent.detail.entry;
    const arrayOfEntryObjects = useJournalEntries();

    const entryObjectSelected = arrayOfEntryObjects.find(
        (currentEntry) => {
            if (currentEntry.id === parseInt(EntryId)) {
                return true
            }
            return false
        }
    )
    editJournalEntryDialog(entryObjectSelected);

    const editDialogBox = document.querySelector("#editEntry--details");
    editDialogBox.showModal();
})

// Listens for a "click" event and closes a corresponding dialog box.
editDialogContentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "button--close") {
        const theDialogElement = document.querySelector("#editEntry--details");
        theDialogElement.close();
    }
})

// Listens for a "click" event and dispatches a custom event to edit corresponding journal entry object in entries.json.
editDialogContentTarget.addEventListener("click", theEditEvent => {
        if (theEditEvent.target.id.startsWith("button--submit--")) {
            const [prefix, action, editedEntryId] = theEditEvent.target.id.split('--');
            const entryDate = document.querySelector("#editEntry--date").value;
            const entryConcepts = document.querySelector("#editEntry--concepts").value;
            const entryEntry = document.querySelector("#editEntry--journal").value;
            const entryMood = document.querySelector("#editEntry--mood").value;

            const editedEntryObject = {
                "date": entryDate,
                "concept": entryConcepts,
                "entry": entryEntry,
                "mood": entryMood,
                "id": editedEntryId
            }

            const theEditEntryEvent = new CustomEvent("editEntryClickedDetailEvent", {
                detail: {
                    entry: editedEntryObject,
                }
            })
            eventHub.dispatchEvent(theEditEntryEvent);
            document.getElementById("editEntry--details").close()
        }
    }
)