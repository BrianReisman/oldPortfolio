//https://codepen.io/erdemuslu/pen/BeXPZP 

import styled from "styled-components";

const StyledToggle = styled.div`
  display: flex;
  justify-content: flex-end;
  .toggle input {
    display: none;
    height: 40px;
    width: 40px;
  }
  .toggle {
    position: relative; /*children positioned relative label*/
    display: inline-block;
    width: 50px;
    height: 25px;
    transform-origin: 20% center;
  }
  .slider {
    background-color: black;
    border: 2px solid black;
    border-radius: 50px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    transform-origin: 25% center;
    /* transition: all .1s; */
  }
  .slider:before {
    content: "";
    width: 18px;
    height: 18px;
    background-color: white;
    border-radius: 50px;
    position: absolute;
    top: 1.5px;
    left: 2px;
  }
  /* input:checked + .slider:before { //I think this is redundant with nested pseduo selector below */
    /* transform: translateX(21px); */
    /* transition-delay: none; */
  /* } */
  input:checked + .slider {
    transform: rotate(90deg);
    /* background-color: white; */
    &:before {
    /* background-color: black; */
      transform: translateX(21px);
      transition: 0.6s cubic-bezier(0.895, 0.03, 0.685, 0.22) 0.2s;
    /* &:before { */
    /* background-color: black; */
    }
  }
`;

export default StyledToggle;
