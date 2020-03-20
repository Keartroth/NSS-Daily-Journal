
const eventHub = document.querySelector(".container");
const editDialogContentTarget = document.querySelector(".editDialogContainer");

// Renders a dialog box that warns the user before deleting a single journal entry.
export const deleteJournalEntryDialog = (entryId) => {
    editDialogContentTarget.innerHTML = `
        <dialog class="dialog--deleteEntry" id="dialogBox--details">
            <h4 class="bold">Warning!</h4>
            <p>Are you certain you wish to permanently delete this journal entry?</p>
    
            <div class="flex delete--button--container">
                <button id="deleteEntry--${entryId}" class="button--delete">Delete Entry</button>
    
                <button id="button--close" class="button--delete">Close without Deleting</button>
            </div>
        </dialog>
    `
}
/*
*   Listens for the custom event "deleteEntryWarningDetailEvent" which invokes the function,
*   deleteJournalEntryDialog, and renders a dialog box to the DOM.
*/
eventHub.addEventListener("deleteEntryWarningDetailEvent", theDeletionWarningEvent => {
    const entryId = theDeletionWarningEvent.detail.entry;
    deleteJournalEntryDialog(entryId);

    const editDialogBox = document.querySelector("#dialogBox--details");    
    editDialogBox.showModal();
})

// Listens for a "click" event and dispatches the custom event, deleteEntryEvent, to the eventHub.
editDialogContentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, chosenEntryId] = clickEvent.target.id.split("--");
        const deleteEntry = new CustomEvent("deleteEntryEvent", {
            detail: {
                entry: chosenEntryId,
            }
        })
        eventHub.dispatchEvent(deleteEntry);

        document.getElementById("dialogBox--details").close()
    }
})