import styled, { keyframes } from 'styled-components';
import { DownloadIcon } from '@/components/atoms/DownloadIcon';

const storeBalloonFlow = keyframes`
  0%   {
    bottom: 24px;
  }
  50%  {
    bottom: 32px;
  }
  100% {
    bottom: 24px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 160px;

  .store-balloon-balloon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0; right: 0;
    margin: auto;
    border-radius: 56px;
    width: 136px; height: 136px;
    font-size: 10px;
    text-align: center;
    letter-spacing: .2em;
    background: #eee;
    animation: ${ storeBalloonFlow } 2s ease 0s infinite normal;
    box-shadow: 0 0 4px rgba(0, 0, 0, .2);

    @media (prefers-color-scheme: dark) {
      background: #3d3d3d;
    }

    &:after {
      display: block;
      position: absolute;
      margin-left: -10px;
      bottom: -20px; left: 50%;
      width: 0; height: 0;
      border: solid transparent 10px;
      border-top: solid #eee 10px;
      content: '';

      @media (prefers-color-scheme: dark) {
        border-top-color: #3d3d3d;
      }
    }
  }

  .download-icon {
    margin: auto;
  }

  .store-balloon-text {
    margin-top: 8px;
    color: #000;
    line-height: 1.4em;

    @media (prefers-color-scheme: dark) {
      color: #cdcdcd;
    }
  }
`;

export function StoreBalloon() {
  return (
    <Wrapper className="store-balloon">
      <div className="store-balloon-balloon">
        <div>
          <DownloadIcon />
          <p className="store-balloon-text">ホーム画面に<br />追加</p>
        </div>
      </div>
    </Wrapper>
  );
}