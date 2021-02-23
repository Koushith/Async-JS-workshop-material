import React, { useState, useEffect } from 'react';

function Search() {
  // const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [photo, setPhoto] = useState([]);
  const [pics, setPics] = useState([]);

  const API = '563492ad6f91700001000001b2e123515f774d29be49c70e4130317c';

  // useEffect(() => {
  //   const photos = async () => {
  //     const res = await fetch(
  //       `https://api.pexels.com/v1/curated?page=11&per_page=18`,
  //       {
  //         headers: {
  //           Authorization: API,
  //         },
  //       }
  //     );
  //     console.log('RESSSS', res);
  //     const { photos } = await res.json();
  //     console.log('DATA', photos);
  //     setPhoto(photos);
  //   };
  //   photos();
  // }, []);

  useEffect(() => {
    // const Searchphotos = async () => {
    //   const res = await fetch(
    //     `https://api.pexels.com/v1/search?query=${query}&per_page=50`,
    //     {
    //       headers: {
    //         Authorization: API,
    //       },
    //     }
    //   );
    //   console.log('RESSSS', res);
    //   const { photos } = await res.json();
    //   console.log('search results', photos);
    //   setPics(photos);
    // };
    // Searchphotos();
  }, []);

  console.log('PHOTOSSSSS', pics);

  const handelClick = (e) => {
    // setSearch(search);
    e.preventDefault();
    const Searchphotos = async () => {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=50`,
        {
          headers: {
            Authorization: API,
          },
        }
      );
      console.log('RESSSS', res);
      const { photos } = await res.json();
      console.log('search results', photos);
      setPics(photos);
    };
    Searchphotos();
    console.log('SEARCHHHH', query);
  };

  return (
    <>
      <form onSubmit={handelClick}>
        <h3>Search</h3>
        <label htmlFor='search'>Enter your Query</label>
        <input
          type='text'
          placeholder='search for anything'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button type='submit'>Search</button>
      </form>
      <div className='photos'>
        <h1>Search Results</h1>

        {pics.length > 0 ? (
          <>
            {pics.map((data) => (
              <ul key={data.id}>
                <img src={data.src.landscape} alt='' srcset='' />
              </ul>
            ))}
          </>
        ) : (
          <>
            <h2>No Photos found</h2>
          </>
        )}
      </div>
    </>
  );
}

export default Search;
