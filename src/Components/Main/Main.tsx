import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../Card/Card';
import { Cafe } from '../../Types/Cafe';

// import img from '../../assets/images/cafe-first-point.png'

export const Main: React.FC = () => {
  const [caffes, setCaffes] = useState<Cafe[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get('page') || 1);

  const obj = {
    id: 1,
    name: 'First Point',
    image: './images/cafe-first-point.png',
    address: 'вулиця Шота Руставеллі, 16',
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
    <main className="main">
      <aside className="filters main__filters">
        filters
      </aside>

      <div className="main__cards cards">
        {currentItems.map(cafe => (
          <Card card={cafe} key={cafe.id} />
        ))}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </div>
    </main>
  );
};
