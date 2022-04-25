import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import styles from "~/styles/index.css"

export const links:LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
}

const IndexRoute = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-semibold">UnConference calendar</h1>
      <Link to="list" className="mt-12">
        <button className="px-4 py-2 border rounded-xl hover:text-cyan-900 hover:bg-white duration-150">go to calendar</button>
      </Link>
    </div>
  )
};

export default IndexRoute;