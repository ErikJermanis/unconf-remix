import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

type Host = {
  id: number;
  name: string;
  address: string;
  city: string;
};
type Unconf = {
  id: number;
  title: string;
  datetime: string;
  host: Host;
};
type UnconfArr = Array<Unconf>;
type UnconfCardProps = { unconf: Unconf };

export const loader: LoaderFunction = async () => {
  const data: UnconfArr = await (await fetch('https://ritz.selectnull.com/api/events')).json();

  return data;
};

const UnconfCard = ({ unconf }: UnconfCardProps) => (
  <li className="mt-4">
    <div className="text-gray-900 font-bold text-xl text-center">{unconf.title}</div>
    <div className="text-gray-700">{unconf.datetime} | @{unconf.host.name}</div>
  </li>
);

const ListIndex = () => {
  const events = useLoaderData<UnconfArr>();

  return (
    <>
      <h1 className="text-4xl text-center font-black my-8">UnConference List</h1>
      <main>
        <ul className="flex flex-col items-center">
          {events.map(event => <UnconfCard key={event.id} unconf={event} />)}
        </ul>
        <Link to="/">home</Link>
      </main>
    </>
  )
};

export default ListIndex;