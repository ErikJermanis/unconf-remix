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

const ListIndex = () => {

  return (
    <>
      <h1 className="text-4xl text-center font-black my-8">UnConference List</h1>
      <main>
      </main>
    </>
  )
};

export default ListIndex;