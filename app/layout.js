import "./globals.css";

export const metadata = {
  title: "Bishal Datta | Galactic AI Portfolio",
  description: "Portfolio of Bishal Datta — Computer Science, algorithms, full-stack development and machine learning."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}