import styled from 'styled-components';
import Head from 'next/head';
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
  copyright = 'copyright',
  url = '',
  ogImage = ''
}: {
  icon?: string;
  title?: string;
  author?: string;
  screenshots?: string[];
  description?: string;
  copyright?: string;
  url?: string;
  ogImage?: string;
}) {
  const { windowWidth, windowHeight } = useResize();
  const { isIos } = useIsIos({
    width: windowWidth,
    height: windowHeight
  });

  return (
    <Wrapper id="store">
      <Head>
        <meta property="og:type" content="website" />
        { url && <meta property="og:url" content={ url } /> }
        { title && <meta property="og:title" content={ title } /> }
        { title && <meta property="og:site_name" content={ title } /> }
        { description && <meta property="og:description" content={ description } /> }
        { (ogImage || screenshots[0]) && <meta property="og:image" content={ ogImage || screenshots[0] } /> }
        <meta name="twitter:card" content="summary_large_image" />
        { title && <meta name="twitter:title" content={ title } /> }
        { description && <meta name="twitter:description" content={ description } /> }
        { (ogImage || screenshots[0]) && <meta name="twitter:image:src" content={ ogImage || screenshots[0] } /> }
      </Head>
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