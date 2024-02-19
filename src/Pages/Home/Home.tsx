import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Card } from '../../Components/Card/Card';
import { Cafe } from '../../Types/Cafe';
import { Filters } from '../../Components/Filters/Filters';
import { SearchBar } from '../../Components/SearchBar/SearchBar';

export const Home: React.FC = () => {
  const [caffes, setCaffes] = useState<Cafe[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get('page') || 1);

  useEffect(() => {
    window.scrollTo(0, 500);
  }, [page]);

  const obj = {
    id: 1,
    name: 'First Point',
    image: './images/cafe-first-point.png',
    address: 'вулиця Шота Руставеллі, 16',
    urlAddress: 'https://www.google.com/maps/place/First+Point+Espresso+Bar/@50.4674942,30.5065488,15z/data=!4m14!1m7!3m6!1s0x40d4ce14b4b0191f:0x7e2440f43a54e2d4!2sFirst+Point+Espresso+Bar!8m2!3d50.467646!4d30.5116746!16s%2Fg%2F11b8vd6nb1!3m5!1s0x40d4ce14b4b0191f:0x7e2440f43a54e2d4!8m2!3d50.467646!4d30.5116746!16s%2Fg%2F11b8vd6nb1?hl=uk-UK&entry=ttu',
    schedule: 'Пн-Пт 8:00-22:00 (кухня до 21:30)',
    rating: 4.5,
    feedbackAmount: 8,
    averageBill: 180,
  };

  caffes.length = 15;

  caffes.fill(obj);

  useEffect(() => {
    const newCaffes = caffes.map((item, index) => ({ ...item, id: item.id + index }));

    setCaffes(newCaffes);
  }, []);

  const itemsPerPage = 9;
  const itemOffset = (page - 1) * itemsPerPage;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = caffes.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(caffes.length / itemsPerPage);

  const handlePageClick = (event: { selected: number; }) => {
    const newPage = event.selected + 1;

    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev.toString());

      newParams.set('page', newPage.toString());

      return newParams;
    });
  };

  return (
    <>
      <SearchBar />
      <Filters />

      <div className="main__cards cards">
        {currentItems.map(cafe => (
          <Card card={cafe} key={cafe.id} />
        ))}
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </div>
    </>
  );
};
