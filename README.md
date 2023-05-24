Note-Taking Application
The Note-Taking Application is a web-based tool that allows users to create, save, and manage notes. It provides a simple and intuitive interface for organizing and retrieving information efficiently.
![Alt text](../../../Downloads/Note%20Taker.gif)

[Note Taker](https://github.com/MichaelFormico/Homework-11/assets/120405075/7352edc6-0140-4474-9cf8-bede0ef423c9)
Features!

Landing page with a link to the notes page
Notes page displaying existing notes in the left-hand column
Empty fields to enter a new note's title and text in the right-hand column
Save icon for saving a new note
Saved notes appear in the left-hand column
Clicking on an existing note displays it in the right-hand column
Write icon for creating a new note
Technologies Used
The Note-Taking Application utilizes the following technologies:

Front-end: HTML, CSS, JavaScript
Back-end: Node.js
Database: db.json file
Server: Express.js
File System Module: fs (for reading/writing to the db.json file)
Unique ID Generation: uuid or shortid npm package (for generating unique IDs for notes)
Installation
To run the Note-Taking Application locally, follow these steps:

Clone the repository: git clone <repository-url>
Navigate to the project directory: cd note-taking-application
Install the dependencies: npm install
Start the server: node server.js
Open your web browser and visit http://localhost:PORT (replace PORT with the appropriate port number)
API Routes
The following API routes are available:

GET /api/notes - Retrieves all saved notes as JSON.
POST /api/notes - Saves a new note. Expects the note to be provided in the request body.
HTML Routes
The following HTML routes are available:

GET /notes - Displays the notes page.
GET * - Displays the landing page. Used as a catch-all route for unspecified routes.
File Structure
The project structure is organized as follows:

arduino
Copy code
note-taking-application/
  ├── public/
  │   ├── assets/
  │   │   └── styles.css
  │   └── index.html
  ├── server.js
  ├── db.json
  └── README.md
The public directory contains the front-end assets, including the CSS file and the index.html file.
The server.js file is responsible for setting up the Express server, API routes, and HTML routes.
The db.json file stores the notes data.
Contribution
Contributions to the Note-Taking Application are welcome! If you find any issues or have suggestions for improvement, please submit an issue or a pull request.

License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.

Contact
For any questions or inquiries, please contact [Your Name] at [your-email@example.com].
