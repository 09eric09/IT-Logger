import { createSlice } from '@reduxjs/toolkit';

const initialLogState = {logs:[], currentLog:null};

const logSlice = createSlice({
    name:'log',
    initialState: initialLogState,
    reducers: {
        addLog(state, action){
            state.logs.push(action.payload);
        },
        removeLog(state, action){
            state.logs = state.logs.filter(log => log.id !== action.payload);
        },
        getCurrentLog(state, action){
            state.currentLog = action.payload;
        },
        updateLog(state, action){
            const existingIndex = state.logs.findIndex(log => log.id === action.payload.id);
            state.logs[existingIndex] = action.payload;
        },
        replaceLogs(state, action){
            state.logs = action.payload;
        }, 
    }
});

export const logActions = logSlice.actions;
export default logSlice;