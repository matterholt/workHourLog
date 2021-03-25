/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";


interface Props {
  hoursWorkedWeek: number;
}


function hoursIndicator(hours: number){
  if(hours < 40){
    return 'red'
  }else if(hours === 40){
    return 'yellow'
  }else
    return 'green'

}

const HoursForTheWeek = ({ hoursWorkedWeek }: {hoursWorkedWeek:number})=> {
  
  const colorHours= hoursIndicator(hoursWorkedWeek)

  return (
  
  <h2 css={css`display:flex; align-items:center;`}>Weekly Hours : 
    <span 
    css={css` 
    color: ${colorHours};
    font-size: 3rem;
    margin: 5px;
    padding:12px;

`}>
{hoursWorkedWeek}</span> </h2>)
}

export default HoursForTheWeek;