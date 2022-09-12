import React from 'react'
import styled from 'styled-components'

interface Props extends React.HTMLProps<HTMLButtonElement> {
    children: any
    colour?: 'light' | 'dark' | 'pink'
}

const Button: React.FC<Props> = (props) => {
    const { children, as, type, colour = 'light', ...mainProps } = props
    return (
        <StyledContainer colour={colour} {...mainProps}>
            {children}
        </StyledContainer>
    )
}

const StyledContainer = styled.button<any>`
    border-radius: 24px;
    width: 189.19px;
    height: 41.73px;
    font-size: 21px;
    line-height: 25.2px;
    transition: .3s;
    ${({ colour }) => {
        if(colour === 'light') return 'background: white; color: #23262F; border: 1px solid #707070;'
        if(colour === 'dark') return 'background: #23262F; color: white; border: none;'
        if(colour === 'pink') return 'background: #8648D8; color: white; border: none;'
    }}
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.5);
    &:hover:not(:disabled) {
        transform: scale(1.15);
    }
    &:disabled {
        cursor: not-allowed;
        opacity: .5;
    }
`

export default Button