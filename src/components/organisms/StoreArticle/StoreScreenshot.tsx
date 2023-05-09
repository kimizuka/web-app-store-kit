import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  margin: auto;
  padding: 20px 0 32px;
  overflow: hidden;

  .ttl {
    margin: auto;
    width: 88%;
    font-size: 18px;
    font-weight: bold;
  }

  .scrollmask {
    margin-top: 16px;
    max-height: 497px;
    height: calc(100vw / 375 * 812 * .4);
    overflow: hidden;
  }

  .scrollarea {
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .screenshots {
    display: inline-block;
    padding: 0 6%;
    white-space: nowrap;
  }

  .screenshot {
    display: inline-block;
    border-radius: 10% / 4.7%;
    max-width: 230px;
    max-height: 497px;
    width: calc(100vw / 375 * 375 * .4);
    height: calc(100vw / 375 * 812 * .4);
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