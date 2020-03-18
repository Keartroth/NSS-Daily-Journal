import entryListComponent from "./journalEntryList.js";
import initializeLogButtonEvent from "./initializeLogButton.js";
import { getEntries } from "./journalDataProvider.js";

getEntries().then(entryListComponent)
initializeLogButtonEvent();