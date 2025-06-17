import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <Outlet context={{ query, setQuery, books, setBooks, startIndex, setStartIndex }} />
  );
}
export default AppLayout;
