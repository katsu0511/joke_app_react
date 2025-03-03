import { useQuery } from 'react-query';

const fetchJokes = async () => {
  const res = await fetch(`https://official-joke-api.appspot.com/jokes/random`);
  if (res.ok){ return res.json(); }
  throw new Error(res.statusText);
};

export default function Wanted() {
  const { data } = useQuery('jokes', fetchJokes);

  return (
    <section className='jokes'>
      <div className='joke'>
        <p>Type: {data.type}</p>
        <p>Setup: {data.setup}</p>
        <p>Punchline: {data.punchline}</p>
      </div>
    </section>
  );
}
