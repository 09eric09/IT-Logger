import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialLogState = {logs:[]};

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
        addTech(state, action){
            state.techs.push(action.payload);
        }, 
        removeTech(state, action){
            state.techs = state.techs.filter(tech => tech.id !== action.payload);
        },
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