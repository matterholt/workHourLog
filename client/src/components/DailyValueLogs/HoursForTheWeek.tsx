interface Props {
  hoursWorkedWeek: number;
}

const HoursForTheWeek: React.FunctionComponent<Props> = ({hoursWorkedWeek})=> {
  return <h2>Weekly Hours : {hoursWorkedWeek}</h2>;
}

export default HoursForTheWeek;