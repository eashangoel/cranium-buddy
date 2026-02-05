import "./globals.css";

export const metadata = {
  title: "Clinical Documentation Helper",
  description: "Professional tool for generating clinical daily notes and discharge summaries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
