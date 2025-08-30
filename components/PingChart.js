import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function PingChart({ data }) {
  const urls = Object.keys(data);
  if (urls.length === 0) return null;

  const chartData = {
    labels: data[urls[0]].map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: urls.map((url, idx) => ({
      label: url,
      data: data[url].map(d => d.latency),
      borderColor: `hsl(${(idx * 60) % 360}, 70%, 50%)`,
      backgroundColor: `hsla(${(idx * 60) % 360}, 70%, 50%, 0.2)`,
    })),
  };

  return <Line data={chartData} />;
}
