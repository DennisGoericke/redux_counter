import React from "react";
import { Hook } from "../hooks";
import {
  getIncrement,
  getDecrement,
  getIncrementByAmount,
  getReset,
  getSecret,
} from "../sagas/saga";
import { Button } from "@material-ui/core";

export const Counter = () => {
  const count = Hook.useAppSelector((state) => state.counter.countValue);
  const showSecret = Hook.useAppSelector((state) => state.counter.showSecret);
  const dispatch = Hook.useAppDispatch();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => dispatch(getIncrement())}
      >
        INCREMENT
      </Button>
      <Button
        variant="contained"
        color="secondary"
        disableElevation
        onClick={() => dispatch(getDecrement())}
      >
        DECREMENT
      </Button>
      <Button
        variant="outlined"
        disableElevation
        onClick={() => dispatch(getIncrementByAmount())}
      >
        INCREMENT BY 30
      </Button>
      <Button variant="outlined" onClick={() => dispatch(getReset())}>
        {" "}
        RESET TO 0{" "}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => dispatch(getSecret())}
      >
        SHOW SECRET TEXT
      </Button>
      <h1 hidden={showSecret}> MONEY IN BANK ACCOUNT: {count}€</h1>
    </div>
  );
};

export default Counter;
