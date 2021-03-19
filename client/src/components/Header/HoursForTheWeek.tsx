/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";


const Indicator = css({
color: "red",
fontSize: "2rem",
margin:"2px",
});






interface Props {
  hoursWorkedWeek: number;
}

const HoursForTheWeek = ({ hoursWorkedWeek }: {hoursWorkedWeek:number})=> {
  return <h2 >Weekly Hours :<span css={Indicator}>{hoursWorkedWeek}</span> </h2>;
}

export default HoursForTheWeek;