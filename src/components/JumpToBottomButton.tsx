// src/components/JumpToBottomButton.tsx
'use client'; // Agregamos esta línea para marcar el archivo como Client Component

import { useEffect, useState } from 'react';

export default function JumpToBottomButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowButton(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button
        onClick={scrollToBottom}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg"
      >
        ↓
      </button>
    )
  );
}