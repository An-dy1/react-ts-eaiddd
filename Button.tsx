import * as React from 'react';
import './style.css';

// useState() results:
// getter
// setter

// const [currentStateValue, functionToSetNewValue] = useState(initialState)

export default function Button(props) {
  return (
    <button onClick={() => props.onClickHandler()}>
      +{props.incrementAmount}
    </button>
  );
}
