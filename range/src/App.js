import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

const STEP = 20;

const green = '#0f0';

const Line = styled.div`
  height: 8px;
  width: 300px;
  background-color: ${green};
  position: relative;
  margin: 50px;
  top: ${(props) => props.a === 1 ? '100px': '0'};
  
`;

function App() {
  const isDrowing = useRef();
  const firstCircle = useRef();
  const secondCircle = useRef();
  
  const rangeRef = useRef();

  const max = 100;
  const min = 0;

  const [position, setPosition] = useState({min, max});
  const index = useRef(null);



  useEffect(() => {
    const onMove = (event) => {
      if(isDrowing.current && index.current) {
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const {left, width} = rangeRef.current.getBoundingClientRect();
        const leftOffset = clientX - left;
        const maxPosiblePosition = Math.min(leftOffset, width);
        const minPosiblePosition = Math.round(Math.max(maxPosiblePosition, 0));
  
        // check sign
        const step = minPosiblePosition - position[index.current] > 0 ? STEP : -STEP;
        // make "change value" multiple to step
        const change = Math.round((minPosiblePosition - position[index.current]) / step) * step;
  
        const positionOffset = position[index.current] + change;
  
        // check if "positionOffset" enough for position mutation
        const newPosition =  Math.abs(change) > STEP / 2 ? positionOffset : position[index.current];
  
        // prevent circles interceptions
        if(index.current === 'min' && newPosition < position.max || index.current === 'max' && position.min < newPosition) {
          requestAnimationFrame(() => {
            setPosition({
            ...position, 
            [index.current]: newPosition
          })});
        }
      }
    };
  
    const mouseDown = (event) => {
      isDrowing.current = true;
  
      if(event.target === firstCircle.current) {
        index.current = 'min';
      }
  
      if(event.target === secondCircle.current) {
        index.current = 'max';
      }
    };
  
    const mouseUp = () => {
      isDrowing.current = false;
  
      index.current = null;
    };

    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', mouseUp);

    firstCircle.current.ondragstart = function() {
      return false;
    };
    secondCircle.current.ondragstart = function() {
      return false;
    };

    return () => {
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', mouseUp);
    }
    // TODO: to many operations with listeners, use both refs and state for position ?? 
  }, [position]);

  useEffect(() => {
    firstCircle.current.style.left = position.min + 'px';
    secondCircle.current.style.left = position.max + 'px';
  }, [position]);

  const [a, setA] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setA(0);
    }, 10000)
  }, [])

   return (
    <div>
      <Line a={a} ref={rangeRef}>
        <div className='circle' ref={firstCircle}></div>
        <div className='circle' ref={secondCircle}></div>
      </Line>
      <div>
        <input value={position.min} onChange={(e) => setPosition({ ...position, min: Number(e.target.value) })}></input>
        <input value={position.max} onChange={(e) => setPosition({ ...position, max: Number(e.target.value) })}></input>
      </div>
    </div>
  );
}

export default App;
