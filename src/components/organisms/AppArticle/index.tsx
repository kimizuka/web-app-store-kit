import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;

  &:before {
    color: #cdcdcd;
    content: 'App';
  }
`;

export function AppArticle() {
  return (
    <Wrapper id="app">
    </Wrapper>
  );
}