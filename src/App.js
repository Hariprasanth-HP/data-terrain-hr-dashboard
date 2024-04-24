import "./App.css";
import WeekPicker from "./components/Calender";
import Header from "./components/Header/Header";
import MeetingInfo from "./components/MeetingInfo/MeetingInfo";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          height: "79.7%",
          display: "flex",
          alignItems: "center",
          gap: "2%",
        }}
      >
        <Sidebar />
        <div className="main-container">
          <MeetingInfo />
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            marginTop: "6%",
          }}
        >
          <WeekPicker />
        </div>
      </div>
    </div>
  );
}

export default App;
