import React, {useEffect, useRef, useState} from 'react';

let a = null; // 2
const NAME = 'USER_NAME';

// hook

function App() {
  const [counter, setCounter] = useState(0); // [variable, updFunc]
  const [winnerName, setWinnerName] = useState(''); // [variable, updFunc]

  const increment = (event) => {
    setCounter(counter + 1);
    clearTimeout(timerId.current);
  }

  const setName = (event) => {
    setWinnerName(event.target.value);
    name.current = event.target.value;
  };

  const ref = useRef(); // {current: null}
  const name = useRef(''); // {current: null}
  const timerId = useRef(''); // {current: null}

  console.log(ref.current && ref.current.value);
  console.log(name.current);
  

  // mount + update
  useEffect(() => {
    console.log('counter', counter);
      timerId.current = setTimeout(() => {
  
      }, 100000);
    

    // prev counter change
    return () => {
      clearTimeout(timerId.current);
    }
  }, [counter]);

  // mount
  useEffect(() => {

    //unmount
    return () => {
      console.log('unmount')
    }
  }, [])

  // unmount
  useEffect(() => {
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className="App">
      <h1>
        {counter}
      </h1>
      <h2>
        {winnerName}
      </h2>
      <button onClick={increment}>
        inc
      </button>
      <div>
        <input ref={ref} onChange={setName} />
      </div>
    </div>
  );
}

export default App;
