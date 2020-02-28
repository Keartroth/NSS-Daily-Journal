import { useJournalEntries } from "./journalDataProvider.js";

const journalEntry = () => {    
    const conceptsData = document.getElementById("concepts").value;
    const moodData = document.getElementById("mood").value;
    const dateData = document.getElementById("date").value;
    const journalData = document.getElementById("journal").value;

    var myData = `Concepts Covered:     ${conceptsData}                                   Daily Journal Entry: ${journalData}`;
    window.open(`mailto:mecarrolljr@tutanota.com?subject=NSS Daily Journal: ${dateData}   Current Mood:   ${moodData}&body=${myData}`);
}

const initializeLogButtonEvent = () => {
    const button = document.querySelector("#journalButton");
    button.addEventListener("click",journalEntry);
};


initializeLogButtonEvent();