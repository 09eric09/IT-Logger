import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialLogState = {logs:[]};

const logSlice = createSlice({
    name:'log',
    initialState: initialLogState,
    reducers: {
        addLog(state, action){},
        removeLog(){},
        replaceLogs(state, action){
            state.logs = action.payload;
        }, 
    }
});

const store = configureStore({
    reducer: {
        log: logSlice.reducer,
    }
});

export const logActions = logSlice.actions;
export default store;