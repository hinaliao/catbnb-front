import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker, { registerLocale } from 'react-datepicker';
import { addDays } from 'date-fns';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';

registerLocale('pt', pt);

const Calendar = () => {
  const [dataEscolhida, setDataEscolhida] = useState(new Date());
  console.log(dataEscolhida.getDay());
  const [userWeekDays/* , setUserWeekDays */] = useState();
  const [/* foundUsers, */setFoundUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/auth/${userWeekDays}`)
      .then((res) => {
        setFoundUsers(res.data);
      });
  }, [userWeekDays]);

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
      //  filterDate={(userWeekDays) => userWeekDays.getDay() && userWeekDays.getDay()}
        locale="pt"
        inline
      />
      <Button type="submit" onClick={handleClick}>Consultar data</Button>
    </>
  );
};

export default Calendar;
