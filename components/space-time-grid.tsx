"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function SpaceTimeGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Grid properties
    const gridSize = 50;
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(27, 188, 156, 0.3)"; // Neon cyan with low opacity
      ctx.lineWidth = 1;

      // Calculate grid dimensions
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      // Draw the grid with space-time curvature effect
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;

          // Calculate distance from mouse
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance =
            Math.sqrt(
              canvas.width * canvas.width + canvas.height * canvas.height
            ) / 4;

          // Calculate distortion based on mouse position and time
          const distortion = Math.sin(distance / 50 - time / 10) * 5;
          const distortionFactor = Math.max(0, 1 - distance / maxDistance);

          const distortedX = x + distortion * distortionFactor;
          const distortedY = y + distortion * distortionFactor;

          // Draw grid cell
          ctx.beginPath();
          if (i < cols - 1) {
            ctx.moveTo(distortedX, distortedY);
            const nextX = (i + 1) * gridSize;
            const nextDx = nextX - mouseX;
            const nextDistance = Math.sqrt(nextDx * nextDx + dy * dy);
            const nextDistortionFactor = Math.max(
              0,
              1 - nextDistance / maxDistance
            );
            const nextDistortedX =
              nextX +
              Math.sin(nextDistance / 50 - time / 10) *
                5 *
                nextDistortionFactor;
            ctx.lineTo(nextDistortedX, distortedY);
            ctx.stroke();
          }

          if (j < rows - 1) {
            ctx.beginPath();
            ctx.moveTo(distortedX, distortedY);
            const nextY = (j + 1) * gridSize;
            const nextDy = nextY - mouseY;
            const nextDistance = Math.sqrt(dx * dx + nextDy * nextDy);
            const nextDistortionFactor = Math.max(
              0,
              1 - nextDistance / maxDistance
            );
            const nextDistortedY =
              nextY +
              Math.sin(nextDistance / 50 - time / 10) *
                5 *
                nextDistortionFactor;
            ctx.lineTo(distortedX, nextDistortedY);
            ctx.stroke();
          }
        }
      }

      // Add some purple grid lines for accent
      ctx.strokeStyle = "rgba(155, 89, 182, 0.2)"; // Purple with low opacity
      for (let i = 0; i < cols; i += 4) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
      }

      for (let j = 0; j < rows; j += 4) {
        ctx.beginPath();
        ctx.moveTo(0, j * gridSize);
        ctx.lineTo(canvas.width, j * gridSize);
        ctx.stroke();
      }

      time += 0.1;
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 1.5 }}
    />
  );
}
