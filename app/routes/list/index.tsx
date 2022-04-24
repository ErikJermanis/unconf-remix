import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type Unconf = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type UnconfArr = Array<Unconf>;

export const loader: LoaderFunction = async () => {
  const data: UnconfArr = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

  return data;
};

const ListIndex = () => {
  const posts = useLoaderData<UnconfArr>();

  return (
    <>
      <h1 className="text-red-600">UnConference List</h1>
      <main>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </main>
    </>
  )
};

export default ListIndex;