import { useEffect, useRef, type FormEvent, useState } from "react";
import { NewGoalProp } from "../types/types.tsx";
import InfoBox from "./InfoBox.tsx";

function NewGoal({ onAddGoal }: NewGoalProp) {
  const goal = useRef<HTMLInputElement | null>(null);
  const summary = useRef<HTMLInputElement | null>(null);
  const [emptyInput, setEmptyInput] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    goal.current?.focus();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const goalTitle = goal.current!.value;
    const goalDescription = summary.current!.value;

    if (goalTitle === "" || goalDescription === "") {
      setEmptyInput(<InfoBox mode="hint">Please enter a goal</InfoBox>);
      console.log(emptyInput);
      return;
    } else {
      setEmptyInput(null);
      onAddGoal(goalTitle, goalDescription);
      e.currentTarget.reset();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="goal">Your goal</label>
          <input type="text" id="goal" name="goal" ref={goal} />
        </p>

        <p>
          <label htmlFor="summary">Short summary</label>
          <input type="text" id="summary" name="summary" ref={summary} />
        </p>

        <p>
          <button type="submit">Add Goal</button>
        </p>
      </form>

      {emptyInput}
    </>
  );
}

export default NewGoal;
