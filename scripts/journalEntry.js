/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const journalEntryComponent = (record) => {
    return `
        <section id="entry--${record.id}" class="journalEntry">
            ${record.date}      Journal Entry: ${record.entry}
        </section>
    `;
}

export default journalEntryComponent;