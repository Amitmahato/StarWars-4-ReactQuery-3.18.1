import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Paginate from "../Pagination";
import Planet from "./Planet";

const fetchPlanets = async (props: any) => {
  const page = props.queryKey[1];
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["planets", page], fetchPlanets, {
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
        <h2>Planets</h2>
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
        <div>
          {data.results?.map((planet: any) => {
            return <Planet planet={planet} key={planet.name} />;
          })}
          <div style={{ textAlign: "end", marginBottom: 10 }}>
            <Paginate
              currentPageCount={page}
              totalDataCount={data.count}
              setPage={setPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Planets;
