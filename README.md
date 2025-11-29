BLUG — React Blog Application

A fully functional blog application built using React + Vite.
It includes dynamic blog rendering, search functionality, clickable blog cards, and a clean UI structure.
The project also includes a server folder for backend or deployment support.

🚀 Features

Interactive Blog List
Displays all posts dynamically from a data source.

Search Functionality
Real-time filtering of posts based on keywords.

Clickable Blog Cards
Each preview opens the full blog content.

Random “Popular Post” (MainCard)
Safely selects and renders a random blog post.

Error-Safe UI
Components handle missing or null data without crashing.

Responsive Layout
Works smoothly across devices.

Client + Server Codebase
Frontend and backend are organized cleanly




🛠️ Installation & Setup
1. Clone the repository
git clone <your-repo-url>
cd BLUG

2. Install dependencies
npm install

3. Start development server
npm run dev


Runs at:

http://localhost:5173

🔍 Search Functionality

Uses controlled inputs

Filters posts based on user query

Category buttons can also trigger filtering

📝 Blog Navigation

Each card opens a detailed blog page.
Safe rendering example:

if (!post) {
  return <h1>Post not found</h1>;
}

🎯 Random Popular Post (MainCard)

Safe random index logic:

const randomIndex = data?.length
  ? Math.floor(Math.random() * data.length)
  : null;
