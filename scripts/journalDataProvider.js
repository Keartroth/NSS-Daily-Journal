/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        date: "02/17/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        date: "02/25/2020",
        concept: "GitHub",
        entry: "We talked about GitHub and how to correctly checkout to new branches, how to make pull requests, and how to merge to master.",
        mood: "Ok"
    },
    {
        date: "02/27/2020",
        concept: "Javascript Single Responsibility Principle",
        entry: "We talked about how you should house each javascript module seperately to help alleviate the size of files for code and to help readability.",
        mood: "Ok"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}