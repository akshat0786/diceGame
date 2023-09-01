import React, { useState } from "react";
import styled from "styled-components";
const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice">
        <img
          onClick={roleDice}
          src={`/images/dice_${currentDice}.png`}
          alt="dice 1"
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 24px;
  }
`;
