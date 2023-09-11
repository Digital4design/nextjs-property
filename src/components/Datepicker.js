"use client";
import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({name, label}) => {
    const [startDate, setStartDate] = useState(new Date()); 
    return (
        <div className=''>
            <label className='text-sm font-medium text-gray-500 group-hover:text-gray-900 mb-1 block'>{label}</label>
            <DatePicker name={name} selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    )
}

export default Datepicker