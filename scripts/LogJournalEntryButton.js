const eventHub = document.querySelector(".container");
const formContainerContentTarget = document.querySelector(".formContainer");

export const LogJournalEntryButton = () => {
    formContainerContentTarget.innerHTML += `
    <button id="journalButton">Log Journal Entry</button>
    `
}

formContainerContentTarget.addEventListener("click", event => {
    if (event.target.id === "journalButton") {
        const journalButtonEvent = new CustomEvent("journalButtonClicked");
        eventHub.dispatchEvent(journalButtonEvent);
    }
})