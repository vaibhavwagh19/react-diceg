import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="./images/dices.png" alt="dices" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle} >Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    margin: 0 auto;
    height: 100vh;
    padding: 0 18px;

    img {
    max-width: 100%;
    height: auto; 
    }

    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        h1{
            font-size: 5rem;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;

        .content {
            h1 {
                font-size: 3rem;
            }
        }
    }

    @media (max-width: 480px) {
        .content {
            h1 {
                font-size: 2.5rem;
            }
        }
    }
`

