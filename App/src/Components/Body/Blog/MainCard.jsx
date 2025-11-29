import styled from "styled-components";

function HeroMainCard({ photo, date, category, isSide, title, onClick }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <CardWrapper isSide={isSide} onClick={() => { console.log("clicked!"); onClick?.(); }}>
      <div className="image">
        <img src={photo || "/images/Blog.png"} alt="blog-thumbnail" />
      </div>

      <div className="contents">
        <p className="title">{title}</p>
        <p className="category">{category || "Startup"}</p>
        <p className="date">{formattedDate || "November 11, 2025"}</p>
      </div>
    </CardWrapper>
  );
}


export default HeroMainCard;

const CardWrapper = styled.div`
  width: ${({ isSide }) => (isSide ? "550px" : "540px")};
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  transition: 0.25s ease;
  margin: 24px auto;
  cursor: pointer;
  padding: ${({ isSide }) => (isSide ? "0" : "15px")};

  display: ${({ isSide }) => (isSide ? "flex" : "block")};
  flex-direction: ${({ isSide }) => (isSide ? "row" : "column")};
  gap: ${({ isSide }) => (isSide ? "18px" : "")};

  &:hover {
   
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  .image {
    width: ${({ isSide }) => (isSide ? "40%" : "100%")};
    height: ${({ isSide }) => (isSide ? "170px" : "280px")};
    
    border-radius: ${({ isSide }) => (isSide ? "14px" : "0")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${({ isSide }) => (isSide ? "10px 0" : "0")};
  }

  .title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
    padding: 6px 0;

    &:hover {
      color: #dc2626;
    }
  }

  .category {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    color: #dc2626;
    margin-top: ${({ isSide }) => (isSide ? "0" : "10px")};
  }

  .date {
    font-size: 13px;
    color: #6b7280;
    margin-top: 4px;
  }
`;
