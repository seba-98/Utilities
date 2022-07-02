import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
	//slices
    }
})

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<Returntype = void> = ThunkAction<
    Returntype,
    RootState,
    unknown,
    Action<string>
>;

