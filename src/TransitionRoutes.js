// TransitionRoutes.js
import React from 'react';
import { useTransition, animated } from 'react-spring';

const TransitionRoutes = ({ children }) => {
  const transitions = useTransition(children, {
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
  });

  return transitions((style, child) => (
    <animated.div style={style}>{child}</animated.div>
  ));
};

export default TransitionRoutes;
