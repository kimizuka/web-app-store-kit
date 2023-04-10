import styled, { keyframes } from 'styled-components';
import { DownloadIcon } from '@/components/atoms/DownloadIcon';

const storeBalloonFlow = keyframes`
  0%   {
    bottom: 20px;
  }
  50%  {
    bottom: 40px;
  }
  100% {
    bottom: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  left: 0; right: 0;
  margin: auto;
  border-radius: 60px;
  width: 140px; height: 140px;
  font-size: 10px;
  text-align: center;
  letter-spacing: .2em;
  background: #eee;
  animation: ${ storeBalloonFlow } 2s ease 0s infinite normal;
  box-shadow: 0 0 4px rgba(0, 0, 0, .2);

  @media (prefers-color-scheme: dark) {
    background: #3d3d3d;
  }

  .download-icon {
    margin: auto;
  }

  .store-balloon-text {
    margin-top: 8px;
    color: #000;
    line-height: 1.4em;

    @media (prefers-color-scheme: dark) {
      color: #fefefe;
    }
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
`;

export function StoreBalloon() {
  return (
    <Wrapper className="store-balloon">
      <div>
        <DownloadIcon />
        <p className="store-balloon-text">ホーム画面に<br />追加</p>
      </div>
    </Wrapper>
  );
}