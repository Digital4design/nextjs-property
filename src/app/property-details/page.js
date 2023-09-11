"use client";
import React from 'react'
import Fields from '@/components/Fields';
import Select from '@/components/Select';
import Datepicker from '@/components/Datepicker';
import Row from '../../components/Row';
import Col from '../../components/Col';
import {countries, cities} from '../constants';
import Links from '../../components/Links';

const PropertyDetails = () => {
  return (
    <form>
      <Row>
        <Col>
          <h1 className='font-semibold capitalize text-lg lg:text-2xl mb-5'>Property Details</h1>
        </Col>
      </Row>
      <Row>
        <Col className="w-full mt-4">
          <Fields type="text" name="property_name" id="property_name" label="Property name" placeholder="" icon="" />
        </Col>
        </Row>
        <Row>
        <Col className="w-full mt-4">
          <Fields type="text" name="address_line" id="address_line" label="Address line" placeholder="" />
        </Col>
      </Row>
      <Row>
        <Col className="w-full md:w-1/3 mt-4">
          <Select name="country" label="Country" options={countries} />
        </Col>
        <Col className="w-full md:w-1/3 mt-4">
          <Select name="city" label="City" options={cities} />
        </Col>
        <Col className="w-full md:w-1/3 mt-4">
          <Fields type="text" name="zip" label="Zip/Postal Code" placeholder="" />
        </Col>
      </Row>
      <Row>
        <Col className="w-full mt-4">
          <Datepicker name="date" label="Close Date" />
        </Col>
      </Row>
      <Row>
        <Col className="w-full text-end mt-24">
          <Links type="submit" name="continue" text="Continue" className="button" path="/rent-roll" />
        </Col>
      </Row>
    </form>
  )
}

export default PropertyDetails;