import React, { useState } from 'react';
import { countMonthTotal, countTotal } from '../../helpers/functions';
import { data, monthsTotals } from '../../mockData/storeData';
import './Table.css';

const Table = () => {
  const [storeData, setStoreData] = useState(data);
  const [monthTotals, setMonthTotal] = useState(monthsTotals);
  // const [grandTotal, setGrandData] = useState(0);
  console.log(monthTotals, 'monthTotals');

  function handleChange(e) {
    const newBudget = e.target.value;

    const [storeToChange] = storeData.filter(
      (store) => store.store.name === e.target.name
    );

    const [monthToChange] = storeToChange.months.filter(
      (month) => month.id === e.target.id
    );

    const changedMonth = { ...monthToChange, value: newBudget };

    const newMonthArray = (array, object) => {
      return array.map((obj) => {
        if (obj.id === object.id) {
          return object;
        }
        return obj;
      });
    };

    const newmonths = newMonthArray(storeToChange.months, changedMonth);

    const finalStoreData = () => {
      return storeData.map((item) => {
        if (item.store.id === storeToChange.store.id) {
          return {
            ...storeToChange,
            months: newmonths,
            total: countTotal(newmonths),
          };
        } else return item;
      });
    };

    const newMonthsTotal = (monthTotals, monthToChange) => {
      const totalPerMonth = countMonthTotal(storeData, monthToChange.name);
      return monthTotals.map((obj) => {
        if (obj.name === monthToChange.name) {
          return { ...obj, value: totalPerMonth };
        } else return obj;
      });
    };

    setStoreData(() => finalStoreData());
    setMonthTotal(() => newMonthsTotal(monthTotals, monthToChange));
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="header-label">Store #</th>
          {storeData[0].months.map((item) => (
            <th className="header-label" key={item.id}>
              {item.name}
            </th>
          ))}
          <th className="header-label">Store Total</th>
        </tr>
      </thead>
      <tbody>
        {storeData.map((store) => (
          <tr key={store.store.id}>
            <td>{store.store.name}</td>
            {store.months?.map((month) => (
              <td key={month.id}>
                <input
                  type="text"
                  id={month.id}
                  name={store.store.name}
                  value={month.value}
                  onChange={(e) => handleChange(e)}
                />
              </td>
            ))}
            <td>{store.total ? store.total : 0}</td>
          </tr>
        ))}
        <tr>
          <td>Months Total</td>
          {monthTotals.map((obj) => (
            <td style={{ fontWeight: 'bold' }} key={obj.name}>
              {obj.value}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
