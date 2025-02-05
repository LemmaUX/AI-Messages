// src/components/DateHeader.tsx
export default function DateHeader({ date }) {
  return (
    <div className="sticky top-0 bg-white z-10 py-2 text-center text-gray-500">
      {date}
    </div>
  );
}