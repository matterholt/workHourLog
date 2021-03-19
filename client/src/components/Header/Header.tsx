
import HoursForTheWeek from "./HoursForTheWeek"



// const HeadTag = styled.header`
// background-color: #5a626c;
// display:flex;
// justify-content: space-around;
// align-items: center;
// `;

const Header = ({hoursWorkedWeek }: {hoursWorkedWeek:number}) => {
    return (
        <header>
            <h1>Weekly Hour Log</h1>
            <HoursForTheWeek hoursWorkedWeek={hoursWorkedWeek}/>
        </header>
        
    )
}
export default Header