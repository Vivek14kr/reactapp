import { useEffect, useState } from "react";

export const Timer = ({ start, end }) => {
  const [time, setTime] = useState(start);
  if (time === null) {
    setTime(start);
  }

  useEffect(() => {
    const counting = setInterval(() => {
      setTime((val) => {
        if (val === end) {
          clearInterval(counting);
          return end;
        }

        return val + 1;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Stopwatch : {time}</h1>
    </div>
  );
};
