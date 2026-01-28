import { useState } from "react";
import '../componentsCSS/FullscreenButton.css'

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <button onClick={toggleFullscreen} className="fullscreen-btn">
      {isFullscreen ? "צא ממסך מלא" : "מסך מלא"}
    </button>
  );
}
