import { entryListComponent } from "./JournalEntryList.js";
import { getEntries } from "./journalDataProvider.js";
import { JournalEntryForm } from "./JournalEntryForm.js";
import { LogJournalEntryButton } from "./LogJournalEntryButton.js";
import { FilterBar } from "./filter/FilterBar.js";
import "./EditJournalEntryDialog.js"
import './filter/MoodFilter.js'

JournalEntryForm();
LogJournalEntryButton();
FilterBar();
getEntries().then(entryListComponent);