// src/components/MessageItem.tsx
import { motion } from 'framer-motion';

export default function MessageItem({ message }) {
  // Determinar si el mensaje es del usuario o del bot
  const isUser = message.sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}
    >
      {/* Contenedor del Mensaje */}
      <div
        className={`max-w-[70%] p-3 rounded-lg ${
          isUser
            ? 'bg-blue-500 text-white self-end'
            : 'bg-gray-200 text-gray-800 self-start'
        }`}
      >
        {/* Texto del Mensaje */}
        <p className="text-sm">{message.text}</p>
      </div>
    </motion.div>
  );
}