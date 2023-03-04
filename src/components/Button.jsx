import { useState } from "react";
import styled from "styled-components";

export const Buton = styled.button`
background-color: ${({primary}) => (primary ? "green" : "red")};
width: 200px;
height: 40px;
border-radius: 10px;
cursor: pointer;
border-style: none;
  color: ${({ primarycolor }) => (primarycolor ? "red" : "white")};
`;


