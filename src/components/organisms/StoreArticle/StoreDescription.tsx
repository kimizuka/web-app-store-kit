import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  margin: auto;
  padding: 20px 0;
  border-bottom: solid 1px #cdcdcd;
  width: 87.5%;
  font-size: 13px;
  overflow: hidden;

  .ttl {
    font-size: 20px;
    font-weight: bold;
  }

  .txt {
    margin-top: 14px;
    white-space: pre-wrap;
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