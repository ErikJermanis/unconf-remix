import { LiveReload, Outlet, Links } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/app.css"

export const links:LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>UnConference calendar</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}