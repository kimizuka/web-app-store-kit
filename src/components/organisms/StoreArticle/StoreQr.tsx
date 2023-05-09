import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const Wrapper = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  text-align: center;
  background: rgba(0, 0, 0, .4);
  z-index: 1;
  pointer-events: none;

  .store-qr-box {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    border-radius: 32px;
    width: 256px; height: 296px;
    background: white;
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0, 0, 0, .2);
  }

  .store-qr-txt {
    display: inline-block;
    position: relative;
    top: -8px;
    margin-top: -8px;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 10px;
    text-align: center;
  }
`;

export function StoreQr() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${ getURL() }`;
    }
  }, [imageRef.current]);

  function getURL() {
    return `${ location.protocol }//${ location.hostname }${ location.pathname }`;
  }

  return (
    <Wrapper className="store-qr">
      <div className="store-qr-box">
        <img ref={ imageRef } />
        <p className="store-qr-txt">このサイトはiOSでのみご利用いただけます。</p>
      </div>
    </Wrapper>
  );
}