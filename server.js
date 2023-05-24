const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the static folder
app.use(express.static('public'));

// Path to the db.json file
const dbFilePath = path.join(__dirname, 'db.json');

// Helper function to read notes from the db.json file
const readNotesFromFile = () => {
  try {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.log('Error reading notes from file:', error);
    return [];
  }
};

// Helper function to write notes to the db.json file
const writeNotesToFile = (notes) => {
  try {
    fs.writeFileSync(dbFilePath, JSON.stringify(notes), 'utf8');
  } catch (error) {
    console.log('Error writing notes to file:', error);
  }
};

// API route to get all notes
app.get('/api/notes', (req, res) => {
  const notes = readNotesFromFile();
  res.json(notes);
});

// API route to save a new note
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const notes = readNotesFromFile();

  // Generate a unique ID for the new note
  newNote.id = Date.now().toString();

  // Add the new note to the array
  notes.push(newNote);

  // Write the updated notes to the file
  writeNotesToFile(notes);

  // Send the new note back to the client
  res.json(newNote);
});

// HTML route to serve notes.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// HTML route to serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});