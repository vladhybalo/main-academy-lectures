import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import './Range.css';

const Range = ({min=0, max=100}) => {
    const firstCircleRef = useRef();
    const secondCircleRef = useRef();
    const rangeRef = useRef();

    const isDrowing = useRef();

    const [firstCircle, setFirstCircle] = useState(min);
    const firstCirclePositionRef = useRef(min);
    const seconCirclePositionRef = useRef(max);
    const [secondCircle, setSecondCircle] = useState(max);


    useEffect(() => {
        firstCircleRef.current.ondragstart = function() {
            return false;
        };

        secondCircleRef.current.ondragstart = function() {
            return false;
        };

        document.addEventListener('mousedown', (event) => {
            isDrowing.current = true;
            const target = event.target;

            if(target.classList.contains('range-circle')) {
                const moveHandler = (event) => {
                    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
                    console.log(clientX)
                    console.log(rangeRef.current.getBoundingClientRect().right)
                    console.dir(event.pageX - rangeRef.current.getBoundingClientRect().left);

                    if(event.pageX > rangeRef.current.getBoundingClientRect().left && event.pageX < rangeRef.current.getBoundingClientRect().right) {
                        const circleOffset = clientX - rangeRef.current.getBoundingClientRect().left;

                        if(firstCircleRef.current === target && circleOffset < seconCirclePositionRef.current) {
                            // target.style.left = circleOffset + 'px';
                            setFirstCircle(circleOffset);
                        }

                        if(secondCircleRef.current === target && circleOffset > firstCirclePositionRef.current) {
                            // target.style.left = circleOffset + 'px';
                            setSecondCircle(circleOffset);
                            
                        }
                    }
    
                };
        
                document.addEventListener('mousemove', moveHandler);
        
                document.addEventListener('mouseup', () => {
                    document.removeEventListener('mousemove', moveHandler);
                });
            }

          
        });

        return () => {
            // TODO remove listeners
            document.removeEventListener()
        }

      
    }, [])

    useEffect(() => {
        firstCircleRef.current.style.left = firstCircle + 'px';
        firstCirclePositionRef.current = firstCircle;
    }, [firstCircle]);

    useEffect(() => {
        secondCircleRef.current.style.left = secondCircle + 'px';
        seconCirclePositionRef.current = secondCircle;
    }, [secondCircle]);
    

    return (
        <div className="range-wrapper">
            <div className="range-line" ref={rangeRef}>
                <div className="range-circle" ref={firstCircleRef}></div>
                <div className="range-circle" ref={secondCircleRef}></div>
            </div>
            <input type="text" className="range-input" value={firstCircle} onChange={(event) => setFirstCircle(Number(event.target.value))}/>
            <input type="text" className="range-input"  value={secondCircle} onChange={(event) => setSecondCircle(Number(event.target.value))}/>
        </div>
    )
};

export default Range;