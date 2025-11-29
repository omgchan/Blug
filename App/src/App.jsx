import './App.css'
import Footer from './Components/Footer/Footer'
import NavBottom from './Components/Nav/NavBottom'
import NavSection from './Components/Nav/NavSection'
import Blog from './Components/Body/Blog/BlogPage'
import { useEffect, useState } from 'react'
import Menu from './Components/Body/Menu/Menu'
import BlogPost from './Components/BlogPost/BlogPost'

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
          throw new Error("Network error");
        }

        const json = await response.json();   // FIXED
        setData(json);
        
      } 
      catch (error) {
        setIsError(true);
      } 
      finally {
        setLoading(false);
      }
    };

    fetch_data();
  }, []);






  const closeMenu = ()=> {
    setIsOpenMenu(!isOpenMenu)
  }


  const searchData = (text) => {
    setQuery(text);
  }

  const filtered = data?.filter(item =>
  (item.title || "").toLowerCase().includes(query.toLowerCase()) ||
  (item.category || "").toLowerCase().includes(query.toLowerCase()) ||
  (item.description || "").toLowerCase().includes(query.toLowerCase())
);

const changeBlogOpen = (post) => {
  console.log("open post:", post);
  setSelectedPost(post);
  setIsBlogOpen(true);
}

const closeBlog = () => {
  setIsBlogOpen(false);
  setSelectedPost(null);
}

return (
  <>
    {isOpenMenu && <Menu closeMenu={closeMenu} />}
    
    <NavSection searchData={searchData} query={query} closeMenu={closeMenu} />
    <NavBottom searchData={searchData} query={query}/>
    
    {isBlogOpen ? (
      <BlogPost post={selectedPost} closeBlog={closeBlog} />
    ) : (
      <Blog changeBlogOpen={changeBlogOpen} data={filtered} />
    )}
    
    <Footer />
  </>
);
}

export default App