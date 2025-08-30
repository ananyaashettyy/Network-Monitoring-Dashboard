# Enhanced Network Monitoring Dashboard
---
A **Next.js-based Network Monitoring Dashboard** that allows you to monitor multiple websites in real-time, displaying latency, HTTP status codes, response size, and more. The dashboard also includes live charts, dark/light theme, and notifications for website downtime.

---


##  Features

- **Real-time Monitoring**: Ping multiple URLs and get live latency, HTTP status, and response size.
- **Latency History Charts**: Line charts showing response trends over time.
- **Multiple URLs Support**: Enter multiple URLs separated by commas.
- **Status Indicators**: ✅ up, ❌ down, ⏳ in progress.
- **Remove / Reset URLs**: Manage the list of monitored websites interactively.
- **Dark / Light Mode**: Toggle between themes for better readability.
- **Browser Notifications**: Alerts when a website goes down.
- **Performance Metrics**: Displays latency (ms), HTTP status, and response size (bytes).

---

##  Tech Stack

- **Frontend**: React.js / Next.js  
- **Backend**: Vercel serverless API routes  
- **Charts**: Chart.js / Recharts  
- **Deployment**: Vercel  
- **Styling**: CSS Flexbox / Grid  

---

##  Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/ananyaashettyy/Network-Monitoring-Dashboard.git
```
```bash
cd Network-Monitoring-Dashboard
```
2. Install dependencies:
```bash
npm install
```
```bash
npm install react-chartjs-2 chart.js axios
```
3. Run the development server:
```bash
npm run dev
```

Open your browser:

Browser runs by default at: **http://localhost:3000**


##  Display


<img width="853" height="850" alt="Screenshot 2025-08-30 170019" src="https://github.com/user-attachments/assets/86b87160-5858-4d80-8de2-7506d548d83e" />






<img width="912" height="809" alt="Screenshot 2025-08-30 170458" src="https://github.com/user-attachments/assets/191da393-a41f-4caa-9d97-87d470fece40" />



##  License

This project is open source under the **MIT License**.  
You are free to use, modify, and distribute this software with attribution.  

```text
MIT License

Copyright (c) 2025 Ananya R Shetty

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[...rest of MIT License text...]
```

