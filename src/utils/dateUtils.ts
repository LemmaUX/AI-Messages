// src/utils/dateUtils.ts
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function formatDate(timestamp: string): string {
  const date = dayjs(timestamp);
  const now = dayjs();

  if (date.isSame(now, 'day')) {
    return 'Today';
  } else if (date.isSame(now.subtract(1, 'day'), 'day')) {
    return 'Yesterday';
  } else if (date.isAfter(now.subtract(7, 'day'))) {
    return 'This Week';
  } else {
    return date.format('MMMM D, YYYY'); // e.g., "October 1, 2023"
  }
}

export function formatTimestamp(timestamp: string): string {
  return dayjs(timestamp).format('h:mm A'); // e.g., "3:45 PM"
}