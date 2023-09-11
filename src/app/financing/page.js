"use client";
import React from 'react'
import Row from '../../components/Row';
import Col from '../../components/Col';
import Fields from '@/components/Fields';
import Datepicker from '@/components/Datepicker';
import GroupButton from '@/components/GroupButton';
import { groupButton, interestCapitalization } from '../constants';
import Links from '@/components/Links';

const Financing = () => {
  return (
    <div>
      <h1 className='font-semibold capitalize text-lg lg:text-2xl mb-5'>Financing</h1>

      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 lg:-ml-8 lg:-mr-8 lg:px-8">
        <li className="mr-6">
            <a href="#" aria-current="page" className="inline-block text-teal-500 font-bold py-2 rounded-t-lg border-b-2 border-solid border-teal-500 active">Debt 1</a>
        </li>
        <li className="mr-6">
            <a href="#" className="inline-block py-2 rounded-t-lg text-gray-300 hover:text-gray-500">Add Debt</a>
        </li>
    </ul>

    <form>
      <Row className="items-end">
        <Col className="w-9/12 sm:w-1/2 mt-4">
          <Fields type="text" name="lender" id="lender" label="Lender" placeholder="" />
        </Col>
        <Col>
          <button type="button" className="text-black ring-1 ring-inset ring-gray-300 transition hover:ring-teal-500 hover:bg-teal-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-black font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center h-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </Col>
      </Row>
      <Row className="items-end">
        <Col className="w-full md:w-1/2 mt-4">
          <Row>
            <Col className='w-full sm:w-1/2'>
              <Fields type="number" name="loan-amount" id="loan-amount" label="Loan Amount" placeholder="" iconAsText="$" iconPlacement="left" />
            </Col>
            <Col className='w-full sm:w-1/2 mt-4 lg:mt-0'>
              <Datepicker name="start-date" label="Start Date" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="items-end">
        <Col className="w-full md:w-2/5 mt-4">
          <GroupButton buttons={groupButton} label="Type of Rate" />
        </Col>
      </Row>
      <Row className="items-end">
        <Col className="w-full md:w-2/5 mt-4">
          <Fields type="text" name="interest-rate" id="interest-rate" label="Interest Rate" iconAsText="%" iconPlacement="right" />
        </Col>
      </Row>
      <Row>
        <Col className='mt-4 w-full md:w-1/2'>
          <GroupButton buttons={interestCapitalization} label="Interest Capitalization" />
        </Col>
        <Col className="w-full md:w-1/2 mt-4">
          <Fields type="number" name="interest-only-period" id="interest-only-period" label="Interest Only Period" iconAsText="months" iconPlacement="right" />
        </Col>
      </Row>
      <Row>
        <Col className="w-full md:w-1/3 mt-4">
          <Fields type="number" name="term" id="term" label="Term" icon="" />
        </Col>
        <Col className="w-full md:w-1/3 mt-4">
          <Fields type="number" name="amortization" id="amortization" label="Amortization" icon="" />
        </Col>
        <Col className="w-full md:w-1/3 mt-4">
          <Fields type="number" name="financing-fees" id="financing-fees" label="Financing Fees" iconAsText="$" iconPlacement="right" />
        </Col>
      </Row>
    </form>
    
    <Col className="px-0 w-full mt-24 w-full flex items-center justify-end gap-4">
      <Links name="continue" text="Back" className="button-as-text" path="/rent-roll" />
      <Links name="continue" text="Continue" className="button" path="/thank-you" />
    </Col>
  </div>
  )
}

export default Financing;