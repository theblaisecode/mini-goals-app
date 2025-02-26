import { useState } from "react";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import { CourseGoalArr } from "./types/types.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

function App() {
  const [goals, setGoals] = useState<CourseGoalArr[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    const newGoal: CourseGoalArr = {
      id: Math.random(),
      title: goal,
      description: summary,
    };

    setGoals((prevGoals) => [newGoal, ...prevGoals]);
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      {/* <CourseGoal
        title="Learn React + TS"
        description="Learn it from the ground up!"
      /> */}

      {/* ------------------------------------------------ */}
      {/* <Header source={goalsImg} imgAlt="A list of goals" >
        <h1>Your Course Goals</h1>
      </Header> */}

      <Header image={{ source: goalsImg, imgAlt: "A list of goals" }}>
        <h1>Your Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
