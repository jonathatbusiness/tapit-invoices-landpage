/**
 * Dynamic scribble arrow and text adjuster
 * Adjusts only POSITION based on viewport width (keeps size fixed)
 */

export function initScribbleAdjuster() {
  const scribbleElement = document.querySelector(".ti-scribble-in-card");
  const arrowElement = document.querySelector(".ti-scribble-arrow");
  const textElement = document.querySelector(".ti-hand");

  if (!scribbleElement || !arrowElement || !textElement) return;

  function adjustScribble() {
    const viewportWidth = window.innerWidth;

    // Base values for 1920px desktop
    const baseWidth = 1920;
    const baseRight = 50;
    const baseTop = 14;
    const baseTextRight = 10;
    const baseTextTop = 0;

    // Calculate position adjustment factor
    const positionFactor = viewportWidth / baseWidth;

    // Adjust ONLY positions (not sizes)
    const newRight = baseRight * positionFactor;
    const newTop = baseTop * positionFactor;
    const newTextRight = baseTextRight * positionFactor;
    const newTextTop = baseTextTop * positionFactor;

    // Apply position styles
    scribbleElement.style.right = `${newRight}px`;
    scribbleElement.style.top = `${newTop}px`;

    textElement.style.right = `${newTextRight}px`;
    textElement.style.top = `${newTextTop}px`;

    // Keep original sizes (set once, don't scale)
    arrowElement.style.transform = `rotate(0deg) scaleX(0.6) scaleY(0.7)`;
    textElement.style.fontSize = `18px`;
  }

  // Initial adjustment
  adjustScribble();

  // Adjust on resize with debounce
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(adjustScribble, 100);
  });
}
