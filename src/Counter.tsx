import React, { useState, useRef, useEffect } from 'react';

// const array: Array<number> = [1, 2, 3];
// const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
// array[0] = 11;
// readonlyArray[0] = 11;

const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    //setValue((prevState) => prevState + 1);
    setValue(value + 1);
  };

  const decrement = () => {
    //setValue((prevState) => prevState - 1);
    setValue(value - 1);
  };

  const renderTimes = useRef<number>(0);

  useEffect(() => {
    renderTimes.current += 1;
    console.log('renderTimes:', renderTimes.current);
  });

  const ref = useRef<HTMLInputElement>(null!);

  const focusInput = () => {
    // const current = ref.current;
    // if (current != null) current.focus();
    // ref.current?.focus();
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-renderd {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click Me!</button>
    </div>
  );
};

export default Counter;
