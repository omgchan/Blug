import React from 'react'
import { PiGreaterThanBold } from "react-icons/pi";
import styled from 'styled-components';

function Button() {
  return (
    <Buton>
      READ MORE 
      <PiGreaterThanBold  className='right'/>
    </Buton>
  )
}

export default Button

const Buton = styled.button`
  padding: 10px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &:hover {
    cursor: pointer;
    color: red;
    transition: color 0.2s ease-in-out;
  }

  .right {
    margin-left: 10px;
    
  }
    
`
