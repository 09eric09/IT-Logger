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

const initialTechState = {techs: []};

const techSlice = (createSlice({
    name: 'tech', 
    initialState: initialTechState,
    reducers: {
        addTech(){}, 
        removeTech(){},
        replaceTechs(state, action){
            state.techs = action.payload;
        }
    }
}));

const store = configureStore({
    reducer: {
        log: logSlice.reducer,
        tech: techSlice.reducer
    }
});

export const logActions = logSlice.actions;
export const techActions = techSlice.actions;
export default store;