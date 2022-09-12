import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { setOpenDetailModal } from 'redux/reducers/ModalReducer'
import Logo from 'assets/images/logo.png'

interface Props {
    apy: number
    blockPeriod: number
}

const FarmCard: React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const { apy, blockPeriod } = props
    return (
        <StyledContainer onClick={() => dispatch(setOpenDetailModal({ details: props }))}>
            <img src={Logo} alt='' />
            <Box>NUMI</Box>
            <Box>
                <Box>$0.00</Box>
                <Box>Paid in</Box>
            </Box>
            <Box>
                <Box>0.00 NUMI</Box>
                <Box>Deserved</Box>
            </Box>
            <Box>
                <Box>{apy}%</Box>
                <Box>APY</Box>
            </Box>
            <Box>
                <Box>{blockPeriod}{'\u00a0'}Month</Box>
                <Box>Blocking period</Box>
            </Box>
        </StyledContainer>
    )
}

const StyledContainer = styled(Box)`
    cursor: pointer;
    height: 109.95px;
    padding-left: 46.2px;
    padding-right: 41.3px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    position: relative;
    * {
        color: black;
        font-size: 21px;
        line-height: 25.25.px;
    }
    >img {
        width: 33.17px;
        height: 34.19px;
    }
    >div:not(:first-of-type) {
        display: flex;
        flex-direction: column;
    }
    &:before {
        content: '';
        position: absolute;
        left: 50%; bottom: -12px;
        transform: translateX(-50%);
        width: 401.03px;
        height: 2px;
        background: #BE00FE;
    }
`

export default FarmCard