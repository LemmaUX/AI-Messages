// src/app/api/messages/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // URL del backend externo
    const externalApiUrl = 'http://www.backup-backend.readychatai.com/messages_json';
    
    // Fetch data from the external API
    const response = await fetch(externalApiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}