import Select from '@/components/Select';
import React from 'react'
import {rollType, tableData} from '../constants';
import Button from '../../components/Button';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Links from '@/components/Links';

const RentRoll = () => {
  return (
    <div>
      <Row className='mb-5'>
        <Col className="w-full md:w-1/3 lg:w-1/2">
          <h1 className='font-semibold capitalize text-lg lg:text-2xl'>Rent Roll</h1>
        </Col>
        <Col className="w-full md:w-2/3 lg:w-1/2 flex flex-wrap items-center justify-start md:justify-end gap-4">
          <div className="flex flex-wrap items-center font-bold text-sm text-teal-950 hover:text-teal-500 cursor-pointer group transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 mr-2 group-hover:stroke-teal-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Export Template
          </div>
          <div className="flex flex-wrap items-center font-bold text-sm text-teal-950 hover:text-teal-500 cursor-pointer group transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 mr-2 group-hover:stroke-teal-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Import File
          </div>
        </Col>
      </Row>


      <div className='table-wrapper'>
        <table>
          <thead>
            <tr>
              <th className='text-start'>ID</th>
              <th className='text-start'>Type</th>
              <th className='text-end'>Rent</th>
              <th>Width (ft)</th>
              <th>Length (ft)</th>
              <th>Market Rent</th>
              <th>Status</th>
              <th>SQFT/SQM</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData && tableData.length > 0 && tableData.map((data, index)=>(
                <tr key={index} className={index == tableData.length-1 ? 'last-row' :''}>
                  <td className='text-start'>{data.id}</td>
                  <td className='text-start'>
                    {
                      data.id != '' &&
                      <Select name="rent-roll-type" label="" options={rollType} />
                    }
                  </td>
                  <td className='text-end'>{data.rent}</td>
                  <td className='text-center'>{data.width}</td>
                  <td className='text-center'>{data.length}</td>
                  <td className='text-center'></td>
                  <td className='text-center'>{data.status}</td>
                  <td className='text-center'>{data.sqrt}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      
      <Col className="px-0 w-full mt-24 w-full flex items-center justify-end gap-4">
        <Links name="continue" text="Back" className="button-as-text" path="/" />
        <Links name="continue" text="Continue" className="button" path="/financing" />
      </Col>
    </div>
  )
}

export default RentRoll;