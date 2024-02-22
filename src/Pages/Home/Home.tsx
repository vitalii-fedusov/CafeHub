import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Card } from '../../Components/Card/Card';
import { Cafe } from '../../Types/Cafe';
import { Filters } from '../../Components/Filters/Filters';
import { SearchBar } from '../../Components/SearchBar/SearchBar';
import cafesFromServer from '../../api/cafes.json';

export const Home: React.FC = () => {
  const [caffes, setCaffes] = useState<Cafe[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get('page') || 1);

  useEffect(() => {
    window.scrollTo(0, 500);
  }, [page]);

  useEffect(() => {
    const newCaffes = JSON.parse(JSON.stringify(cafesFromServer));

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
