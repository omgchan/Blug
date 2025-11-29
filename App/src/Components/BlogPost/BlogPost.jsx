import styled from "styled-components";
import { BASE_URL } from "../../App";

function BlogPost({ post, closeBlog }) {
  if (!post) {
    return (
      <PostWrapper>
        <Container>
          <NotFound>
            <h1>Post not found</h1>
            <BackButton onClick={closeBlog}>← Back to Posts</BackButton>
          </NotFound>
        </Container>
      </PostWrapper>
    );
  }

  const {
    title = "Untitled",
    date = "",
    category = "",
    description = "",
    content = "",
    image = "",
  } = post;

  const short = description || content || "";
  const body = content || description || "";

  const formattedDate = date ? new Date(date).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric"
  }) : date;

  const imgSrc = image ? `${BASE_URL}${image}` : null;

  return (
    <PostWrapper>
      <Container>
        <Header>
          <CategoryBadge>{category || "Uncategorized"}</CategoryBadge>
          <Title>{title}</Title>
          <MetaInfo>
            <MetaItem>4 Min Read</MetaItem>
            {formattedDate && (
              <>
                <MetaDivider>•</MetaDivider>
                <MetaItem>{formattedDate}</MetaItem>
              </>
            )}
          </MetaInfo>
          <BackButton onClick={closeBlog}>← Back to Posts</BackButton>
        </Header>

        {imgSrc && (
          <FeaturedImage>
            <img src={imgSrc} alt={title} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </FeaturedImage>
        )}

        {short && (
          <Excerpt>
            <p>{short}</p>
          </Excerpt>
        )}

        <Content>
          {body.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Content>
      </Container>
    </PostWrapper>
  );
}

export default BlogPost;

const PostWrapper = styled.div`
  min-height: 100vh;
  background: #ffffff;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const Container = styled.article`
  max-width: 800px;
  margin: 0 auto;
  background: #ffffff;
`;

const Header = styled.header`
  padding: 0 0 30px 0;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 0 0 20px 0;
    margin-bottom: 20px;
  }
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: #dc3545;
  color: #ffffff;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 4px 10px;
    margin-bottom: 12px;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  line-height: 1.3;
  color: #000000;
  margin: 0 0 16px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 12px;
    line-height: 1.2;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const MetaItem = styled.span`
  color: #333333;
  font-size: 14px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const MetaDivider = styled.span`
  color: #333333;
  font-size: 14px;
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 6px;
  color: #333333;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    border-color: #999;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 7px 14px;
    font-size: 13px;
  }
`;

const FeaturedImage = styled.div`
  width: 100%;
  margin-bottom: 30px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Excerpt = styled.div`
  padding: 20px;
  background: #f9f9f9;
  border-left: 4px solid #dc3545;
  margin-bottom: 30px;

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #333333;
    margin: 0;
    font-style: italic;
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 20px;

    p {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;

const Content = styled.div`
  padding: 0;

  p {
    font-size: 18px;
    line-height: 1.8;
    color: #333333;
    margin-bottom: 20px;
    font-family: Georgia, 'Times New Roman', serif;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 16px;
      line-height: 1.7;
      margin-bottom: 18px;
    }
  }
`;

const NotFound = styled.div`
  padding: 60px 20px;
  text-align: center;

  h1 {
    font-size: 32px;
    color: #000000;
    margin: 0 0 30px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;

    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
`;