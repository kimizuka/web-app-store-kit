import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  margin: auto;
  padding: 24px 0;
  width: 88%;
  color: rgb(96, 96, 96);
  font-size: 12px;
  overflow: hidden;

  ul {
    padding-left: 20px;
  }
  
  li {
    position: relative;

    &:before {
      position: absolute;
      top: 0; left: -20px;
      content: attr(data-icon);
    }
  }
`;

export function StoreNote() {
  return (
    <Wrapper className="store-note">
      <ul>
        <li data-icon="📱">このサイトはPWA（Progressive Web App）です。ホーム画面に追加することでアプリのように振舞います。</li>
      </ul>
    </Wrapper>
  );
}