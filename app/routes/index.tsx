import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/index.css"

export const links:LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
}

const IndexRoute = () => {
  return <div>index route</div>
};

export default IndexRoute;