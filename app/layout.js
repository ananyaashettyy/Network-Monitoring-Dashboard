import '../styles/globals.css';

export const metadata = {
  title: 'Network Monitoring Dashboard',
  description: 'Monitor multiple websites with live charts and alerts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
