import * as React from 'react';
import './style.css';

import Button from './Button';
import Display from './Display';

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  // passing props as an object vs inline in the component (below)
  const displayProps = {
    message: counter,
  };

  const buttonProps = {
    onClickHandler: incrementCounter,
  };

  return (
    <div>
      <h1>My Counter App</h1>
      <Display message={counter} />
      <Button clickHandler={incrementCounter} />

      {/* <Display {...displayProps} />
      <Button {...buttonProps} /> */}
    </div>
  );
}
