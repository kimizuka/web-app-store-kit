import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  margin: auto;
  padding: 20px 0 32px;
  border-bottom: solid 1px #cdcdcd;
  width: 87.5%;
  overflow: hidden;

  .ttl {
    font-size: 20px;
    font-weight: bold;
  }

  .scrollmask {
    margin-top: 16px;
    max-height: 497px;
    height: calc(100vw / 375 * 342);
    overflow: hidden;
  }

  .scrollarea {
    padding-bottom: 100px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .screenshots {
    white-space: nowrap;
  }

  .screenshot {
    display: inline-block;
    border-radius: 10% / 4.7%;
    max-width: 230px;
    max-height: 497px;
    width: calc(100vw / 375 * 156);
    height: calc(100vw / 375 * 342);
    object-fit: cover;

    + .screenshot {
      margin-left: 12px;
    }
  }
`;

export function StoreScreenshot({
  screenshots = []
}: {
  screenshots?: string[];
}) {
  return (
    <Wrapper id="store-screenshot">
      <h2 className="ttl">スクリーンショット</h2>
      <div className="scrollmask">
        <div className="scrollarea">
          <div className="screenshots">
            { screenshots.map((src, i) => <img key={ i } className="screenshot" src={ src } width="192" height="288" />) }
          </div>
        </div>
      </div>
    </Wrapper>
  );
}