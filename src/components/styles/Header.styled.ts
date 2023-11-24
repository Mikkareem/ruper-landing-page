import styled from 'styled-components'
import { ThemeProps } from './Theme'

export const StyledHeader = styled.header<ThemeProps>`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
`

export const Nav = styled.nav<ThemeProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`

export const Logo = styled.img<ThemeProps>`
  width: 48px;
  height: 48px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img<ThemeProps>`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`