import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const Button: React.FC = () => {
    return (
        <StyledContainer />
    )
}

const StyledContainer = styled(Box)`
    position: fixed;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background-color: rgb(35, 38, 47);
`

export default Button