import React from 'react'
import StyledToggle from './StyledToggle';

const Toggle = () => {

  // const clickHandler = (e) =>{
  //   alert('Darkmode coming to a site near you!')
  // }

  return (
    <StyledToggle>
      <label className='toggle' htmlFor='themeToggle'>
        <input type='checkbox' name='' id='themeToggle'/>
        <span className='slider'></span>
      </label>
    </StyledToggle>
  )
}

export default Toggle;