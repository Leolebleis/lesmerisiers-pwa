import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import styled from "styled-components";

const Styles = styled.div`
  .c {
    position: absolute;
    width: 30%;
    height: 10%;
    cursor: pointer;
    will-change: transform, opacity;
    border-radius: 5px;
    z-index: 100;
  }

  .front,
  .back {
    background-size: cover;
  }

  .back {
    background-image: url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop);
  }

  .front {
    background-image: url(https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop);
  }
`;

function FlipCard(props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <Styles>
      <div onClick={() => set((state) => !state)}>
        <a.div
          class="c back"
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
        />
        <a.div
          class="c front"
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
        />
      </div>
    </Styles>
  );
}

export default FlipCard;
