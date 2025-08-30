import { useState } from 'react';
import axios from 'axios';

export default function PingForm({ onPing }) {
  const [urls, setUrls] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!urls) return;

    const urlList = urls.split(',').map(u => u.trim()).filter(Boolean);

    for (const url of urlList) {
      try {
        const res = await axios.get(`/api/ping?url=${encodeURIComponent(url)}`);
        onPing(res.data);
      } catch (err) {
        onPing({ url, status: 'down', latency: null, statusCode: null, responseSize: null, timestamp: new Date().toISOString() });
      }
    }
    setUrls('');
  };

  return (
    <form onSubmit={handleSubmit} className="ping-form">
      <input
        type="text"
        placeholder="Enter website URLs separated by commas"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />
      <button type="submit">Ping</button>
    </form>
  );
}
