import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Profile from "./components/Ex1/Profile";
import ListUser from "./components/Ex2/ListUser";
import Counter from "./components/Ex3/Counter";
import RandomNumber from "./components/Ex4/RandomNumber";
import ChangeState from "./components/Ex5/ChangeState";
import DarkMode from "./components/Ex6/DarkMode";
import RegisterEx7 from "./components/Ex7/Register";
import LoginEx7 from "./components/Ex7/Login";
import LoginEx8 from "./components/Ex8/Login";

function App() {
  // Thay đổi giá trị này để hiển thị component của bài tập tương ứng
  // Ví dụ: 1, 2, 3, 4, 5, 6, 7, 8
  const exerciseToDisplay = 1;

  const renderExercise = () => {
    switch (exerciseToDisplay) {
      case 1:
        return <Profile />;
      case 2:
        return <ListUser />;
      case 3:
        return <Counter />;
      case 4:
        return <RandomNumber />;
      case 5:
        return <ChangeState />;
      case 6:
        return <DarkMode />;
      case 7: // Bài 7 có routing
        return (
          <Routes>
            <Route path="/" element={<Navigate to="/register" />} />
            <Route path="/register" element={<RegisterEx7 />} />
            <Route path="/login" element={<LoginEx7 />} />
          </Routes>
        );
      case 8:
        return <LoginEx8 />;
      default:
        return <div>Vui lòng chọn một bài tập.</div>;
    }
  };

  return <>{renderExercise()}</>;
}

export default App;
