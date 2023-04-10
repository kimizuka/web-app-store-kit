import styled from 'styled-components';

const Wrapper = styled.span`
  display: block;
  position: relative;
  border: solid 2px #000;
  border-radius: 6px;
  width: 30px; height: 30px;

  @media (prefers-color-scheme: dark) {
    border-color: #fefefe;
  }

  &:before {
    display: block;
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    border-radius: 1px;
    width: 15px; height: 2px;
    content: '';
    background: #000;

    @media (prefers-color-scheme: dark) {
      background: #fefefe;
    }
  }

  &:after {
    display: block;
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    border-radius: 1px;
    width: 2px; height: 15px;
    content: '';
    background: #000;

    @media (prefers-color-scheme: dark) {
      background: #fefefe;
    }
  }
`;

export function DownloadIcon() {
  return (
    <Wrapper className="download-icon" />
  );
}