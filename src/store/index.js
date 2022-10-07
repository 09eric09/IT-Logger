import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialLogState = {logs:[]};

const logSlice = createSlice({
    name:'log',
    initialState: initialLogState,
    reducers: {
        getLogs(){}, 
        addLog(state, action){
            console.log(action.payload);
        },
        removeLog(){} 
    }
});

const store = configureStore({
    reducer: {
        log: logSlice.reducer,
    }
});

export const logActions = logSlice.actions;
export default store;