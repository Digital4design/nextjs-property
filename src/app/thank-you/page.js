import React from 'react'
import Col from '@/components/Col';
import Links from '@/components/Links';

const ThankYou = () => {
  return (
    <>
    <h1 className='font-semibold capitalize text-lg lg:text-2xl mb-5'>Thank You!</h1>
    <Col className="px-0 w-full mt-24 w-full flex items-center justify-end gap-4">
      <Links name="continue" text="Back" className="button-as-text" path="/financing" />
      {/* <Links name="continue" text="Continue" className="button" path="/thank-you" /> */}
    </Col>
    </>
  )
}

export default ThankYou;