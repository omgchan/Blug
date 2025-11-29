import styled from 'styled-components'
import Button from '../../Button/Button';
import { BASE_URL } from '../../../App';

// ADD onClick TO THE PROPS
function Card({photo, date, category, title, description, onClick}) {
  return (
    <CardComponent onClick={onClick}>
      <div className="image">
        <img src={photo} alt="blog" />
      </div>

      <div className="content">
        <div className="type">
          <span className="category">{category}</span>
          <span className="dot">•</span>
          <span className="date">{date}</span>
        </div>

        <div className="description">
          <h2>{title}</h2>
          <p>
            {description}
          </p>
        </div>

        <div className="footer">
          <Button />
        </div>
      </div>
    </CardComponent>
  )
}

export default Card

const CardComponent = styled.div`
  width: 360px;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  position: relative;
  transition: box-shadow 0.3s ease;
  cursor: pointer;  /* ADD CURSOR POINTER */

  /* Tail shadow effect */
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 50%;
    filter: blur(6px);
    z-index: -1;
  }

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  .image {
    width: 100%;
    height: 220px;
    overflow: hidden;
    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .type {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .category {
    color: #dc2626;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .dot {
    color: #d1d5db;
    font-size: 12px;
  }
  
  .date {
    font-size: 13px;
    color: #9ca3af;
    font-weight: 500;
  }

  .description h2 {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 12px;
    line-height: 1.3;
    transition: color 0.2s ease;

    &:hover {  
      color: #dc2626;
    }
  }

  .description p {
    font-size: 15px;
    color: #6b7280;
    line-height: 1.7;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 12px;
    border-top: 1px solid #e5e7eb;
    margin-top: 4px;
  }
`;