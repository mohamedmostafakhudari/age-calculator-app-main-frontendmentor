import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

function Number({ from, to }) {
  const { number } = useSpring({
    from: { number: +from },
    number: to,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
export default function Period({ num, label }) {
  const [prevValue, setPrevValue] = useState(null);
  const prevRef = useRef(null);
  useEffect(() => {
    if (!prevRef) return;
    setPrevValue(prevRef.current.textContent);
  }, []);
  return (
    <div className="text-secondarytext flex gap-3">
      <div className="text-primarytext" ref={prevRef}>
        <Number from={prevValue} to={num} />
      </div>{" "}
      <div>{label}</div>
    </div>
  );
}
