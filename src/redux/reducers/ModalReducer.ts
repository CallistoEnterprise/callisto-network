import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    openConnectModal: false,
    openDetailModal: false,
    details: {}
}

export const ModalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setOpenConnectModal: (state, action) => {
            state.openConnectModal = !state.openConnectModal
        },
        setOpenDetailModal: (state, action) => {
            state.openDetailModal = !state.openDetailModal
            state.details = action.payload.details
        },
    },
})

export const { setOpenConnectModal, setOpenDetailModal } = ModalReducer.actions

export default ModalReducer.reducer