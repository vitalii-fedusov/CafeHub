import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Chip, Stack } from "@mui/material";
import { Card } from "../../Components/Card/Card";
import { Filters } from "../../Components/Filters/Filters";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import * as cafesActions from "../../features/cafes/cafesSlice";

export const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const services = searchParams.getAll("services");

  const { cafes, loading, error } = useAppSelector((state) => state.cafes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cafesActions.init());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 500);
  }, [page]);

  const itemsPerPage = 9;
  const itemOffset = (page - 1) * itemsPerPage;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = cafes.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cafes.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;

    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev.toString());

      newParams.set("page", newPage.toString());

      return newParams;
    });
  };

  function toggleService(service: string) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      const newServices = services.includes(service)
        ? services.filter((ch) => ch !== service)
        : [...services, service];

      params.delete("services");
      newServices.forEach((ch) => params.append("services", ch));
      params.set("page", "1");

      return params;
    });
  }

  return (
    <>
      <SearchBar />
      <Filters />

      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className="main__cards">
          {!!services.length && (
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              {services.map((service) => (
                <Chip
                  key={service}
                  label={service}
                  color="success"
                  variant="outlined"
                  onDelete={() => toggleService(service)}
                />
              ))}
            </Stack>
          )}
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <h1>{`Cafe amount is: ${cafes.length}`}</h1>
              <div className="main__cards-container">
                {currentItems.map((cafe) => (
                  <Card card={cafe} key={cafe.id} />
                ))}
              </div>
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
            </>
          )}
        </div>
      )}
    </>
  );
};
