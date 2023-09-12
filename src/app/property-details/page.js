"use client";
import React, {useState} from 'react'
import Fields from '@/components/Fields';
import Select from '@/components/Select';
import Datepicker from '@/components/Datepicker';
import Row from '../../components/Row';
import Col from '../../components/Col';
import {countries, cities} from '../constants';
import Button from '../../components/Button';
import { useRouter } from 'next/navigation';

const PropertyDetails = () => {
  const router = useRouter();

  const [details, setDetails] = useState({property_name:'', address_line:'', country:'', city:'', zip:'', date:new Date()});

const onChange = (e) => {
  let {name, value} = e.target;
  setDetails({...details, [name]:value});
}

const gotoRentRoll = (e) => {
  e.preventDefault();
  details?.property_name != "" && details?.address_line != "" && details?.country != "" && details?.city != "" && details?.zip != "" && details?.date != "" 
  ?  router.push('/rent-roll')
  :
  'you are not redirecting';
  console.log(details, 'this is details');
}


  return (
    <form onSubmit={gotoRentRoll}>
      <Row>
        <Col>
          <h1 className='font-semibold capitalize text-lg lg:text-2xl mb-5'>Property Details</h1>
        </Col>
      </Row>
      <Row>
        <Col className="w-full mt-4">
          <Fields type="text" name="property_name" id="property_name" label="Property name" placeholder="" icon="" required="required" onChange={(e)=>onChange(e)} />
        </Col>
        </Row>
        <Row>
        <Col className="w-full mt-4">
          <Fields type="text" name="address_line" id="address_line" label="Address line" placeholder="" required="required" onChange={(e)=>onChange(e)} />
        </Col>
      </Row>
      <Row>
        <Col className="w-full md:w-1/3 mt-4">
          <Select name="country" label="Country" options={countries} required="required" onChange={(e)=>onChange(e)} />
        </Col>
        <Col className="w-full md:w-1/3 mt-4">
          <Select name="city" label="City" options={cities} required="required" onChange={(e)=>onChange(e)} />
        </Col>
        <Col className="w-full md:w-1/3 mt-4">
          <Fields type="text" name="zip" label="Zip/Postal Code" placeholder="" required="required" onChange={(e)=>onChange(e)} />
        </Col>
      </Row>
      <Row>
        <Col className="w-full mt-4">
          <Datepicker name="date" label="Close Date"  />
        </Col>
      </Row>
      <Row>
        <Col className="w-full text-end mt-24">
          <Button type="submit" name="continue" text="Continue" className="button" />
        </Col>
      </Row>
    </form>
  )
}

export default PropertyDetails;