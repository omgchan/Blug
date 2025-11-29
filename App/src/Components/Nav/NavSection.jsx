import React from "react";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  height: 90px;
  padding: 0 24px;
  
  position: relative;
  margin: auto;
`;

// Left section (menu + search)
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    font-size: 28px;
    cursor: pointer;
  }
  svg:hover {
    color: #d32323eb;
  }

  input {
    width: 120px;
    height: 30px;
    padding: 8px 12px;
    background-color: #f7f7f7;
    border: none;
    outline: none;
    border-radius: 4px;
    transition: width 1s ease;
  }

  input:focus {
    width: 200px;
  }
`;

// Center section (logo)
const Center = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;

  img {
    height: 90px;
    object-fit: contain;
    display: block;
  }
  img:hover {
    cursor: pointer;
  }
`;

// Right section (placeholder or future icons)
const Right = styled.div`
  width: 40px;
  height: 40px;
`;
const Navbar = ({ closeMenu, searchData, query}) => {
  return (
    <NavContainer>
      <Left>
        <MdMenu onClick={closeMenu} />
        <input onChange={(e) => searchData(e.target.value)}
              type="text" 
              value={query}
              placeholder="Search..." />
      </Left>

      <Center>
        <a href="">
          <img src="/images/Blug.svg" alt="Logo" />
        </a>
      </Center>

      <Right />
    </NavContainer>
  );
};

export default Navbar;
