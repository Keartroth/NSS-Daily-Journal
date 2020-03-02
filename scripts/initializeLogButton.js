import journalEntries from "./journalEntriesMail.js";

const initializeLogButtonEvent = () => {
    const button = document.querySelector("#journalButton");
    button.addEventListener("click",journalEntries);
};

export default initializeLogButtonEvent;