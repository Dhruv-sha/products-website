import './globals.css';

export const metadata = {
  title: 'E-Commerce App',
  description: 'Simple product app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 p-4 font-sans">{children}</body>
    </html>
  );
}
