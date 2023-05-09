import styled from 'styled-components';

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  height: 48px;
  backdrop-filter: saturate(160%) blur(16px);
  background-color: rgba(255, 255, 255, .8);
  z-index: 1;

  .ttl {
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-bottom: solid 1px #cdcdcd;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
  }
`;

export function StoreHeader({
  title = 'PWA Store'
}: {
  title?: string;
}) {
  return (
    <Wrapper className="store-header">
      <h2 className="ttl">{ title }</h2>
    </Wrapper>
  );
}