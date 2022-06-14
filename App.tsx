import * as React from 'react';
import './style.css';

import Button from './Button';
import Display from './Display';

export default function App() {
  const [counter, setCounter] = React.useState(0);

  const [counterOne, setCounterOne] = React.useState(0);
  const incrementCounterOne = () => setCounterOne(counterOne + 1);

  const [counterTwo, setCounterTwo] = React.useState(0);
  const incrementCounterTwo = () => setCounterTwo(counterTwo + 2);

  // passing props as an object vs inline in the component (below)
  const displayPropsOne = {
    message: counterOne,
  };

  const buttonByOneProps = {
    incrementAmount: 1,
    onClickHandler: incrementCounterOne,
  };

  const buttonByTwoProps = {
    incrementAmount: 2,
    onClickHandler: incrementCounterTwo,
  };

  return (
    <div>
      <h1>My Counter App</h1>
      <Display message={counterOne} />
      <Button {...buttonByOneProps} />

      <Display message={counterTwo} />
      <Button {...buttonByTwoProps} />
      {/* <Display {...displayProps} />
       */}
    </div>
  );
}
