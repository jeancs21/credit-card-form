import React, { useState } from 'react'
import './paymentForm.styles.css'
import CreditCard from '../creditCard/CreditCard'

const PaymentForm = () => {

    const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
    const [cardholder, setCardHolder] = useState("Jane Kennedy")
    const [cardMonth, setCardMonth] = useState("00")
    const [cardYear, setCardYear] = useState("00")
    const [cardCvc, setCardCvc] = useState("000")

    const [isFlipped, setIsFlipped] = useState(false);


  return (
    <>
        <div className='credit-card__form-container'>
            <div className='credit-card'>
                <CreditCard
                    cardNumber={cardNumber}
                    cardholder={cardholder}
                    cardMonth={cardMonth}
                    cardYear={cardYear}
                    cardCvc={cardCvc}
                    isFlipped={isFlipped}
                />
            </div>
            <div className='form-container'>
                <form className='form'>
                    <div className='form__card-number'>
                        <label>Card number</label>
                        <input type='text' placeholder='e.g. 1234 5678 9123 0000'
                            onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 '))}
                            maxLength={16}
                        />
                    </div>

                    <div className='form__cardholder'>
                        <label>Caldholder name</label>
                        <input type='text' placeholder='e.g. Jane Kennedy'
                            onChange={(e) => setCardHolder(e.target.value)}
                        />
                    </div>


                    <div className='form__bottom'>
                        <div className='form__bottom--exp-date'>
                            <label>Exp. Date (MM/YY)</label>
                            <div>
                                <input type='text' placeholder='MM'
                                    onChange={(e) => setCardMonth(e.target.value)}
                                    maxLength={2}
                                />
                                <input type='text' placeholder='YY'
                                    onChange={(e) => setCardYear(e.target.value)}
                                    maxLength={2}
                                />
                            </div>
                        </div>

                        <div className='form__bottom--cvc'>
                            <label>CVC</label>
                            <input type='text' className='cvc-input' placeholder='e.g. 123'
                                onChange={(e) => setCardCvc(e.target.value)}
                                maxLength={3}
                                onFocus={() => setIsFlipped(true)}
                                onBlur={() => setIsFlipped(false)}
                            />
                        </div>

                    </div>

                    <button type='submit'>Confirm</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default PaymentForm