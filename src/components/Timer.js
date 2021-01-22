import { useEffect, useState } from "react";
import { Label } from "./common";

const Timer = ({ initTime, cookingTime, ...props }) => {
  const calculateTime = (cookingTime, initTime) => {
    return Math.round(
      cookingTime / 1000 - Math.floor(new Date() - new Date(initTime)) / 1000
    );
  };
  const [count, setCount] = useState(calculateTime(cookingTime, initTime));

  useEffect(() => {
    const timer =
      count > 0 &&
      setTimeout(() => {
        setCount(calculateTime(cookingTime, initTime));
      }, 1000);
    return () => clearTimeout(timer);
  });
  return <Label variant='Body' fontStyle='italic'>{`${count} sec`}</Label>;
};

export default Timer;
