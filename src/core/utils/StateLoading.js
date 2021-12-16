import React, {useState, useEffect, useRef} from 'react';
import {Progress} from 'reactstrap';

export function StateLoading({loading}) {
  const [width, setWidth] = useState(0);
  const animateTimeout = useRef('');
  const stopAnimateTimeout = useRef('');

  useEffect(() => {
    if (loading) {
      animate()
    }
  }, [loading]);

  const animate = () => {
    animateTimeout.current = setTimeout(() => {
      if (10 <= 100) {
        setWidth(width + 10);
        animate();
      } else {
        stopAnimate();
      }
    }, 30);
  }

  const stopAnimate = () => {
    clearTimeout(this.animateInterval);
    stopAnimateTimeout.current = setTimeout(() => {
      setWidth(0);
    }, 300);
  }

  useEffect(() => {
    // window.addEventListener('unhandledRejection', handler);
    // return () => {
    //    window.removeEventListener('unhandledRejection', handler);
    // }
    if (stopAnimateTimeout) {
      return clearTimeout(stopAnimateTimeout);
    }
    if (animateTimeout) {
      return clearTimeout(animateTimeout);
    }
  }, [])

  return (
    <div 
      style={{height: "3px", width: "100%"}}
        >
      {width > 0 && (<>
        <Progress value={width} style={{ height: "3px" }} />
      </>)} 
    </div>
  )
}
