import { saveEntry } from "./journalDataProvider.js";

const eventHub = document.querySelector(".container");
const formContainerContentTarget = document.querySelector(".formContainer");

export const JournalEntryForm = () => {
    formContainerContentTarget.innerHTML += `
    <form action="" class="form" id="journalForm">
                <label for="concepts" id="conceptsLabel" class="labels">Concepts Covered</label>
                <label for="mood" id="moodLabel" class="labels">Current Mood</label>
                <label for="date" id="dateLabel" class="labels">Today's Date</label><br>
                <input type="text" name="Concepts" id="concepts" />
                <select type="select" name="Mood" id="mood">
                    <option value="😍 excited 🤩" id="excited">😍 excited 🤩</option>
                    <option value="💣.🧠.💥.🤯" id="mindBlown">💣.🧠.💥.🤯</option>
                    <option value="😤 pumped 😆" id="pumped">😤 pumped 😆</option>
                    <option value="😀 happy 😁" id="happy">😀 happy 😁</option>
                    <option value="🧐 smart 🤓" id="smart">🧐 smart 🤓</option>
                    <option value="😏 funky 😎" id="funky">😏 funky 😎</option>
                    <option value="🙃 normal 🙃" id="normal">🙃 normal 🙃</option>
                    <option value="😢 sorrowful 😭" id="sorrowful">😢 sorrowful 😭</option>
                    <option value="😡 anrgy 🤬" id="angry">😡 anrgy 🤬</option>
                    <option value="🤢 sick 🤮" id="sick">🤢 sick 🤮</option>
                    <option value="😶 ennui 😑" id="ennui">😶 ennui 😑</option>
                    <option value="😖 overwhelmed 😵" id="overwhelmed">😖 overwhelmed 😵</option>
                    <option value="☠ PIT OF DESPAIR ☠" id="pitOfDepair">☠ PIT OF DESPAIR ☠</option>
                </select>
                <input type="date" name="Date" id="date"/><br>
                <label for="journal" id="journalLabel" class="labels">Daily Journal</label><br>
                <textarea name="Journal" id="journal" cols="30" rows="10"></textarea>
        
            </form>
    `
}
/*
 *  Listens for a "click" event, journalButtonClicked, from the button element (#journalButton), and then collects 
 *  the user entered data of the form element (#journalForm) and runs the function saveEntry to submit the data.
*/
eventHub.addEventListener("journalButtonClicked", customEvent => {
    const concept = document.getElementById("concepts").value;
    const mood = document.getElementById("mood").value;
    const date = document.getElementById("date").value; 
    const entry = document.getElementById("journal").value;

    const newEntry = {
        "date": date,
        "concept": concept,
        "entry": entry,
        "mood": mood
    }
    saveEntry(newEntry)
})

// Function that resets the form, #journalForm, when invoked.
export const resetJournalForm = () => {
    const journalFormDOMReference = document.getElementById("journalForm");
    journalFormDOMReference.reset();
}