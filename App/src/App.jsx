import './App.css'
import Footer from './Components/Footer/Footer'
import NavBottom from './Components/Nav/NavBottom'
import NavSection from './Components/Nav/NavSection'
import Blog from './Components/Body/Blog/BlogPage'
import { useEffect, useState } from 'react'

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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

  return (
    
    <>
      <NavSection />
      <NavBottom />
      <Blog data={data} />
      <Footer />
    </>
  
  );
}

export default App;
