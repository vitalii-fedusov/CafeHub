import React from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { Rating } from "@mui/material";
import girlFaceAvatar from "../../assets/images/girl-face-avatar.png";

export const CafeTestimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      src: girlFaceAvatar,
      name: "Олена",
      commentData: "3 дні тому",
      rating: 4,
      commentText:
        // eslint-disable-next-line
        "Це кафе вражає не тільки своїм затишним інтер`єром, а й широким вибором кавових напоїв і десертів. Обслуговуючий персонал уважний і доброзичливий, створюючи приємну атмосферу для відвідувачів.",
    },
    {
      id: 2,
      src: girlFaceAvatar,
      name: "Олена",
      commentData: "3 дні тому",
      rating: 4,
      commentText:
        // eslint-disable-next-line
        "Це кафе вражає не тільки своїм затишним інтер`єром, а й широким вибором кавових напоїв і десертів. Обслуговуючий персонал уважний і доброзичливий, створюючи приємну атмосферу для відвідувачів.",
    },
    {
      id: 3,
      src: girlFaceAvatar,
      name: "Олена",
      commentData: "3 дні тому",
      rating: 4,
      commentText:
        // eslint-disable-next-line
        "Це кафе вражає не тільки своїм затишним інтер`єром, а й широким вибором кавових напоїв і десертів. Обслуговуючий персонал уважний і доброзичливий, створюючи приємну атмосферу для відвідувачів.",
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);

  const itemsPerPage = 9;
  const itemOffset = (page - 1) * itemsPerPage;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = testimonials.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;

    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev.toString());

      newParams.set("page", newPage.toString());

      return newParams;
    });
  };

  return (
    <div className="cafe-info__testimonials-section testimonials">
      {currentItems.map((testimonial) => (
        <div className="testimonials__comment comment" key={testimonial.id}>
          <img
            src={testimonial.src}
            alt="girl-face-avatar"
            className="comment__image"
          />
          <ul className="comment__list">
            <li className="comment__item">
              <h4 className="comment__name">{testimonial.name}</h4>
            </li>
            <li className="comment__item">
              <p className="comment__data">{testimonial.commentData}</p>
            </li>
            <li className="comment__item">
              <Rating value={4.5} readOnly precision={0.5} />
            </li>
            <li className="comment__item">
              <p className="comment__text">{testimonial.commentText}</p>
            </li>
          </ul>
        </div>
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />

      <button className="search-bar__search testimonials__button" type="button">
        Додати відгук
      </button>
    </div>
  );
};
