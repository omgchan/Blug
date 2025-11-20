import styled from "styled-components"
import Card from "./Card"
import { BASE_URL } from "../../../App"

function Blog({data}) {
  

  return (
    <Boss>
      <HeroBottom>
        <div className="header">
          <h1>
          LATEST POSTS
        </h1>
        </div>


        <div className="cards">
        {data?.map((value) => {
          const blog_date = value.date;
          const formatted = new Date(blog_date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });

          return (
            <Card
              key={value.id}
              photo={BASE_URL + value.image}
              date={formatted}
              category={value.category}
              title={value.title}
              description={value.content}
            />
          );
        })}
      </div>


      </HeroBottom>


      
        
        
      
    </Boss>
  )
}

export default Blog


const Boss = styled.div`
  
  min-height: 100vh;
  height: auto;
  width: 95%;
  margin: auto;
  padding: 30px 0;


  
  
`


const HeroBottom = styled.div`
  display: flex;
  
  justify-content: center;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: center;
    
  }

  .cards {
  display: grid;
  
  margin: 35px auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;   /* space between cards */
}
  
`

