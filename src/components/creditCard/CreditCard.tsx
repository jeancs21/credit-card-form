import React, { FunctionComponent, useState } from 'react'
import './creditCard.styles.css'
import { getCardLogo } from '../utils/cardCompany.util'

type Props = {
  cardNumber: string,
  cardholder: string,
  cardMonth: string,
  cardYear: string,
  cardCvc: string,
  isFlipped: boolean
}

const CreditCard:FunctionComponent<Props> = (props) => {

  return (
    <>
      <div className={`card-container ${props.isFlipped ? 'flipped' : ''} slide-in`}>
        <div className='card float'>
          <div className='card-inner'>
            <div className='card-front'>
              <div className='card-header'>
                <div className='dots'>
                  <div className='circle'></div>
                  <div className='small-dot'></div>
                </div>
                <div className={`${getCardLogo(props.cardNumber) ? 'payment-method' : 'payment-method--hidden'}`}>
                  <img src={getCardLogo(props.cardNumber)} alt='logo' />
                </div>
              </div>
              <div className='card__card-number'>
                {props.cardNumber.replace(/\s/g, '').replace(/(.{4})/g, '$1 ')}
              </div>
              <div className='card__card-bottom'>
                <div className='card__cardholder'>
                  {props.cardholder}
                </div>
                <div className='card__card-exp-date'>
                  {`${props.cardMonth}/${props.cardYear}`}
                </div>
              </div>
            </div>
            <div className='card-back'>
              <div className='bar'></div>
              <div className='cvc-bar'>{props.cardCvc}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreditCard