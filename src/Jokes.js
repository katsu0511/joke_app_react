import { useQuery } from 'react-query';

const fetchJokes = async () => {
  const res = await fetch(`https://official-joke-api.appspot.com/jokes/random`);
  if (res.ok){ return res.json(); }
  throw new Error(res.statusText);
};

export default function Wanted() {
  const { data } = useQuery('jokes', fetchJokes);

  function putPunchline() {
    const answer = document.getElementById('answer');
    const judge = document.getElementById('judge');
    const punchline = document.getElementById('punchline');
    if (answer.value === data.punchline)
      judge.textContent = '◯';
    else
      judge.textContent = '×';
    punchline.textContent = data.punchline;
  }

  return (
    <section className='jokes'>
      <div className='joke'>
        <p>Type: {data.type}</p>
        <p>Setup: {data.setup}</p>
        <p>What is the punchline?</p>
        <input type='text' id='answer' />
        <input type='button' value='push' onClick={putPunchline} />
        <p id='judge'></p>
        <p>Punchline: <span id='punchline'>?</span></p>
      </div>
    </section>
  );
}
