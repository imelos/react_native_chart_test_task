import React from 'react';
import {createContext} from 'react';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate() {
  const start = new Date();
  const end = new Date(start.getFullYear(), 11, 31);
  const randomTimestamp =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTimestamp);
}

function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

function generateRandomDates() {
  const randomDates = [];
  for (let i = 0; i < 4; i++) {
    const randomMonth = getRandomInt(0, 11);
    const date = new Date();
    date.setMonth(randomMonth);

    const monthName = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(
      date,
    );
    const randomDate = formatDate(getRandomDate());
    randomDates.push({
      id: i + 1,
      monthName,
      date: randomDate,
      value: getRandomInt(50, 100),
      details: [
        {title: 'Measurement Month', value: monthName},
        {title: 'Measurement Date', value: randomDate},
        {title: 'Height', value: getRandomInt(0, 100)},
        {title: 'Weight', value: getRandomInt(0, 100)},
        {title: 'Body Fat Percentage', value: getRandomInt(0, 100)},
        {title: 'Fat weight', value: getRandomInt(0, 100)},
        {title: 'Lean Body Mass', value: getRandomInt(0, 100)},
        {title: 'Body Mass Index', value: getRandomInt(0, 100)},
        {title: 'Fitness Score', value: getRandomInt(0, 100)},
        {title: 'Wellness Score', value: getRandomInt(0, 100)},
      ],
    });
  }
  return randomDates;
}

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const randomDates = generateRandomDates();
  // console.log(randomDates);
  return (
    <DataContext.Provider value={randomDates}>{children}</DataContext.Provider>
  );
};
