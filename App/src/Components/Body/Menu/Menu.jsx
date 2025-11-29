import { useEffect } from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Menu({ closeMenu }) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <HamMenu>
      <div className="top">
        <ImCross className="close" onClick={closeMenu} />
      </div>

      <h1>Blug Innovation</h1>

      <ul>
        <li><a>Nepal</a></li>
        <li><a>Startup</a></li>
        <li><a>Innovation</a></li>
        <li><a>Finance & Economics</a></li>
        <li><a>Geopolitics</a></li>
      </ul>

      <div className="socials">
        <FaFacebookF />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </HamMenu>
  );
}

export default Menu;

const HamMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 280px;
  height: 100vh;
  max-height: 100vh;       /* ensures no overflow beyond screen */
  overflow-y: auto;        /* scrolls internally on small devices */
  
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);

  padding: 25px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 15px rgba(0,0,0,0.1);
  animation: slideIn 0.35s ease-in-out;
  z-index: 999;

  @keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  /* FULL SCREEN for very small phones */
  @media (max-width: 350px) {
    width: 100vw;
  }
  
  /* Slightly larger width on tablets */
  @media (min-width: 480px) and (max-width: 768px) {
    width: 320px;
  }

  .top {
    display: flex;
    justify-content: flex-end;
  }

  .close {
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(1.2);
      color: red;
    }
  }

  h1 {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    margin: 25px 0 10px;
  }

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;

    @media (max-height: 600px) {
      justify-content: flex-start;
      margin-top: 10px;
    }
  }

  a {
    text-decoration: none;
    font-size: 18px;
    color: #222;
    transition: 0.2s;

    &:hover {
      padding-left: 8px;
      color: #d90429;
    }
  }
  
  li {
    list-style: none;
  }
  li:hover {
    cursor: pointer;
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 50px;
    font-size: 24px;
    margin-bottom: 25px;
    transition: hover 0.2s ease-in-out;

    svg:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
    svg:nth-child(1):hover { color: #1877F2; }
    svg:nth-child(2):hover { color: #ED0D32; }
    svg:nth-child(3):hover { color: #000; }
  }
`;
