const eventHub = document.querySelector(".container");
const formContainerContentTarget = document.querySelector(".formContainer");

// Purpose: To render a Log Journal Entry button to the DOM.
export const LogJournalEntryButton = () => {
    formContainerContentTarget.innerHTML += `
    <button id="journalButton">Log Journal Entry</button>
    `
}

// Listens for a "click" event and dispatches a custom event "journalButtonClicked" to the eventHub.
formContainerContentTarget.addEventListener("click", event => {
    if (event.target.id === "journalButton") {
        const journalButtonEvent = new CustomEvent("journalButtonClicked");
        eventHub.dispatchEvent(journalButtonEvent);
    }
})