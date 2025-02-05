// src/types/message.ts
export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai'; // Solo puede ser 'user' o 'ai'
    timestamp: string; // ISO 8601 format (e.g., "2023-10-01T14:30:00Z")
  }