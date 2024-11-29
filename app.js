// Variables
const timetable = document.querySelector("#timetable tbody");
const addRowBtn = document.getElementById("add-row");
const saveButton = document.getElementById("save-button");
const notesList = document.getElementById("notes-list");
const addNoteBtn = document.getElementById("add-note");
const clearNotesBtn = document.getElementById("clear-notes");
const newNoteContent = document.getElementById("new-note-content");

// Local Storage Data
let timetableData = JSON.parse(localStorage.getItem("timetable")) || [];
let notesData = JSON.parse(localStorage.getItem("notes")) || [];

// Render Timetable
function renderTimetable() {
    timetable.innerHTML = ""; // Clear existing rows
    timetableData.forEach((row, index) => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
            <td contenteditable="true">${row.courseCode || ""}</td>
            <td contenteditable="true">${row.title || ""}</td>
            <td contenteditable="true">${row.day || ""}</td>
            <td contenteditable="true">${row.time || ""}</td>
            <td contenteditable="true">${row.venue || ""}</td>
            <td><button class="delete-row" data-index="${index}">Delete</button></td>
        `;
        timetable.appendChild(tableRow);
    });

// Save Timetable to Local Storage
saveButton.addEventListener("click", () => {
    const rows = Array.from(timetable.querySelectorAll("tr"));
    timetableData = rows.map((row) => {
        const cells = row.querySelectorAll("td");
        return {
            courseCode: cells[0].textContent.trim(),
            title: cells[1].textContent.trim(),
            day: cells[2].textContent.trim(),
            time: cells[3].textContent.trim(),
            venue: cells[4].textContent.trim(),
        };
    });
    localStorage.setItem("timetable", JSON.stringify(timetableData));
    alert("Timetable saved!");
});


    // Attach delete functionality
    document.querySelectorAll(".delete-row").forEach((btn) =>
        btn.addEventListener("click", deleteRow)
    );
}

// Add Row to Timetable
addRowBtn.addEventListener("click", () => {
    timetableData.push({
        courseCode: "",
        title: "",
        day: "",
        time: "",
        venue: "",
    });
    renderTimetable();
});

// Save Timetable to Local Storage
saveButton.addEventListener("click", () => {
    const rows = Array.from(timetable.querySelectorAll("tr"));
    timetableData = rows.map((row) => {
        const cells = row.querySelectorAll("td");
        return {
            courseCode: cells[0].textContent.trim(),
            title: cells[1].textContent.trim(),
            day: cells[2].textContent.trim(),
            time: cells[3].textContent.trim(),
            venue: cells[4].textContent.trim(),
        };
    });
    localStorage.setItem("timetable", JSON.stringify(timetableData));
    alert("Timetable saved!");
});

// Delete Row from Timetable
function deleteRow(event) {
    const index = event.target.getAttribute("data-index");
    timetableData.splice(index, 1);
    renderTimetable();
    localStorage.setItem("timetable", JSON.stringify(timetableData));
}


// Render Notes
function renderNotes() {
    notesList.innerHTML = ""; // Clear existing notes
    notesData.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note-card");
        noteDiv.innerHTML = `
            <pre>${note.content}</pre>
            <button class="delete-note" data-index="${index}">Delete</button>
        `;

        // Attach delete functionality
        noteDiv.querySelector(".delete-note").addEventListener("click", () => {
            notesData.splice(index, 1);
            renderNotes();
            localStorage.setItem("notes", JSON.stringify(notesData));
        });

        notesList.appendChild(noteDiv);
    });
}

// Render Notes with Proper Arrangement
function renderNotes() {
    notesList.innerHTML = ""; // Clear existing notes

    // Loop through all saved notes
    notesData.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note-card");

        // Create a pre element for the note content
        const noteContent = document.createElement("pre");
        noteContent.textContent = note.content; // Preserve the original text structure

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("data-index", index);

        // Add delete functionality
        deleteButton.addEventListener("click", () => {
            notesData.splice(index, 1); // Remove the note from data
            renderNotes(); // Re-render notes
            localStorage.setItem("notes", JSON.stringify(notesData)); // Update local storage
        });

        // Append the content and button to the note card
        noteDiv.appendChild(noteContent);
        noteDiv.appendChild(deleteButton);

        // Add the note card to the list
        notesList.appendChild(noteDiv);
    });
}


// Add Note
addNoteBtn.addEventListener("click", () => {
    const content = newNoteContent.value.trim();
    if (content) {
        notesData.push({ content });
        localStorage.setItem("notes", JSON.stringify(notesData));
        renderNotes();
        newNoteContent.value = ""; // Clear input
    } else {
        alert("Please write something before adding a note.");
    }
});

// Clear All Notes
clearNotesBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all notes?")) {
        notesData = [];
        localStorage.setItem("notes", JSON.stringify(notesData));
        renderNotes();
    }
});

// Initialize Timetable and Notes on Page Load
window.addEventListener("load", () => {
    renderTimetable();
    renderNotes();
});
// Automatic Timer Variables
let autoTimerSeconds = 0; // Seconds elapsed since app launch
const autoTimerDisplay = document.getElementById("timer-minutes");
const autoTimerSecondsDisplay = document.getElementById("timer-seconds");

// Manual Stopwatch Variables
let stopwatchInterval = null; // Interval for stopwatch
let stopwatchRunning = false;
let stopwatchSeconds = 0;
const stopwatchMinutesDisplay = document.getElementById("stopwatch-minutes");
const stopwatchSecondsDisplay = document.getElementById("stopwatch-seconds");

// Start Automatic Timer
function startAutoTimer() {
    setInterval(() => {
        autoTimerSeconds++;
        const minutes = Math.floor(autoTimerSeconds / 60);
        const seconds = autoTimerSeconds % 60;

        autoTimerDisplay.textContent = String(minutes).padStart(2, "0");
        autoTimerSecondsDisplay.textContent = String(seconds).padStart(2, "0");
    }, 1000); // Update every second
}

// Start Manual Stopwatch
function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchInterval = setInterval(() => {
            stopwatchSeconds++;
            const minutes = Math.floor(stopwatchSeconds / 60);
            const seconds = stopwatchSeconds % 60;

            stopwatchMinutesDisplay.textContent = String(minutes).padStart(2, "0");
            stopwatchSecondsDisplay.textContent = String(seconds).padStart(2, "0");
        }, 1000); // Update every second
    }
}

// Stop Manual Stopwatch
function stopStopwatch() {
    if (stopwatchRunning) {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
    }
}

// Reset Manual Stopwatch
function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    stopwatchSeconds = 0;
    stopwatchMinutesDisplay.textContent = "00";
    stopwatchSecondsDisplay.textContent = "00";
}

// Attach Event Listeners to Stopwatch Buttons
document.getElementById("start-stopwatch").addEventListener("click", startStopwatch);
document.getElementById("stop-stopwatch").addEventListener("click", stopStopwatch);
document.getElementById("reset-stopwatch").addEventListener("click", resetStopwatch);

// Start the Automatic Timer on Page Load
window.onload = function () {
    startAutoTimer();
    renderTimetable();
    renderNotes();
};
// Render Weekly Calendar
function renderWeeklyCalendar() {
    const calendar = document.getElementById("calendar");
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // Get current day index
    const todayDate = currentDate.getDate();

    // Clear existing calendar
    calendar.innerHTML = "";

    // Create weekly calendar structure
    const calendarTable = document.createElement("table");
    calendarTable.className = "weekly-calendar";

    // Table header for weekdays
    const headerRow = document.createElement("tr");
    weekDays.forEach((day, index) => {
        const dayCell = document.createElement("th");
        dayCell.textContent = day;

        // Highlight current day
        if (index === currentDay) {
            dayCell.classList.add("highlight-day");
        }

        headerRow.appendChild(dayCell);
    });

    calendarTable.appendChild(headerRow);

    // Table row for dates (assumes current week based on the current day)
    const dateRow = document.createElement("tr");
    weekDays.forEach((_, index) => {
        const dateCell = document.createElement("td");
        const diff = index - currentDay; // Difference from the current day
        const date = new Date(currentDate);
        date.setDate(todayDate + diff); // Adjust to correct date for the week
        dateCell.textContent = date.getDate();

        // Highlight current day
        if (index === currentDay) {
            dateCell.classList.add("highlight-date");
        }

        dateRow.appendChild(dateCell);
    });

    calendarTable.appendChild(dateRow);

    // Append calendar to the section
    calendar.appendChild(calendarTable);
}

// Initialize Weekly Calendar on Page Load
window.onload = function () {
    startAutoTimer(); // Auto Timer
    renderTimetable(); // Render Timetable
    renderNotes(); // Render Notes
    renderWeeklyCalendar(); // Render Calendar
};
// Array of Motivational Quotes
const motivationalQuotes = [
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Education is the most powerful weapon which you can use to change the world.",
    "The best way to predict your future is to create it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "Strive for progress, not perfection.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Believe you can and you're halfway there.",
    "Learning is never done without errors and defeat.",
    "The expert in anything was once a beginner."
];

// Show Pop-Up with Motivational Quote
function showWelcomePopup() {
    const popup = document.getElementById("welcome-popup");
    const quoteElement = document.getElementById("motivational-quote");

    // Generate a random quote
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    quoteElement.textContent = randomQuote;

    // Show the popup
    popup.style.display = "flex";
}

// Close Pop-Up
function closeWelcomePopup() {
    const popup = document.getElementById("welcome-popup");
    popup.style.display = "none";
}

// Initialize Welcome Popup on Page Load
window.onload = function () {
    showWelcomePopup();
    startAutoTimer(); // Auto Timer
    renderTimetable(); // Render Timetable
    renderNotes(); // Render Notes
    renderWeeklyCalendar(); // Render Calendar
};

// Document Upload and Viewer Variables
const documentUpload = document.getElementById("document-upload");
const documentViewer = document.getElementById("document-viewer");
const viewDocumentButton = document.getElementById("view-document");
const clearDocumentButton = document.getElementById("clear-document");

// Handle File Upload and Display
documentUpload.addEventListener("change", () => {
    const file = documentUpload.files[0];

    if (!file) {
        documentViewer.innerHTML = "<p>No document uploaded</p>";
        viewDocumentButton.style.display = "none";
        return;
    }

    // Supported file handling
    const fileType = file.type;
    const reader = new FileReader();

    // Handle PDF Files
    if (fileType === "application/pdf") {
        reader.onload = function (e) {
            documentViewer.innerHTML = `
                <embed src="${e.target.result}" type="application/pdf" width="100%" height="300px">
            `;
        };
        reader.readAsDataURL(file);
        viewDocumentButton.style.display = "inline-block"; // Show the View Document button
    }
    // Handle Text Files
    else if (fileType === "text/plain") {
        reader.onload = function (e) {
            documentViewer.innerHTML = `<pre>${e.target.result}</pre>`;
        };
        reader.readAsText(file);
        viewDocumentButton.style.display = "inline-block"; // Show the View Document button
    }
    // Handle Unsupported Files
    else {
        documentViewer.innerHTML = "<p>Unsupported file format. Please upload a PDF or TXT file.</p>";
        viewDocumentButton.style.display = "none"; // Hide the View Document button
    }
});

// Handle View Document Button
viewDocumentButton.addEventListener("click", () => {
    alert("The document is now visible in the viewer!");
});

// Handle Clear Document Button
clearDocumentButton.addEventListener("click", () => {
    documentViewer.innerHTML = "<p>No document uploaded</p>";
    documentUpload.value = ""; // Clear the file input field
    viewDocumentButton.style.display = "none"; // Hide the View Document button
});

// Render Notes with Edit Functionality
function renderNotes() {
    notesList.innerHTML = ""; // Clear existing notes

    // Loop through all saved notes
    notesData.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note-card");

        // Note Content
        const noteContent = document.createElement("pre");
        noteContent.textContent = note.content;

        // Edit Button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-note");

        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-note");

        // Append Content and Buttons
        noteDiv.appendChild(noteContent);
        noteDiv.appendChild(editButton);
        noteDiv.appendChild(deleteButton);

        // Edit Note Functionality
        editButton.addEventListener("click", () => {
            // Switch to editable mode
            const editArea = document.createElement("textarea");
            editArea.classList.add("edit-area");
            editArea.value = note.content;

            // Save and Cancel Buttons
            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.classList.add("save-edit");

            const cancelButton = document.createElement("button");
            cancelButton.textContent = "Cancel";
            cancelButton.classList.add("cancel-edit");

            // Replace Note Content with Edit Area
            noteDiv.innerHTML = ""; // Clear current note
            noteDiv.appendChild(editArea);
            noteDiv.appendChild(saveButton);
            noteDiv.appendChild(cancelButton);

            // Save Changes
            saveButton.addEventListener("click", () => {
                notesData[index].content = editArea.value; // Update note content
                localStorage.setItem("notes", JSON.stringify(notesData)); // Save to storage
                renderNotes(); // Re-render notes
            });

            // Cancel Edit
            cancelButton.addEventListener("click", () => {
                renderNotes(); // Re-render notes without saving changes
            });
        });

        // Delete Note Functionality
        deleteButton.addEventListener("click", () => {
            notesData.splice(index, 1); // Remove note from data
            localStorage.setItem("notes", JSON.stringify(notesData)); // Update local storage
            renderNotes(); // Re-render notes
        });

        notesList.appendChild(noteDiv); // Add note card to list
    });
const noteInput = document.getElementById("note-input");
const saveNoteBtn = document.getElementById("save-note-btn");
const clearNoteBtn = document.getElementById("clear-note-btn");
const notesContainer = document.getElementById("notes-container");
const notePopup = document.getElementById("note-popup");
const popupContent = document.getElementById("popup-content");
const fullNoteContent = document.getElementById("full-note-content");
const closePopupBtn = document.getElementById("close-popup-btn");

let notes = []; // Store all notes

// Save Note
saveNoteBtn.addEventListener("click", () => {
    const noteText = noteInput.value.trim();
    if (noteText === "") {
        alert("Please write something before saving.");
        return;
    }

    notes.push(noteText);
    renderNotes();
    noteInput.value = ""; // Clear the input field
});

// Clear Input
clearNoteBtn.addEventListener("click", () => {
    noteInput.value = "";
});

// Render Notes
function renderNotes() {
    notesContainer.innerHTML = ""; // Clear previous notes
    notes.forEach((note, index) => {
        const noteCard = document.createElement("div");
        noteCard.classList.add("note-card");

        // Display only the first 3 lines
        const preview = note.split("\n").slice(0, 3).join("\n");
        noteCard.innerHTML = `<p>${preview}</p>`;

        // Add Click Event to Open Full Note
        noteCard.addEventListener("click", () => openNotePopup(note));

        notesContainer.appendChild(noteCard);
    });
}

// Open Full-Screen Note Pop-Up
function openNotePopup(note) {
    fullNoteContent.textContent = note; // Set full note content
    notePopup.style.display = "flex"; // Show the pop-up
}

// Close Pop-Up
closePopupBtn.addEventListener("click", () => {
    notePopup.style.display = "none"; // Hide the pop-up
});


// Class Schedule JavaScript
const timetable = document.getElementById('lecture-timetable').getElementsByTagName('tbody')[0];
const addRowBtn = document.getElementById('add-row-btn');
const editBtn = document.getElementById('edit-btn');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');

let rowCount = 0; // To keep track of the number of rows
let isEditable = false; // To track edit mode

// Function to Add a New Row
addRowBtn.addEventListener('click', () => {
    rowCount++;
    const newRow = timetable.insertRow();
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td><input type="text" placeholder="Day" disabled></td>
        <td><input type="text" placeholder="Course" disabled></td>
        <td><input type="text" placeholder="Time" disabled></td>
        <td><input type="text" placeholder="Venue" disabled></td>
        <td><button class="delete-row-btn">Delete</button></td>
    `;

    // Add Delete Row Functionality
    const deleteRowBtn = newRow.querySelector('.delete-row-btn');
    deleteRowBtn.addEventListener('click', () => deleteRow(newRow));
});

