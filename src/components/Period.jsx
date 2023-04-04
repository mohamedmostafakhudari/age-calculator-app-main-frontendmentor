import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

function Number({ to }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: to,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
export default function Period({ num, label, isEmpty }) {
  const [prevValue, setPrevValue] = useState(null);
  const prevRef = useRef(null);
  useEffect(() => {
    if (!prevRef) return;
    setPrevValue(prevRef.current.textContent);
  }, []);
  return (
    <div className="text-secondarytext flex gap-3">
      <div className="text-primarytext" ref={prevRef}>
        {isEmpty ? (
          <>--</>
        ) : (
          <>
            {" "}
            <Number to={num} />
          </>
        )}
      </div>{" "}
      <div>{label}</div>
    </div>
  );
}
