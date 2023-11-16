import React from "react";
import { Pagination, Stack } from "@mui/material";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function PaginationsContainer() {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (event, pageNumber) => {
    event.preventDefault();
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) {
    return null;
  }

  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end" mt={4}>
      <Pagination
        count={pageCount}
        page={page}
        onChange={handlePageChange}
        size="small"
        color="primary"
        boundaryCount={2}
        siblingCount={1}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
}

export default PaginationsContainer;