// Function to Enable Edit Mode
editBtn.addEventListener('click', () => {
    if (!isEditable) {
        const confirmEdit = confirm('Are you sure you want to enable edit mode?');
        if (confirmEdit) {
            enableEditing();
            alert('Edit mode enabled. You can now modify the timetable.');
        }
    } else {
        alert('Edit mode is already enabled.');
    }
});

// Enable Editing for All Rows
function enableEditing() {
    isEditable = true;
    saveBtn.disabled = false;
    const inputs = timetable.querySelectorAll('input');
    inputs.forEach(input => {
        input.removeAttribute('disabled');
    });
}

// Save Changes and Disable Editing
saveBtn.addEventListener('click', () => {
    disableEditing();
    alert('Changes saved successfully!');
});

// Disable Editing
function disableEditing() {
    isEditable = false;
    saveBtn.disabled = true;
    const inputs = timetable.querySelectorAll('input');
    inputs.forEach(input => {
        input.setAttribute('disabled', 'disabled');
    });
}

// Function to Clear All Rows
clearBtn.addEventListener('click', () => {
    const confirmClear = confirm('Are you sure you want to clear all rows?');
    if (confirmClear) {
        timetable.innerHTML = '';
        rowCount = 0;
    }
});

// Function to Delete a Specific Row
function deleteRow(row) {
    row.remove();
    rowCount--;
}

