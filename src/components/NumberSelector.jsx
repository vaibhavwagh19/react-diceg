import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({error,seterror,selectedNumber,setselectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6 ];
    // const [selectedNumber,setselectedNumber] = useState(null) 
    // console.log(selectedNumber);

    const numberSelectorHandler = (value) =>{
        setselectedNumber(value);
        seterror(null)
    }
    
  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>   
        <div className="selflex">
            {
                arrNumber.map((value,i)=>{
                    return(
                        <Box 
                        $isSelected={value === selectedNumber}
                        key={i}
                        onClick={()=> numberSelectorHandler(value)}
                        >{value}
                        </Box>)
                })
            }
        
        </div>      
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;
    width: 100%;

    .error{
        color: red;
        text-align: center;
    }

    .selflex{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight:500;
        text-align: center;
    }

    @media (max-width: 768px) {
        .selflex {
            gap: 12px;
        }
        
        p {
            align-items: center;
        }
    }

    @media (max-width: 480px) {
        gap: 5px;
        align-items: center;

        .selflex {
            gap: 10px;
        }

        p {
            font-size: 16px;
        }
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: ${(props)=> props.$isSelected ? 'black' : 'white'};
    color: ${(props)=> props.$isSelected ? 'white' : 'black'};

    &:hover {
        background-color: ${(props) => (props.$isSelected ? 'black' : '#ddd')};
    }

    @media (max-width: 768px) {
        
        height: 60px;
        width: 60px;
        font-size: 20px;
    }

    @media (max-width: 480px) {
        height: 40px;
        width: 40px;
        font-size: 18px;
    }
`