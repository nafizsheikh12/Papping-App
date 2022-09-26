import React, { useState } from "react";
import { DatePicker } from 'rsuite';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import './InputDatePicker.scss'

const predindRange = [
 
]

const InputDatePicker = () => {
  const [value, setvalue] = useState(null);
  console.log(value)
  return (
    <div className="field">
       <DatePicker
        ranges={[
        {
          label: 'yesterday',
          value: addDays(new Date(), -1)
        },
        {
          label: 'today',
          value: new Date()
        },
        {
          label: 'Prev Day',
          closeOverlay: false,
          value: date => {
            return subDays(date, 1);
          }
        }
      ]}
      onChange={setvalue}
      style={{ width: 200 }}
    />
    </div>
  );
};

export default InputDatePicker;
