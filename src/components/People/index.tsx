import React from "react";
import { useQuery } from "react-query";
import Person from "./person";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people");
  return res.json();
};

const People: React.FC = () => {
  const { data, status } = useQuery("people", fetchPeople);
  console.log(data, status);
  return (
    <div>
      <h2>People</h2>
      {status === "error" && <div> Error fetching data</div>}
      {status === "loading" && <div> Loading data...</div>}
      {status === "success" &&
        data.results?.map((person: any) => {
          return <Person person={person} key={person.name} />;
        })}
    </div>
  );
};

export default People;
