


import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice,rollDice}) => {
    // const [currentDice,setcurrentDice] = useState(1);
    
//
//
//
  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice${currentDice}`} />
        </div>
        <p>Click on Dice to Roll.</p>

    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
        img {
            width: 220px;
            height: auto;
            max-width: 100%;
        }
    }

    @media (max-width: 768px) {
        .dice img {
            width: 160px;
        }
    }

    @media (max-width: 480px) {
        .dice img {
            width: 100px;
        }
    }

`




