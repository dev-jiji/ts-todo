import { configureStore } from "@reduxjs/toolkit";
// slice  불러들임
import userReducer from "./userSlice";

// store 생성
export const store = configureStore({
    reducer: {
        // slice 를 작성함
        user: userReducer,
    },
});

// useSelector 를 사용하는 경우에 지정할 type을 작성
export type RootState = ReturnType<typeof store.getState>;
// useDispatch 를 활용하는 경우에 지정할 type을 작성
export type AppDispatch = typeof store.dispatch;
