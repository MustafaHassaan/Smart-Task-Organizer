Project Name: Smart Task Organizer

Tech Stack: 
- Svelte 5 (Vite)
- Vanilla CSS (Modern Premium Design)
- LocalStorage for persistence

How to run:
1. Navigate to the "source" folder.
2. Run "npm install" to install dependencies.
3. Run "npm run dev" to start the development server.
4. Alternatively, you can open the files in the "export" folder using any static file server (like VS Code Live Server).

Features:
- Add tasks with Title, Category, and Priority.
- Form validation (prevents empty titles).
- Filter tasks by status (All, Active, Completed).
- Mark tasks as completed or delete them.
- Persistence: All data is saved automatically in your browser's LocalStorage.
- Premium UI: Responsive design with smooth Svelte transitions and animations.

Notes:
- I chose LocalStorage because it's the fastest and most reliable way to persist data in a "Mini App" without requiring a backend server or external API keys.
- The design uses modern CSS features like backdrop-filter and CSS Grid/Flexbox for a premium look and feel.
- Svelte was chosen for its minimal bundle size and reactive performance.
