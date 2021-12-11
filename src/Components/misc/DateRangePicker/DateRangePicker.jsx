import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import * as locales from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateComponent = () => {
/*   const handleSelect = (ranges) => {
    console.log(ranges);
     {
       selection: {
         startDate: [native Date Object],
         endDate: [native Date Object],
       }
     }
  }; */
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2),
      key: 'selection',
    },
  ]);
  return (
    <DateRange
      editableDateInputs={false}
      onChange={(item) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      locale={locales.pt}
      disabledDates={['0']}
      minDate={addDays(new Date(), 0)}
      maxDate={addDays(new Date(), 60)}
      dateDisplayFormat="dd/MMM/yyyy"

    />
  );
};

export default DateComponent;
