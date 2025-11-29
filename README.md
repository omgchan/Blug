# BLUG – Modern React Blog Application

A full-featured, responsive blog application built with React + Vite. BLUG provides a seamless reading experience with real-time search, dynamic post rendering, and an elegant UI designed for both readers and content creators.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite)

## 📸 Preview

<img width="996" height="804" alt="image" src="https://github.com/user-attachments/assets/347693ea-98be-4721-a2e6-d1f84e2173bc" />


*Replace with your actual application screenshot or GIF*

## ✨ Features

- **Dynamic Blog Rendering** – Efficient rendering of blog posts with React components
- **Real-time Search** – Instant filtering as you type with controlled input
- **Category Filtering** – Quick navigation through blog categories
- **Detailed Post Views** – Click any card to open full post content
- **Popular Posts** – Randomly featured post on each page load
- **Error-Safe Architecture** – Graceful handling of missing or null data
- **Responsive Design** – Optimized for desktop, tablet, and mobile devices
- **Fast Performance** – Built with Vite for lightning-fast HMR and builds
- **Clean Code Structure** – Organized component hierarchy for maintainability

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/omgchan/BLUG.git

# Navigate to project directory
cd BLUG

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

## 📁 Project Structure

```
BLUG/
│
├── public/                 # Static assets
│
├── src/
│   ├── assets/            # Images, icons, fonts
│   │
│   ├── Components/
│   │   ├── Blog/
│   │   │   ├── Blog.jsx       # Main blog list container
│   │   │   ├── Card.jsx       # Individual blog card
│   │   │   ├── MainCard.jsx   # Featured/popular post card
│   │   │   └── BlogPost.jsx   # Full post view component
│   │   │
│   │   ├── Nav/
│   │   │   └── NavBottom.jsx  # Bottom navigation
│   │   │
│   │   └── ...                # Additional UI components
│   │
│   ├── App.css            # Global application styles
│   ├── App.jsx            # Root component
│   ├── index.css          # Base styles
│   ├── main.jsx           # Application entry point
│   └── index.html         # HTML template
│
├── server/                # Backend/API server (optional)
│   ├── dist/
│   ├── src/
│   └── public/
│
├── package.json
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint rules
└── README.md
```

## 🔍 Key Features Explained

### Search System

The search functionality uses controlled React state to filter posts in real-time:

```jsx
// Real-time filtering as user types
const filteredPosts = posts.filter(post =>
  post.title.toLowerCase().includes(searchTerm.toLowerCase())
);
```

- Instant results without page reload
- Case-insensitive matching
- Search by title, content, or category

### Blog Navigation

Each blog card is interactive and opens detailed post views:

```jsx
// Safe navigation with error handling
if (!post) return <h1>Post not found</h1>;
```

- Click any card to view full post
- Smooth transitions between views
- Fallback UI for missing content

### Random Popular Post

Featured post selection on each page load:

```jsx
const randomIndex = data?.length
  ? Math.floor(Math.random() * data.length)
  : null;
```

- Highlights different posts dynamically
- Increases content discovery
- Optional chaining for safe access

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Run tests (if configured)
npm test
```

## 📦 Building for Production

```bash
# Create optimized production build
npm run build

# Output will be in the 'dist' folder
# Deploy the 'dist' folder to your hosting service
```

### Deployment Options

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Configure in repository settings
- **Custom Server**: Serve `dist` with any static file server

## 🎨 Customization

### Adding New Blog Posts

Create new post objects in your data structure:

```jsx
{
  id: 1,
  title: "Your Post Title",
  excerpt: "Brief description...",
  content: "Full post content...",
  category: "Technology",
  date: "2025-01-15",
  author: "Author Name",
  image: "/path/to/image.jpg"
}
```

### Styling

- Global styles: `src/App.css` and `src/index.css`
- Component-specific styles: Co-located with components
- CSS modules or styled-components can be integrated

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@omgchan](https://github.com/omgchan)
- LinkedIn: [Chandan Vomjan](https://linkedin.com/in/chandanvomjan)
- Email: tylerchan707@gmail.com

## 🙏 Acknowledgments
- React team for the amazing framework
- Vite team for the blazing-fast build tool
- All contributors who help improve this project


⭐ Star this repository if you find it helpful!
