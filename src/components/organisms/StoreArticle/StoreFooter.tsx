import styled from 'styled-components';

const Wrapper = styled.footer`
  margin: auto;
  padding: 24px 0;
  width: 88%;
  font-size: 11px;

  > p {
    &:before {
      content: '© ';
    }
  }
`;

export function StoreFooter({
  copyright
}: {
  copyright: string;
}) {
  return (
    <Wrapper className="store-footer">
      <p>{ copyright }</p>
    </Wrapper>
  );
}