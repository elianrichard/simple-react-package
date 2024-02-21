import React from "react";

export default function useNewState() {
  const [state, setState] = React.useState(0);

  return {
    state,
    setState,
  };
}
