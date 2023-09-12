"use client";
import React from 'react';

const Select = ({name, label, options, required, onChange, value}) => {
  return (
    <div className=''>
      {
        label &&
        <label className='text-sm font-medium text-gray-500 group-hover:text-gray-900 mb-1 block'>{label}</label>
      }
      <select name={name} required={required} onChange={onChange} value={value} className='w-full block py-3 pl-3 pr-12 rounded-lg border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 h-12'>
        {
          options && options.length >0 && options?.map(option=>(
            <option key={option?.id} value={option?.name}>{option?.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Select