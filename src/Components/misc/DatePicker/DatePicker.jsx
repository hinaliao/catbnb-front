/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker, { registerLocale } from 'react-datepicker';
import { addDays } from 'date-fns';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';

registerLocale('pt', pt);

const [userWeekDays, setUserWeekDays] = useState([]);

useEffect(() => {
  axios
    .get('https://localhost/5050/61b510263e84bcc1b26f59df')
    .then((res) => {
      const { weekDays } = res.data;
      setUserWeekDays(weekDays);
    });
}, []);

const Calendar = () => {
  const [dataEscolhida, setDataEscolhida] = useState(new Date());
  console.log(dataEscolhida.getDay());

  function handleClick(e) {
    e.preventDefault();
    console.log('Olá, mundo!');
  }

  return (
    <>
      <DatePicker
        selected={dataEscolhida}
        onChange={(dia) => setDataEscolhida(dia)}
        minDate={addDays(new Date(), 0)}
        maxDate={addDays(new Date(), 60)}
        dateDisplayFormat="dd/MMM/yyyy"
        filterDate={(userWeekDays) => userWeekDays.getDay() && userWeekDays.getDay()}
        locale="pt"
        inline
      />
      <Button type="submit" onClick={handleClick}>Consultar data</Button>
    </>
  );
};

export default Calendar;
