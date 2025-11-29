import styled from "styled-components"
import Card from "./Card"
import { BASE_URL } from "../../../App"
import HeroMainCard from "./MainCard";

function Blog({data, changeBlogOpen}) {

  const randomIndex = data?.length
  ? Math.floor(Math.random() * data.length)
  : null;

  
  return (
    <Boss>

      <HeroTop>
        <div className="heading">
          <h1>Popular Post</h1>
          <p>Ideas, trends, and inspiration for a brighter future</p>
        </div>

        <div className="main">
          <div className="left">
            {randomIndex !== null && (
              <HeroMainCard 
                isSide={false}
                title={data[randomIndex].title}
                photo={BASE_URL + data[randomIndex].image}
                date={data[randomIndex].date}
                category={data[randomIndex].category}
                onClick={()=>changeBlogOpen(data[randomIndex])}
              />
            )}
          </div>

          <div className="side">
            {data?.length > 1 && (
              <HeroMainCard
                isSide={true}
                 title={data[(randomIndex+1) % data.length].title}
                photo={BASE_URL + data[(randomIndex + 1) % data.length].image}
                date={data[(randomIndex + 1) % data.length].date}
                category={data[(randomIndex + 1) % data.length].category}
                onClick={()=>changeBlogOpen(data[(randomIndex + 1) % data.length])}
              />
            )}

            {data?.length > 2 && (
              <HeroMainCard
                isSide={true}
                title={data[(randomIndex + 2) % data.length].title}
                photo={BASE_URL + data[(randomIndex + 2) % data.length].image}
                date={data[(randomIndex + 2) % data.length].date}
                category={data[(randomIndex + 2) % data.length].category}
                onClick={()=>changeBlogOpen(data[(randomIndex + 2) % data.length])}
              />
            )}
          </div>
        </div>
      </HeroTop>

      <HeroBottom>
        <div className="header">
          <h1>
          LATEST POSTS
          </h1>
          <p>Ideas, trends, and inspiration for a brighter future</p>
        
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
              onClick={()=>changeBlogOpen(value)}


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
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-direction: column;
`
const HeroTop = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 0 20px;

  .heading {
    text-align: center;
    margin-bottom: 10px;
  }

  .heading h1 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 6px;
  }

  .heading p {
    color: #6b7280;
    font-size: 16px;
  }

  /* --- Main Layout --- */
  .main {
    display: flex;
    justify-content: center;
    gap: 40px;         /* FIXES spacing between left + side */
    width: 100%;
  }

  /* BIG CARD COLUMN */
  .left {
    flex: 1.3;
    display: flex;
    justify-content: center;
  }

  /* RIGHT COLUMN WITH TWO SMALL CARDS */
  .side {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;         /* FIXES spacing between two small cards */
    justify-content: flex-start;
  }

  @media (max-width: 900px) {
    .main {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    .side {
      width: 100%;
      flex-direction: column;
    }
  }
`;

  




const HeroBottom = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    margin: 20px;
    p {
      color: grey;
      padding-top: 10px;
    }
    
  }

  .cards {
  display: grid;
  margin: 0 auto;
  
  gap: 35px;
  margin: 35px auto;
  width: 100%;

  /* Desktop: 3 columns */
  grid-template-columns: repeat(3, 1fr);
}

/* Tablets */
@media (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 600px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}

  
`

