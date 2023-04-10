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
  }
`;

export function StoreDownload() {
  return (
    <Wrapper className="store-download">
      <h2 className="ttl">ダウンロード方法</h2>
      <p className="txt">ホーム画面に追加ボタンからダウンロードすることができます。</p>
    </Wrapper>
  );
}