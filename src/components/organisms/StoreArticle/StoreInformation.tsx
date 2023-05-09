import styled from 'styled-components';

const Wrapper = styled.section`
  .box {
    display: flex;
    position: relative;
    margin: auto;
    padding: 32px 0;
    width: 88%;
    overflow: hidden;
  }

  .icon {
    box-sizing: content-box;
    flex-shrink: 0;
    border: solid 1px #cdcdcd;
    border-radius: calc(100vw / 375 * 96 * 13 / 60);
    max-width: calc(980px / 375 * 96);
    max-height: calc(980px / 375 * 96);
    width: calc(100vw / 375 * 96);
    height: calc(100vw / 375 * 96);
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0, 0, 0, .2);

    @media (min-width: 980px) {
      border-radius: calc(980px / 375 * 96 * 13 / 60);
    }
    
    > img {
      width: 100%; height: 100%;
      object-fit: cover;
    }
  }

  .info {
    display: flex;
    align-items: flex-start;
    margin-left: 8%;

    .ttl {
      font-size: 20px;
      font-weight: bold;
      line-height: 1;
      word-wrap: break-word;
    }

    .author {
      margin-top: 8px;
      font-size: 16px;
    }
  }
`;

export function StoreInformation({
  title = '',
  author = '',
  icon = ''
}: {
  title?: string;
  author?: string;
  icon?: string;
}) {
  return (
    <Wrapper className="store-information">
      <div className="box">
        <p className="icon">
          { icon && <img src={ icon } /> }
        </p>
        <div className="info">
          <div className="inner">
            <h1 className="ttl">{ title }</h1>
            <p className="author">{ author }</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}