"use client";
import useNewState from "testing-package";

const TestingPage = () => {
  const { state, setState } = useNewState();
  return (
    <div>
      {state}
      <button onClick={() => setState((state) => state + 1)}>Increase</button>
    </div>
  );
};
export default TestingPage;
