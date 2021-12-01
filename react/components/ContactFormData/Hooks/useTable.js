import { useState, useEffect } from "react";

const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [slicedData, setSlicedData] = useState([]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const slicedData = sliceData(data, page, rowsPerPage);
    setSlicedData([...slicedData]);
  }, [data, setTableRange, page, setSlicedData]);

  return { slicedData, range: tableRange };
};

export default useTable;