// Initialize Quill Text Editor
const quill = new Quill('#editor-container', {
    theme: 'snow',
    placeholder: 'Write your note here...',
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline'], // Formatting options
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Lists
            ['image'], // Image upload
            ['clean'] // Clear formatting
        ]
    }
});

const saveNoteBtn = document.getElementById("save-note-btn");
const clearEditorBtn = document.getElementById("clear-editor-btn");
const notesContainer = document.getElementById("notes-container");
const notePopup = document.getElementById("note-popup");
const fullNoteContent = document.getElementById("full-note-content");
const closePopupBtn = document.getElementById("close-popup-btn");

let notes = []; // Store all notes

// Save Note
saveNoteBtn.addEventListener("click", () => {
    const noteHtml = quill.root.innerHTML.trim();
    if (noteHtml === "<p><br></p>") {
        alert("Please write something before saving.");
        return;
    }

    notes.push(noteHtml);
    renderNotes();
    quill.root.innerHTML = ""; // Clear the editor after saving
});

// Clear Editor
clearEditorBtn.addEventListener("click", () => {
    quill.root.innerHTML = "";
});

// Render Notes
function renderNotes() {
    notesContainer.innerHTML = ""; // Clear previous notes
    notes.forEach((note, index) => {
        const noteCard = document.createElement("div");
        noteCard.classList.add("note-card");

        // Display only the first 3 lines
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = note;
        const preview = tempDiv.textContent.split("\n").slice(0, 3).join("\n");
        noteCard.innerHTML = `<p>${preview}</p>`;

        // Add Click Event to Open Full Note
        noteCard.addEventListener("click", () => openNotePopup(note));

        notesContainer.appendChild(noteCard);
    });
}

// Open Full-Screen Note Pop-Up
function openNotePopup(note) {
    fullNoteContent.innerHTML = note; // Set full note content
    notePopup.style.display = "flex"; // Show the pop-up
}

// Close Pop-Up
closePopupBtn.addEventListener("click", () => {
    notePopup.style.display = "none"; // Hide the pop-up
});
