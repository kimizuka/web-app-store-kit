import styled from 'styled-components';
import { useResize } from '@/hooks/useResize';
import { useIsIos } from '@/hooks/useIsIos';
import { StoreHeader } from './StoreHeader';
import { StoreInformation } from './StoreInformation';
import { StoreScreenshot } from './StoreScreenshot';
import { StoreDescription } from './StoreDescription';
import { StoreDownload } from './StoreDownload';
import { StoreFooter } from './StoreFooter';
import { StoreBalloon } from './StoreBalloon';
import { StoreQr } from './StoreQr';

const Wrapper = styled.article`
  color: #1d1d1d;
  font-family: 'SF Pro JP', 'SF Pro Display', 'SF Pro Icons', 'Apple WebExp Icons Custom', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  .content {
    margin: auto;
    max-width: 980px;
  }
`;

export function StoreArticle({
  icon = '',
  title = 'アプリタイトル',
  author = '作者名',
  screenshots = [],
  description = 'ディスクリプション',
  copyright = 'copyright'
}: {
  icon?: string;
  title?: string;
  author?: string;
  screenshots?: string[];
  description?: string;
  copyright?: string;
}) {
  const { windowWidth, windowHeight } = useResize();
  const { isIos } = useIsIos({
    width: windowWidth,
    height: windowHeight
  });

  return (
    <Wrapper id="store">
      <div className="store-stage">
        <StoreHeader />
        <div className="content">
          <StoreInformation
            icon={ icon }
            title={ title }
            author={ author }
          />
          <StoreScreenshot
            screenshots={ screenshots }
          />
          <StoreDescription
            description={ description }
          />
          <StoreDownload />
          <StoreFooter
            copyright={ copyright }
          />
        </div>
      </div>
      { isIos && <StoreBalloon /> }
      { !isIos && <StoreQr /> }
    </Wrapper>
  );
}