import { useScroll, useTransform, motion } from "framer-motion";
import "./Background.css";

const Background = () => {
  const { scrollY } = useScroll();

  const rocketY = useTransform(scrollY, [0, 1600], ["100%", "-40%"]);
  const rocketOpacity = useTransform(
    scrollY,
    [0, 400, 800, 1200],
    [0, 1, 1, 0]
  );
  const rocketScale = useTransform(scrollY, [0, 800, 1600], [1, 1.1, 1.3]);
  const planetX = useTransform(scrollY, [0, 600], [0, -30], { clamp: true });

  return (
    <>
      <div className="background">
        <motion.div
          className="rocket"
          style={{
            y: rocketY,
            opacity: rocketOpacity,
            scale: rocketScale,
          }}
        />

        <img src="/logos/top-vector.png" className="top-gradient" />
        <img src="/logos/low-vector.png" className="bottom-gradient" />
      </div>

      <div className="scroll-content">
        <motion.img
          src="/logos/planet.png"
          className="planet"
          style={{ x: planetX }}
        />
      </div>
    </>
  );
};

export default Background;
