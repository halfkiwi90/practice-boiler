import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { useCountPageSlice } from './slice';

export function HomePage() {
  const dispatch = useAppDispatch();
  const { actions } = useCountPageSlice();
  const { increment, decrement, changeAmount } = actions;
  const counter = useAppSelector(state => state.counter);
  const incrementClick = () => {
    dispatch(increment());
  };
  const decrementClick = () => {
    dispatch(decrement());
  };
  const amountChange = e => {
    const amount = parseInt(e.target.value);
    dispatch(changeAmount(amount));
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <label htmlFor="amount">amount: </label>
        <input
          value={counter.amount}
          onChange={e => {
            amountChange(e);
          }}
          name="amount"
          type="number"
        ></input>
      </div>
      <Button onClick={incrementClick}>increase</Button>
      <Button onClick={decrementClick}>decrease</Button>
      <div>count:{counter.value}</div>
    </>
  );
}

const Button = styled.button`
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.25 0.5 rem;
`;
