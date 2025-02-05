// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useMessages } from '@/hooks/useMessages';
import MessageGroup from '@/components/MessageGroup';
import JumpToBottomButton from '@/components/JumpToBottomButton';
import SearchBar from '@/components/SearchBar';
import { formatDate, groupMessagesByDate } from '@/utils/dateUtils';

export default function Home() {
  const { messages, loading, error } = useMessages();
  const [searchQuery, setSearchQuery] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filtrar mensajes según la consulta de búsqueda
  const filteredMessages = messages
    .filter((message) => message && message.text)
    .filter((message) =>
      message.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Agrupar mensajes por fecha
  const groupedMessages = groupMessagesByDate(filteredMessages);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Barra de Búsqueda */}
      <div className="p-4 bg-white shadow-md sm:p-6">
        <SearchBar onSearch={(query) => setSearchQuery(query)} />
      </div>

      {/* Lista de Mensajes */}
      <div className="flex-grow overflow-y-auto p-4 space-y-6">
        {groupedMessages.map((group, index) => (
          <MessageGroup
            key={index}
            date={group.date}
            messages={group.messages}
            className="space-y-2"
          />
        ))}
      </div>

      {/* Botón "Jump to Bottom" */}
      <div className="p-4 bg-white shadow-md sm:p-6">
        <JumpToBottomButton />
      </div>
    </div>
  );
}

function groupMessagesByDate(messages) {
  const groups = {};
  messages.forEach((message) => {
    const dateKey = formatDate(message.timestamp);
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(message);
  });

  return Object.keys(groups).map((date) => ({
    date,
    messages: groups[date],
  }));
}