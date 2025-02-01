import React from 'react'
import { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styles/Button'
import Rules from './Rules'

const GamePlay = () => {

  const [score,setScore]=useState(0);
  const [selectedNumber,setselectedNumber] = useState(null) 
  const [currentDice,setcurrentDice] = useState(1);

  const [error,seterror] = useState(null);

  const generateRandomDice = (min,max) =>{
    let rno = Math.floor(Math.random() * (max-min) + min); 
    console.log(rno);
    return rno;
  }

  const rollDice = () =>{
    
    if (!selectedNumber) {
      seterror('Please select a number');
      return;
    };
    seterror(null);

    const rno = generateRandomDice(1,7);
    setcurrentDice((prev) => rno);
    
    
    if (selectedNumber === rno){
        setScore((prev) => prev + 1);
      }
      else{
        setScore((prev) => prev - 1);
      }
      
      setselectedNumber(null);
      
  } 

  const resetScore = () => {
    setScore(0);
  }

  const [showRules,setshowRules] = useState()

  return (
    <MainContainer>
        <div className="topSection">
          <TotalScore score={score} />
          <NumberSelector 
          error={error}
          seterror={seterror}
          selectedNumber={selectedNumber} 
          setselectedNumber={setselectedNumber}/>
        </div>
          <RollDice 
          currentDice={currentDice}
          rollDice={rollDice} />

        <div className="btnri">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button
          onClick={() => setshowRules((prev)=>!prev)}
          >
            {showRules ? "Hide" : "Show"} Rules</Button>
        </div>
        {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.main`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px 18px;
  min-height: 100vh;
  align-items: center;

  .topSection{
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    width: 100%;
  }



  .btnri{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; 
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    .topSection {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 20px;
    }

    .btnri {
      flex-direction: row;
      justify-content: center;
      gap: 15px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    .btnri {
      flex-direction: column;
      gap: 8px;
    }
  }

  
`