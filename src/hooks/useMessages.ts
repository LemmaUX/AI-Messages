// src/hooks/useMessages.ts
'use client';

import { useEffect, useState } from 'react';
import { Message } from '../types/message';

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages');
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data: any[] = await response.json();

        // Transformar los datos para que coincidan con la estructura esperada
        const transformedMessages = data.map((item) => ({
          id: item.id,
          text: item.message_text || '', // Usar un valor predeterminado si message_text es undefined
          sender: item.bot_sender === 0 ? 'user' : 'ai', // Mapear bot_sender a 'user' o 'ai'
          timestamp: item.message_date, // Usar message_date como timestamp
        }));

        // Validar que cada mensaje tenga la propiedad `text`
        const validMessages = transformedMessages.filter(
          (message) => message && message.text
        );

        // Limitar los mensajes a los primeros 50
        setMessages(validMessages.slice(0, 50));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return { messages, loading, error };
}