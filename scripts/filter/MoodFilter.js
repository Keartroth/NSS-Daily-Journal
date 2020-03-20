const eventHub = document.querySelector(".container");
const filtersContentTarget = document.querySelector(".filters");
/*
 *  Defines the function, MoodFilter, which evaluates to a string HTML representation of
 *   a fieldset containing radial buttons with emotional values to choose from.
*/
export const MoodFilter = () => {
    return `
    <fieldset class="fieldset filter--mood">
        <label for="journalFilter" class="filter--label">Filter Journal Entries by Mood</label>

        <input type="radio" id="show all entries" name="mood" value="show all entries" checked/>
        <label for="show all entries">Show All Entries</label>

        <input type="radio" id="anrgy" name="mood" value="😡 anrgy 🤬" />
        <label for="anrgy">Anrgy</label>

        <input type="radio" id="ennui" name="mood" value="😶 ennui 😑" />
        <label for="ennui">Ennui</label>

        <input type="radio" id="excited" name="mood" value="😍 excited 🤩" />
        <label for="excited">Excited</label>

        <input type="radio" id="funky" name="mood" value="😏 funky 😎" />
        <label for="funky">Funky</label>

        <input type="radio" id="happy" name="mood" value="😀 happy 😁" />
        <label for="happy">Happy</label>
        
        <input type="radio" id="mindblown" name="mood" value="💣.🧠.💥.🤯" />
        <label for="mindblown">Mindblown</label>

        <input type="radio" id="normal" name="mood" value="🙃 normal 🙃" />
        <label for="normal">Normal</label>

        \n

        <input type="radio" id="overwhelmed" name="mood" value="😖 overwhelmed 😵" />
        <label for="overwhelmed">Overwhelmed</label>

        <input type="radio" id="pumped" name="mood" value="😤 pumped 😆" />
        <label for="pumped">Pumped</label>

        <input type="radio" id="sick" name="mood" value="🤢 sick 🤮" />
        <label for="sick">Sick</label>
        
        <input type="radio" id="smart" name="mood" value="🧐 smart 🤓" />
        <label for="smart">Smart</label>
        
        <input type="radio" id="sorrowful" name="mood" value="😢 sorrowful 😭" />
        <label for="sorrowful">Sorrowful</label>
        
        <input type="radio" id="PIT OF DESPAIR" name="mood" value="☠ PIT OF DESPAIR ☠" />
        <label for="PIT OF DESPAIR">PIT OF DESPAIR</label>

    </fieldset>
    `
}
/*
 *  Listens for a "change" event for any element whose name === "mood", and
 *  dispatches a custom event, moodRadialChosen, to the eventHub.
*/
filtersContentTarget.addEventListener("change", changeEvent => {
    if (changeEvent.target.name === "mood") {
        const moodSelected = changeEvent.target.value;
        const theSelectedMoodEvent = new CustomEvent("moodRadialChosen", {
            detail: {
                mood: moodSelected
            }
        })
        eventHub.dispatchEvent(theSelectedMoodEvent);
    }
})