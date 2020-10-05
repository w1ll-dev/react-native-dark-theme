import styled from 'styled-components/native';

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.background};
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: ${({theme}) => theme.text}
`;