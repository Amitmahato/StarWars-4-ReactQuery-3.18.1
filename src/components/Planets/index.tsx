import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data, status);
  return (
    <div>
      <h2>Planets</h2>
      {status === "error" && <div> Error fetching data</div>}
      {status === "loading" && <div> Loading data...</div>}
      {status === "success" &&
        data.results?.map((planet: any) => {
          return <Planet planet={planet} key={planet.name} />;
        })}
    </div>
  );
};

export default Planets;
