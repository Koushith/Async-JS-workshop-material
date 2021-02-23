import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';
import SearchSvg from '../assets/images/search.svg';
import Spinner from '../assets/images/spinner.svg';

function Search() {
  // const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [photo, setPhoto] = useState([]);
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
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

      setPics(photos);
      setLoading(false);
    };
    Searchphotos();
    console.log('SEARCHHHH', query);
  };

  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              Search Free high-resolution Photos
            </h1>
            <p className='mb-8 leading-relaxed'>
              Choose from an expansive collection of pristine high-quality
              images to perfectly accessorize your apps. Each wallpaper was
              carefully curated and professionally-shot, and they are all free
              to use. Powered by Unsplash
            </p>
            <form
              className='flex w-full md:justify-start justify-center items-end'
              onSubmit={handelClick}
            >
              <div className='relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4'>
                <input
                  type='text'
                  id='hero-field'
                  name='hero-field'
                  className='w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  placeholder='Search for anything'
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />
              </div>
              <button
                className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                type='submit'
              >
                Search
              </button>
            </form>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 '>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='https://images.unsplash.com/photo-1613799230873-3271b630ee1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1178&q=80'
            />
          </div>
        </div>
      </section>
      {/* search results */}

      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Search Results
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              The best free stock photos & videos shared by talented creators.
              Powered by Unsplash.
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            {loading ? (
              <img src={Spinner} alt='loading' />
            ) : (
              <>
                {pics.length > 0 ? (
                  <>
                    {pics.map((data) => (
                      <div className='lg:w-1/3 sm:w-1/2 p-4'>
                        <div className='flex relative'>
                          <img
                            alt='gallery'
                            className='absolute inset-0 w-full h-full object-cover object-center'
                            src={data.src.landscape}
                          />
                          <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 overflow-hidden '>
                            <h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
                              PHOTO BY
                            </h2>
                            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                              {data.photographer}
                            </h1>

                            <h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
                              PHOTOGRAPHER'S PROFILE
                            </h2>
                            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                              {data.photographer_url}
                            </h1>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <section className='text-gray-600 body-font '>
                    <div className='container px-5 mx-auto flex justify-center fluid'>
                      <img className='mx-auto' src={SearchSvg} />
                    </div>
                  </section>
                )}
              </>
            )}
            {/* first img */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
