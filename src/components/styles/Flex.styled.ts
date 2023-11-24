import styled from 'styled-components'
import { ThemeProps } from './Theme'

export const Flex = styled.div<ThemeProps>`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`