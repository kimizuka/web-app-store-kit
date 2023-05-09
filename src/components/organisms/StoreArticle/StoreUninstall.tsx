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

  ol {
    margin-top: 16px;
    padding-left: 20px;
    color: rgb(96, 96, 96);

    li {
      position: relative;

      &:before {
        position: absolute;
        top: 0; left: -20px;
        content: attr(data-icon);
      }

      strong {
        &:before {
          content: '「';
        }

        &:after {
          content: '」';
        }
      }
    }
  }
`;

export function StoreUninstall() {
  return (
    <Wrapper className="store-uninstall">
      <h2 className="ttl">削除方法</h2>
      <ol>
        <li data-icon="1️⃣">ホーム画面に追加したアイコンを長押しします</li>
        <li data-icon="2️⃣"><strong>ブックマークを削除</strong>で削除します</li>
      </ol>
    </Wrapper>
  );
}