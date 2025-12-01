import { useState, useEffect } from 'react';

export const useVisitedPages = () => {
  const [visitedPages, setVisitedPages] = useState(() => {
    try {
      const stored = JSON.parse(sessionStorage.getItem('visitedPages'));
      return stored && typeof stored === 'object' ? stored : {};
    } catch {
      return {};
    }
  });

  // סימון עמוד כ-visited
  const markVisited = (path) => {
    setVisitedPages(prev => {
      const updated = { ...prev, [path]: true };
      sessionStorage.setItem('visitedPages', JSON.stringify(updated));
      console.log("Visited pages updated:", updated);
      return updated;
    });
  };

  // listener ל-sessionStorage
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'visitedPages') {
        try {
          const updated = JSON.parse(e.newValue);
          if (updated && typeof updated === 'object') {
            setVisitedPages(updated);
            console.log("Visited pages updated from storage:", updated);
          }
        } catch {}
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return { visitedPages, markVisited };
};
