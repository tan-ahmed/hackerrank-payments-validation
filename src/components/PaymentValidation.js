import React, { useState } from 'react'
import './PaymentValidation.css'

const PaymentValidation = () => {
  const [, setCardNumber] = useState(0)
  const [, setCardName] = useState('')
  const [, setCardMonth] = useState(0)
  const [, setCardYear] = useState(0)
  const [, setCardCvv] = useState(0)
  const [isCardNameValid, setIsCardNameValid] = useState(false)
  const [isCardNumberValid, setIsCardNumberValid] = useState(false)
  const [isCardMonthValid, setIsCardMonthValid] = useState(false)
  const [isCardYearValid, setIsCardYearValid] = useState(false)
  const [isCardCvvValid, setIsCardCvvValid] = useState(false)

  const handleCardNumber = (e) => {
    const cardNumberRegex = new RegExp(/^[0-9]{16}$/)
    if (!cardNumberRegex.test(e.target.value)) {
      setIsCardNumberValid(false)
      return
    }
    setIsCardNumberValid(true)
    setCardNumber(e.target.value)
  }

  const handleCardName = (e) => {
    const cardNameRegex = new RegExp(/^[a-z A-Z]+$/)
    if (!cardNameRegex.test(e.target.value)) {
      setIsCardNameValid(false)
      return
    }
    setIsCardNameValid(true)
    setCardName(e.target.value)
  }

  const handleCardMonth = (e) => {
    const cardMonthRegex = new RegExp(/^(0[1-9]|1[0-2])$/)
    if (!cardMonthRegex.test(e.target.value)) {
      setIsCardMonthValid(false)
      return
    }
    setIsCardMonthValid(true)
    setCardMonth(e.target.value)
  }

  const handleCardCVV = (e) => {
    const cardCvvRegex = new RegExp(/^[0-9]{3}$/)
    if (!cardCvvRegex.test(e.target.value)) {
      setIsCardCvvValid(false)
      return
    }
    setIsCardCvvValid(true)
    setCardCvv(e.target.value)
  }

  const handleCardYear = (e) => {
    const currentYear = new Date().getFullYear()
    if (e.target.value < currentYear || e.target.value > currentYear + 3) {
      setIsCardYearValid(false)
      return
    }

    const cardYearRegex = new RegExp(/^[0-9]{4}$/)
    if (!cardYearRegex.test(e.target.value)) {
      setIsCardYearValid(false)
      return
    }
    setIsCardYearValid(true)
    setCardYear(e.target.value)
  }

  const isSubmitBtnDisabled = () => {
    if (
      isCardCvvValid &&
      isCardMonthValid &&
      isCardNameValid &&
      isCardNumberValid &&
      isCardYearValid
    ) {
      return false
    }
    return true
  }

  return (
    <div className="mt-30 layout-column justify-content-center align-items-center">
      <div className="card outlined" style={{ width: '650px' }}>
        <div data-testid="debit-card">
          <h3 style={{ textAlign: 'center' }}>Card Details</h3>
          <br />
          <div className="debit-card-body">
            <p className="debit-card-bank">Bank Name</p>
            <p className="debit-card-no">XXXXXXXXXXXXXXXX</p>
            <br />
            <div
              style={{ height: '45px', backgroundColor: 'black' }}
              className="debit-card-stripe"
            ></div>
            <p>
              <span className="debit-card-holder-name">HOLDER NAME</span>
              <span className="debit-card-date">MM/YYYY</span>
              <span className="debit-card-cvv">CVV</span>
            </p>
          </div>
        </div>
        <section>
          <div className="pa-50">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="layout-column mb-15">
                <input
                  type="text"
                  placeholder="Card Number"
                  data-testid="cardNumberInput"
                  onChange={handleCardNumber}
                  required
                />
                {isCardNumberValid ? (
                  ''
                ) : (
                  <p className="invalid-text" data-testid="numberInputError">
                    Invalid Card Number
                  </p>
                )}
              </div>
              <div className="layout-column mb-15">
                <input
                  type="text"
                  placeholder="Name On Card"
                  data-testid="nameInput"
                  required
                  onChange={handleCardName}
                />
                {isCardNameValid ? (
                  ''
                ) : (
                  <p className="invalid-text" data-testid="nameInputError">
                    Invalid Card Name
                  </p>
                )}
              </div>
              <div className="flex justify-content-around align-items-center">
                <div className="layout-column mb-30">
                  <input
                    type="number"
                    placeholder="Expiry Month"
                    data-testid="monthInput"
                    required
                    onChange={handleCardMonth}
                  />
                  {isCardMonthValid ? (
                    ''
                  ) : (
                    <p className="invalid-text" data-testid="monthInputError">
                      Invalid Month
                    </p>
                  )}
                </div>
                <div className="layout-column mb-30">
                  <input
                    type="number"
                    placeholder="Expiry Year"
                    data-testid="yearInput"
                    required
                    onChange={handleCardYear}
                  />
                  {isCardYearValid ? (
                    ''
                  ) : (
                    <p className="invalid-text" data-testid="yearInputError">
                      Invalid Year
                    </p>
                  )}
                </div>
                <div className="layout-column mb-30">
                  <input
                    type="number"
                    placeholder="CVV"
                    data-testid="cvvInput"
                    required
                    onChange={handleCardCVV}
                  />
                  {isCardCvvValid ? (
                    ''
                  ) : (
                    <p className="invalid-text" data-testid="cvvInputError">
                      Invalid CVV
                    </p>
                  )}
                </div>
              </div>
              <div className="layout-column mb-30">
                <button
                  type="submit"
                  className="mx-0"
                  data-testid="submitButton"
                  disabled={isSubmitBtnDisabled()}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PaymentValidation
