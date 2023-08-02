import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    name:'',
    onName:''
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.count += 1;
          },
        decrement(state) {
            state.count -= 1

        },

        changeName(state, action){

            state.name = action.payload;

        },

        onCHnageNmae(state,action){
            state.onName = action.payload;
        }

    }
});

export default counterSlice.reducer;
export const { increment, decrement ,changeName,onCHnageNmae} = counterSlice.actions;