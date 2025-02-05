// src/components/MessageGroup.tsx
import DateHeader from './DateHeader';
import MessageItem from './MessageItem';
import { motion } from 'framer-motion';

export default function MessageGroup({ date, messages }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {/* Encabezado de Fecha */}
      <DateHeader date={date} />

      {/* Lista de Mensajes */}
      <div className="space-y-2">
        {messages.map((message, index) => (
          <MessageItem key={index} message={message} />
        ))}
      </div>
    </motion.div>
  );
}