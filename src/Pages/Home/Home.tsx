import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Chip, Stack } from "@mui/material";
import { Card } from "../../Components/Card/Card";
import { Filters } from "../../Components/Filters/Filters";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import cafesFromServer from "../../api/cafes.json";
import { Cafe } from "../../Types/Cafe";
// import { getCafes } from "../../api/cafe";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { useAppDispatch } from "../../app/hooks";
// import { actions as cafesActions } from "../../features/cafes/cafesSlice";

export const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const cafes: Cafe[] = JSON.parse(JSON.stringify(cafesFromServer));
  const services = searchParams.getAll("services");

  // const { cafes, loading, error } = useAppSelector((state) => state.cafes);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   getCafes()
  //     .then((cafesFromServer) => {
  //       dispatch(cafesActions.set(cafesFromServer));
  //       // console.log(cafesFromServer);
  //     })
  //     .catch((e) => {
  //       throw new Error(e);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('https://762d-178-213-6-199.ngrok-free.app/cafes', {
  //     method: 'GET',
  //     headers: {
  //       'Access-Control-Allow-Origin': 'http://localhost:3000',
  //       "Content-Type": "application/json; charset=UTF-8",
  //       'ngrok-skip-browser-warning': '12454',
  //     }
  //   })
  //     .then(cafesFromServer => cafesFromServer.json())
  //     .then(data => console.log(data));
  // });

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

      <div className="main__cards">
        {!!services.length && (
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: "wrap",
              gap: '8px',
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
      </div>
    </>
  );
};
