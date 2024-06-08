import React, { useEffect } from "react";
import * as commentsActions from "../../features/comments/commentsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const MyComments: React.FC = () => {
  const dispatch = useAppDispatch();
  const { myComments, loading, error } = useAppSelector(
    (state) => state.comments
  );

  useEffect(() => {
    dispatch(commentsActions.initMyComments());
  }, [dispatch]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      {myComments.length ? (
        <h1>{`I left ${myComments.length} comments!`}</h1>
      ) : (
        <h1>There are no comments yet</h1>
      )}
    </>
  );
};
