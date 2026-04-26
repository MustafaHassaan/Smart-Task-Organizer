Project Name: Smart Task Organizer

Tech Stack: 
- Svelte 5 (Vite)
- Vanilla CSS (Modern Premium Design)
- LocalStorage for persistence

How to Download and Run:

[Option A: For Reviewers (Quick Run)]
1. Download and extract the project ZIP file.
2. Navigate to the "export" folder.
3. Open "index.html" in your browser. 
   Note: For best results, use a local server like VS Code "Live Server" or run 'npx serve' in this folder to ensure all assets load correctly.

[Option B: For Developers (Development Mode)]
1. Clone the repository: git clone https://github.com/MustafaHassaan/Smart-Task-Organizer.git
2. Navigate to the source folder: cd source
3. Install dependencies: npm install
4. Run the development server: npm run dev
5. Open the link provided in your terminal (usually http://localhost:5173).

Features:
- [Data Display]: Premium list view for all tasks with reactive updates.
- [Add Task]: Form with validation and auto-clear functionality.
- [Edit Task]: Full inline editing for Title, Category, and Priority.
- [Persistence]: Automatic saving to LocalStorage (No database required).
- [Filtering]: Quick filters for All, Active, and Completed tasks.
- [UI/UX]: Modern "Glassmorphism" design with smooth Svelte transitions.

Notes:
- Why Svelte? It offers the best performance for Mini Apps with a very small footprint.
- Why LocalStorage? It provides persistent storage without the need for a backend API, making it ideal for a standalone task manager.
- The design is fully responsive and optimized for both dark and light environments.
