import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Paginate from "../Pagination";
import Person from "./person";

const fetchPeople = async (props: any) => {
  const page = props.queryKey[1];
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

const People: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["people", page], fetchPeople, {
    staleTime: 2000,
    keepPreviousData: true,
    onSettled: (data, err) => {
      if (err) {
        console.log("Data fetch error");
      }
    },
    onSuccess: () => {
      console.log("Data fetched successfully!");
    },
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>People</h2>
        {status === "success" && (
          <Paginate
            currentPageCount={page}
            totalDataCount={data.count}
            setPage={setPage}
          />
        )}
      </div>
      {status === "error" && <div> Error fetching data</div>}
      {status === "loading" && <div> Loading data...</div>}
      {status === "success" && (
        <>
          {data.results?.map((person: any) => {
            return <Person person={person} key={person.name} />;
          })}
          <div style={{ textAlign: "end", marginBottom: 10 }}>
            <Paginate
              currentPageCount={page}
              totalDataCount={data.count}
              setPage={setPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default People;
