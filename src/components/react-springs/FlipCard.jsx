import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import styled from "styled-components";

const Styles = styled.div`
  .c {
    position: absolute;
    width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    cursor: pointer;
    will-change: transform, opacity;
    border-radius: 5px;
    z-index: 1;
  }

  .front,
  .back {
    background-size: cover;
  }
`;

function FlipCard(props) {
  const [flipped, set] = useState(false);

  let time = props.timeout ? props.timeout : 10000;

  setInterval(() => set(!flipped), time);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <Styles>
      <div onClick={() => set((state) => !state)}>
        <a.div
          className="c back"
          style={{
            opacity: opacity.interpolate((o) => 1 - o),
            transform,
            backgroundImage: `url(${props.recto})`,
          }}
        />
        <a.div
          className="c front"
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
            backgroundImage: `url(${props.verso})`,
          }}
        />
      </div>
    </Styles>
  );
}

export default FlipCard;
