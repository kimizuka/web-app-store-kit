import styled from 'styled-components';

const Wrapper = styled.footer`
  margin: auto;
  padding: 20px 0;
  width: 87.5%;
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
  console.log(copyright);
  return (
    <Wrapper className="store-footer">
      <p>{ copyright }</p>
    </Wrapper>
  );
}