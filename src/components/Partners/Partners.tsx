import { useScroll, useTransform, motion } from "framer-motion";
import "./Partners.css";
import type React from "react";

const partners = [
  { name: "Solana", logo: "/logos/solana.svg" },
  { name: "Arweave", logo: "/logos/arweave.svg" },
  { name: "Bittensor", logo: "/logos/bittensor.svg" },
  { name: "RedIcon", logo: "/logos/red.svg" },
  { name: "Telegram", logo: "/logos/telegram.svg" },
];

interface ScrollDrivenCarouselProps {
  children: React.ReactNode;
  maxScroll: number;
  maxTranslateX: number;
}

function ScrollDrivenCarousel({
  children,
  maxScroll = 1000,
  maxTranslateX = -500,
}: ScrollDrivenCarouselProps) {
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, [0, maxScroll], [0, maxTranslateX]);

  return (
    <div className="carousel-outer">
      <motion.div className="carousel-inner" style={{ x }}>
        {children}
        {children}
      </motion.div>
    </div>
  );
}

const Partners = () => (
  <section className="partners-section">
    <h2>Projects integrated into the Arrakis AI Ecosystem</h2>
    <ScrollDrivenCarousel maxScroll={1500} maxTranslateX={-300}>
      {partners.map((p, i) => (
        <div className="partner" key={p.name + i}>
          <img src={p.logo} alt={p.name} />
        </div>
      ))}
    </ScrollDrivenCarousel>
  </section>
);

export default Partners;
