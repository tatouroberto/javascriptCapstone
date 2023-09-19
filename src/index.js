import './style.css';

const url = 'https://api.tvmaze.com/shows';

const fetchApi = async () => {
  const req = new Request(url);
  const res = await fetch(req);
  const result = await res.json();
  const scrs = result.slice(8, 15);
  return scrs;
};

fetchApi();