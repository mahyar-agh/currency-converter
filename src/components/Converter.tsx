import React, { useCallback, useEffect, useState } from "react";

import styled from "styled-components";
import { AiOutlineSync } from "react-icons/ai";

import Row from "./Row";
import CurrencyInput from "./CurrencyInput";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import useFetch from "../hooks/useFetch";

const KEY = "freec9hAAuaO3bpXscLUjhaBIlgFs10E";
const URL = `http://api.navasan.tech/latest/?api_key=${KEY}&item=usd`;

const StyledConverter = styled.div`
  width: 51rem;
  min-height: 20rem;
  background-color: #fff;
  padding: 1.4rem 1.5rem;
  border-radius: 0.6rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Heading = styled.h2`
  font-size: 2rem;
`;

const StyledConversionResult = styled.span`
  color: green;
  font-size: 1.8rem;
`;

enum Currency {
  USD = "USD",
  IRR = "IRR",
}

interface ConversionRateResponse {
  usd: {
    value: string | number;
  };
}

const Converter: React.FC = () => {
  const [isLoading, conversionRate, errorMessage] =
    useFetch<ConversionRateResponse>(URL);

  const [amount, setAmount] = useState<string>("0");
  const [fromCurrency, setFromCurrency] = useState<Currency>(Currency.USD);
  const [toCurrency, setToCurrency] = useState<Currency>(Currency.IRR);
  const [conversionResult, setConversionResult] = useState<number | null>(null);

  const conversion =
    conversionRate && fromCurrency === Currency.USD
      ? conversionRate.usd.value
      : conversionRate
      ? 1 / +conversionRate.usd.value
      : 1;

  function handleChangeCurrency() {
    if (!conversionRate) return;

    setFromCurrency((prevState) =>
      prevState === Currency.USD ? Currency.IRR : Currency.USD
    );

    setToCurrency((prevState) =>
      prevState === Currency.IRR ? Currency.USD : Currency.IRR
    );
  }

  function handleAmountChange(value: string) {
    setAmount(value);
  }

  const handleSubmitConvert = useCallback(() => {
    if (conversionRate) {
      const result = +amount * +conversion;
      setConversionResult(result);
    }
  }, [conversion, conversionRate, amount]);

  useEffect(() => {
    if (conversionResult) handleSubmitConvert();
  }, [fromCurrency, handleSubmitConvert, conversionResult]);

  if (errorMessage) return <ErrorMessage>{errorMessage}</ErrorMessage>;

  return (
    <StyledConverter>
      <Heading>Currency Converter</Heading>
      <Row type="horizental">
        <CurrencyInput label="From" value={fromCurrency} isReadOnly={true} />
        <Button type="rounded" onClick={handleChangeCurrency}>
          <AiOutlineSync />
        </Button>
        <CurrencyInput label="To" value={toCurrency} isReadOnly={true} />
      </Row>

      <Row>
        <CurrencyInput
          label="Amount"
          value={amount}
          isReadOnly={false}
          inputType="number"
          onAmountChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleAmountChange(e.target.value)
          }
        />
      </Row>
      <Row type="horizental">
        <div>
          {conversionResult !== null && conversionResult !== undefined && (
            <StyledConversionResult>
              Result : {conversionResult} {toCurrency}
            </StyledConversionResult>
          )}
        </div>
        <Button onClick={handleSubmitConvert} disabled={isLoading}>
          {isLoading ? "Loading..." : "Convert"}
        </Button>
      </Row>
    </StyledConverter>
  );
};

export default Converter;
