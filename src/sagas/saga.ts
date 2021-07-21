import { put } from "@redux-saga/core/effects";
import { createSliceSaga, SagaType } from "redux-toolkit-saga";
import { setIncrement, setDecrement, setIncrementByValue, setReset, setSecret } from "../slices/counterSlice";


const counterSliceSaga = createSliceSaga({
    name: 'counter',
    caseSagas: {
        *getIncrement(){
            yield put(setIncrement())
        },
        *getDecrement(){
        yield put(setDecrement())
        },
        *getIncrementByAmount(){
            yield put(setIncrementByValue())
        },
        *getReset(){
            yield put(setReset())
        },
        *getSecret(){
            yield put(setSecret())
        }
    },
    sagaType: SagaType.Watch,
})

export default counterSliceSaga.saga;

export const { getIncrement, getDecrement, getIncrementByAmount, getReset, getSecret } = counterSliceSaga.actions;