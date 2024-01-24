import React, { useEffect, useState } from "react";

const ApiCall = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const Resdata = await res.json();
        setData(Resdata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ol>
        {data.map((v) => (
          <li key={v.id}>{v.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default ApiCall;
