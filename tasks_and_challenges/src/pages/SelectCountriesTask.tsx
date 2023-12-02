import React, { useEffect, useState } from "react";

const countries = [
  { name: "Croatia", value: "CRO", cities: ["Split", "Zagreb"] },
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Denmark", value: "DEN", cities: ["Copenhagen", "Aarborg"] },
];

const SelectCountriesTask = () => {
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {}, []);

  const handleChooseCountryName = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    const chosenCountryObj = countries.find(
      (c) => c.name === event.currentTarget.value
    );
    if (chosenCountryObj != undefined) {
      setCities(chosenCountryObj.cities);
    }
  };

  return (
    <div style={{ marginTop: "120px" }}>
      <h2>Please select a country</h2>
      <select onChange={handleChooseCountryName}>
        {countries.map((country) => {
          return (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>
      <select>
        {cities.map((city) => {
          return <option key={city}>{city}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectCountriesTask;
