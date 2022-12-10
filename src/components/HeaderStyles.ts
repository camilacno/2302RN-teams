import styled from 'styled-components/native'
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
  padding: 14px 0;
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.Image`
  height: 55px;
  width: 46px;
`

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  size: 32px;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.WHITE,
}))``
