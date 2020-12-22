import "./App.css";

import Header from "./components/General/Header";

import WeeklyLogsContainer from "./components/DailyLogs/WeeklyLogsContainer";


const Main = () => {
  return (
    <main>
      <WeeklyLogsContainer />
    </main>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
