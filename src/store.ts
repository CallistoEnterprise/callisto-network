import { configureStore } from '@reduxjs/toolkit';

import ModalReducer from 'redux/reducers/ModalReducer';

export const store = configureStore({
    reducer: {
        ModalReducer: ModalReducer,
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})