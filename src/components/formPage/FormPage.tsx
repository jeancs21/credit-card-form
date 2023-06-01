import React from 'react'
import PaymentForm from '../paymentForm/PaymentForm'
import './formPage.styles.css'

const FormPage = () => {
  return (
    <>
        <div className='form-page'>
            <div className='side-bar'></div>
            <PaymentForm />
        </div>
    </>
  )
}

export default FormPage