import { topHeader } from './style/topHeader.style'

import WeeklyTotalHrs from '../TotalHours/WeeklyTotalHrs'

const HeaderTop = () => {
  return (
    <header css={topHeader}>
      <h1>Weekly Hour Log</h1>
      <WeeklyTotalHrs />
    </header>
  );
};

export default HeaderTop;