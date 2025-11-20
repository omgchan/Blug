import React from 'react'
import styled from 'styled-components'
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <Futer>
      <UpperFooter>
        <h2><i>Read deeply. Think freely. Create boldly.</i></h2>
      </UpperFooter>

      <MidFooter>
        <div className="subscribe">
          <h3>SUBSCRIBE</h3>
          <div className="inputBar">
            <input type='email' placeholder='Email Address' />
            <button type='submit'>SUBMIT</button>
          </div>
        </div>

        <div className="about">
          <h4>BLUG</h4>
          <p><a href="">About</a></p>
          <p><a href="">Reuse Our Content</a></p>
          <p><a href="">Privacy Policy</a></p>
        </div>

        <div className="information">
          <h4>INFORMATION</h4>
          <p><a href="">Donate Us</a></p>
          <p><a href="">Write For Us</a></p>
          <p><a href="">Help</a></p>
        </div>

        <div className="socials">
          <h4>CONNECT</h4>
          <p><a href="">Facebook</a></p>
          <p><a href="">Instagram</a></p>
          <p><a href="">Linkedin</a></p>
        </div>
      </MidFooter>

      <BottomFooter>
        <div className='copyright'>
          <MdCopyright /> 
          <p>2025 Blug Innovations</p>
        </div>
        <div>
          <a href=''><p>Chandan Vomjan</p></a>
        </div>
      </BottomFooter>
    </Futer>
  )
}

export default Footer;


// --------------------------------
// STYLES
// --------------------------------

const Futer = styled.footer`
  background: #fff;
  width: 100%;
`;

// Upper Section
const UpperFooter = styled.div`
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;   
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  h2 {
    text-align: center;
    padding: 0 20px;
    font-size: clamp(16px, 2vw, 22px);
    
  }
  h2:hover {
    color: red;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
  }
`;

// Middle Section (Main Responsive Grid)
const MidFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 30px 80px;
  gap: 40px;
  min-height: 150px;

  @media (max-width: 1024px) {
    padding: 30px 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
    gap: 25px;
  }

  p {
    line-height: 1.35;
  }

  a {
    text-decoration: none;
    color: #242323f4;
    margin: 5px 0;
    &:hover { color: #E90C41; }
  }

  h4 { margin-bottom: 8px; }

  .subscribe {
    width: 35%;
    min-width: 260px;

    @media (max-width: 768px) {
      width: 100%;
    }

    h3 { margin: 10px 0; }

    .inputBar {
      position: relative;
      width: 100%;
      max-width: 300px;

      input{
        width: 100%;
        height: 35px;
        padding: 8px 12px;
        padding-right: 90px;  
        border: 2px solid black;
        outline: none;
        &:focus {
          border-color: #555;
          box-shadow: 0 0 6px rgba(0,0,0,0.2);
        }
      }

      button {
        position: absolute;
        top: 50%;
        right: 2px;
        transform: translateY(-50%);
        height: 34px;
        padding: 0 14px;
        background: black;
        color: white;
        border: none;
        cursor: pointer;
        &:hover { background: #333; }
      }
    }
  }

  .about, .information, .socials {
    width: 15%;
    min-width: 150px;
    padding-left: 8px;
    border-left: 1px solid black;

    @media (max-width: 768px) {
      width: 100%;
      border-left: none;
      padding-left: 0;
    }
  }
`;


// Bottom Section
const BottomFooter = styled.div`
  height: 75px;  
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  align-items: center;
  border-top: 1px solid black;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    height: auto;
    padding: 20px;
    text-align: center;
  }

  .copyright {
    display: flex;
    gap: 10px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
