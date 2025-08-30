export default function URLList({ pingData, removeURL, resetAll }) {
  const urls = Object.keys(pingData);

  if (urls.length === 0) return <div className="no-url">No URLs being monitored.</div>;

  return (
    <div className="url-list">
      {urls.map(url => {
        const latest = pingData[url][pingData[url].length - 1];
        const color = latest.status === 'up' ? 'green' : latest.status === 'down' ? 'red' : 'gray';
        const icon = latest.status === 'up' ? '☆' : latest.status === 'down' ? '❌' : '⏳';
        return (
          <div key={url} className="url-card" style={{ borderColor: color }}>
            <span>{icon}</span>
            <span className="url-text">{url} — {latest.status} — {latest.latency ? latest.latency + ' ms' : 'N/A'} — HTTP: {latest.statusCode || 'N/A'} — Size: {latest.responseSize ? latest.responseSize + ' bytes' : 'N/A'}</span>
            <button onClick={() => removeURL(url)}>Remove</button>
          </div>
        );
      })}
      <button className="reset-btn" onClick={resetAll}>Reset All</button>
    </div>
  );
}
