'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import PingForm from '../components/PingForm';
import PingChart from '../components/PingChart';
import URLList from '../components/URLList';
import ThemeToggle from '../components/ThemeToggle';

export default function Page() {
  const [pingData, setPingData] = useState({});

  const handlePing = (data) => {
    setPingData(prev => {
      const history = prev[data.url] || [];
      return { ...prev, [data.url]: [...history, data] };
    });

    // Browser notification
    if (data.status === 'down' && Notification.permission === 'granted') {
      new Notification(`${data.url} is DOWN!`);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      Object.keys(pingData).forEach(async (url) => {
        try {
          const res = await axios.get(`/api/ping?url=${encodeURIComponent(url)}`);
          handlePing(res.data);
        } catch (err) {
          handlePing({ url, status: 'down', latency: null, statusCode: null, responseSize: null, timestamp: new Date().toISOString() });
        }
      });
    }, 10000);
    return () => clearInterval(interval);
  }, [pingData]);

  useEffect(() => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const removeURL = (url) => {
    setPingData(prev => {
      const newData = { ...prev };
      delete newData[url];
      return newData;
    });
  };

  const resetAll = () => setPingData({});

  return (
    <div className="container">
      <Header />
      <ThemeToggle />
      <PingForm onPing={handlePing} />
      <div className="chart-container">
        <PingChart data={pingData} />
      </div>
      <URLList pingData={pingData} removeURL={removeURL} resetAll={resetAll} />
    </div>
  );
}
