import { configureStore } from '@reduxjs/toolkit';
import logSlice from './log-slice';
import techSlice from './tech-slice';

const store = configureStore({
    reducer: {
        log: logSlice.reducer,
        tech: techSlice.reducer
    }
});

export default store;