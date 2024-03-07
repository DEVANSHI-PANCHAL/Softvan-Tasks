import React from 'react';
import { Table } from 'flowbite-react';

const LoaderRows = () => {
  const loaderRowsCount = 5;

  return (
    <>
      {[...Array(loaderRowsCount)].map((_, index) => (
        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          {[...Array(9)].map((_, columnIndex) => (
            <Table.Cell key={columnIndex} className="loader-row">
              &nbsp;
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </>
  );
};

export default LoaderRows;
