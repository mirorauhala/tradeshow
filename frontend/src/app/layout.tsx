import "@fontsource/inter/variable.css";
import { Nav } from "../components/Nav";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-slate-50">
        <div className="px-5 pt-11">{children}</div>
        <Nav />
      </body>
    </html>
  );
}
