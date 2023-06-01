import React, { FunctionComponent, useState } from 'react'
import './creditCard.styles.css'

type Props = {
  cardNumber: string,
  cardholder: string,
  cardMonth: string,
  cardYear: string,
  cardCvc: string,
  isFlipped: boolean
}

const CreditCard:FunctionComponent<Props> = (props) => {

  const defaultValues = {
    cardNumber: "0000 0000 0000 0000"
  }

  const [cardValues, setCardValues] = useState(defaultValues)

  return (
    <>
      <div className={`card-container ${props.isFlipped ? 'flipped' : ''} slide-in`}>
        <div className='card float'>
          <div className='card-inner'>
            <div className='card-front'>
              <div className='card-header'>
                <div className='circle'></div>
                <div className='small-dot'></div>
              </div>
              <div className='card__card-number'>
                {props.cardNumber}
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