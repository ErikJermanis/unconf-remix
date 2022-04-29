import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const action:ActionFunction = async ({ request }) => {
  const form = await request.formData();
  console.log(form);
  console.log(form.get('title'));

  return redirect('/list');
};

const AddNew = () => {

  return (
    <>
      <h1 className="text-4xl text-center font-black my-8">Add New</h1>
      <main>
        <form method="POST" className="flex flex-col items-center">
          <input type="text" name='title' id="title" className="margin-auto border-2 border-gray-600 rounded-lg p-0.5" />
          <button type="submit" className="mt-4 bg-cyan-700 px-2 py-1 rounded-lg border border-cyan-700 text-white hover:text-cyan-900 hover:bg-white duration-150">Add</button>
        </form>
      </main>
    </>
  )
};

export default AddNew;