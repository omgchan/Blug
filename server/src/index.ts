import express from "express";
import path from "path";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

const blogs = [
  {
    id: 1,
    title: "Exploring Nepal: Hidden Treasures",
    author: "Chandan Vomjan",
    category: "Travel",
    date: "2025-11-17",
    image: "/images/nepal.jpg",
    content:
      "Nepal is a land of mountains, rivers, and rich culture. In this article, we explore hidden gems and local experiences that you must try when visiting."
  },
  {
    id: 2,
    title: "Top 10 Startup Ideas in 2025",
    author: "Chandan Vomjan",
    category: "Startup",
    date: "2025-11-16",
    image: "/images/startup.png",
    content:
      "The best startups solve real-world problems. Here are ten innovative startup ideas that can change industries in 2025."
  },
  {
    id: 3,
    title: "Understanding Blockchain and DeFi",
    author: "Chandan Vomjan",
    category: "Finance&Economics",
    date: "2025-11-15",
    image: "/images/blockchain.jpg",
    content:
      "Blockchain technology is revolutionizing finance. This article explains decentralized finance, tokens, and how blockchain can give more control to individuals."
  },
  {
    id: 4,
    title: "Nepal’s Geopolitical Landscape",
    author: "Chandan Vomjan",
    category: "Geopolitics",
    date: "2025-11-14",
    image: "/images/geopolitics.jpg",
    content:
      "Nepal's position between major powers influences trade, culture, and diplomacy."
  },
  {
    id: 5,
    title: "Innovations Transforming Education",
    author: "Chandan Vomjan",
    category: "Innovations",
    date: "2025-11-13",
    image: "/images/education.png",
    content:
      "From AI-powered learning platforms to community-driven initiatives, these innovations are reshaping how education is delivered."
  },
  {
    id: 6,
    title: "Sustainable Travel in the Himalayas",
    author: "Chandan Vomjan",
    category: "Travel",
    date: "2025-11-12",
    image: "/images/himalayas.jpg",
    content:
      "Tips for eco-friendly trekking, local engagement, and reducing environmental impact."
  }
];

app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
