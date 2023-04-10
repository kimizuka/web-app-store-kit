import styled, { css } from 'styled-components';

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  height: 48px;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, .72);
  z-index: 1;

  .ttl {
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-bottom: solid 1px #cdcdcd;
    height: 100%;
    font-size: 19px;
  }
`;

export function StoreHeader() {
  return (
    <Wrapper className="store-header">
      <h2 className="ttl">PWA Store</h2>
    </Wrapper>
  );
}