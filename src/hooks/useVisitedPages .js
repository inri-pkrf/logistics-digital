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

  // שמירה ב-sessionStorage
  const markVisited = (path) => {
    setVisitedPages(prev => {
      const updated = { ...prev, [path]: true };
      sessionStorage.setItem('visitedPages', JSON.stringify(updated));
      return updated;
    });
  };

  // listener ל-sessionStorage כדי לסנכרן בין קומפוננטים
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'visitedPages') {
        try {
          const updated = JSON.parse(e.newValue);
          if (updated && typeof updated === 'object') {
            setVisitedPages(updated);
          }
        } catch {}
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return { visitedPages, markVisited };
};
