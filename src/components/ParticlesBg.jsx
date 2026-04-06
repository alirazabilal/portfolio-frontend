import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 40, density: { enable: true, area: 1000 } },
          color: { value: ["#00f5d4", "#f5a623", "#8892b0"] },
          opacity: {
            value: { min: 0.1, max: 0.3 },
            animation: { enable: true, speed: 0.5, minimumValue: 0.05 },
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00f5d4",
            opacity: 0.08,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.2 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
