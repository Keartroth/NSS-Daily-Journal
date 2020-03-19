import { entryListComponent } from "./journalEntryList.js";
// import { initializeLogButtonEvent } from "./initializeLogButton.js";
import { getEntries } from "./journalDataProvider.js";
import { JournalEntryForm } from "./JournalEntryForm.js";
import { LogJournalEntryButton } from "./LogJournalEntryButton.js";
import "./EditJournalEntryDialog.js"

JournalEntryForm();
LogJournalEntryButton();
getEntries().then(entryListComponent)
// initializeLogButtonEvent();