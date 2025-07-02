import React, { useEffect, useState, useRef } from "react";

export default function RwandaLoader() {
  const colors = ["#009FE3", "#FFD100", "#007847"];
  const strokeWidth = 8;
  const dimmedStrokeWidth = 4;
  const radius = 40;
  const segmentAngle = 100;
  const gapAngle = 20;

  const [isSpinning, setIsSpinning] = useState(false);
  const [segmentsState, setSegmentsState] = useState(["idle", "idle", "idle"]);
  const timeouts = useRef([]);
  const pathsRef = useRef([]);

  useEffect(() => {
    const cycleAnimation = () => {
      setIsSpinning(true);
      setSegmentsState(["idle", "idle", "idle"]);

      const spinStopTimeout = setTimeout(() => {
        setIsSpinning(false);

        const formationTimeout = setTimeout(() => {
          sequentialFormation(() => {
            const resetTimeout = setTimeout(() => {
              setSegmentsState(["idle", "idle", "idle"]);
              cycleAnimation();
            }, 2500);
            timeouts.current.push(resetTimeout);
          });
        }, 400);
        timeouts.current.push(formationTimeout);
      }, 1000);
      timeouts.current.push(spinStopTimeout);
    };

    const sequentialFormation = (onComplete) => {
      const segmentsCount = 3;
      let totalDelay = 0;

      for (let idx = 0; idx < segmentsCount; idx++) {
        const formTimeout = setTimeout(() => {
          setSegmentsState((prev) => {
            const newState = [...prev];
            newState[idx] = "forming";
            return newState;
          });

          const finishTimeout = setTimeout(() => {
            setSegmentsState((prev) => {
              const newState = [...prev];
              newState[idx] = "formed";
              return newState;
            });

            if (idx === segmentsCount - 1 && onComplete) {
              onComplete();
            }
          }, 1500); // Slower drawing duration

          timeouts.current.push(finishTimeout);
        }, totalDelay);

        timeouts.current.push(formTimeout);
        totalDelay += 1800; // Bigger delay between parts
      }
    };

    cycleAnimation();

    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  const isFormingPhase = segmentsState.some((state) => state !== "idle");

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="relative w-24 h-24 flex justify-center items-center p-2">
        <style>
          {`
            @keyframes spin-fast {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }

            @keyframes draw {
              from {
                stroke-dashoffset: 1000;
              }
              to {
                stroke-dashoffset: 0;
              }
            }
          `}
        </style>

        <svg width="80" height="80" viewBox="0 0 100 100">
          {isFormingPhase ? (
            colors.map((color, index) => {
              const startAngle = index * (segmentAngle + gapAngle);
              const endAngle = startAngle + segmentAngle;
              const pathD = describeArc(50, 50, radius, startAngle, endAngle);

              const isForming = segmentsState[index] === "forming";
              const isFormed = segmentsState[index] === "formed";

              return (
                <path
                  key={index}
                  ref={(el) => (pathsRef.current[index] = el)}
                  d={pathD}
                  fill="none"
                  stroke={color}
                  strokeLinecap="round"
                  strokeWidth={isForming || isFormed ? strokeWidth : dimmedStrokeWidth}
                  style={{
                    opacity: isForming || isFormed ? 1 : 0.3,
                    strokeDasharray: 1000,
                    strokeDashoffset: isForming || isFormed ? 0 : 0,
                    animation: isForming ? "draw 1.5s ease-in-out forwards" : "none",
                    transition: "stroke-width 0.6s ease, opacity 0.6s ease",
                  }}
                />
              );
            })
          ) : (
            <path
              d={describeArc(50, 50, radius, 0, 300)}
              fill="none"
              stroke="#009FE3"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              style={{
                animation: isSpinning ? "spin-fast 0.3s linear infinite" : "none",
                transformOrigin: "50% 50%",
              }}
            />
          )}
        </svg>
      </div>
    </div>
  );
}

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}
