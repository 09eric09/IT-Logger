import { createSlice } from '@reduxjs/toolkit';

const initialTechState = {techs: [], techInfo: {}};

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
        }, 
        techInfo(state, action){
            state.techInfo = action.payload;
        }
    }
}));

export const techActions = techSlice.actions;
export default techSlice;