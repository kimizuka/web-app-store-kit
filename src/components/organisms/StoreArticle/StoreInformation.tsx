import styled from 'styled-components';

const Wrapper = styled.section`
  .box {
    display: flex;
    position: relative;
    margin: auto;
    padding: 32px 0;
    border-bottom: solid 1px #cdcdcd;
    width: 87.5%;
    overflow: hidden;
  }

  .icon {
    border: solid 1px #cdcdcd;
    border-radius: 21px;
    max-width: 216px;
    max-height: 216px;
    width: calc(100vw / 375 * 130);
    height: calc(100vw / 375 * 130);
    overflow: hidden;

    > img {
      width: 100%; height: 100%;
      object-fit: cover;
    }
  }

  .info {
    display: flex;
    align-items: flex-start;
    margin-left: 3.28%;

    .ttl {
      font-size: 18px;
      word-wrap: break-word;
    }

    .author {
      margin-top: 8px;
      font-size: 13px;
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
          { icon && <img
            src={ icon }
            width="100"
            height="100"
          /> }
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