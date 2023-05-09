import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  margin: auto;
  padding: 24px 0;
  width: 88%;
  font-size: 12px;
  overflow: hidden;

  .ttl {
    font-size: 18px;
    font-weight: bold;
  }

  .txt {
    margin-top: 16px;
    color: rgb(96, 96, 96);
  }
`;

export function StoreDescription({
  description
}: {
  description: string;
}) {
  return (
    <Wrapper className="store-description">
      <div className="box">
        <h2 className="ttl">説明</h2>
        <p className="txt">{ description }</p>
      </div>
    </Wrapper>
  );
}