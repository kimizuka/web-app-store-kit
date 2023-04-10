import styled from 'styled-components';
import Head from 'next/head';
import { useResize } from '@/hooks/useResize';
import { useIsStandalone } from '@/hooks/useIsStandalone';
import { StoreArticle } from '@/components/organisms/StoreArticle';
import { AppArticle } from '@/components/organisms/AppArticle';

const Wrapper = styled.div`
  line-height: 1em;
`;

export function IndexPageTemplate() {
  const { windowWidth, windowHeight } = useResize();
  const { isStandalone } = useIsStandalone({
    width: windowWidth,
    height: windowHeight
  });

  return (
    <Wrapper>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      {!isStandalone ? (
        <StoreArticle
          title="アプリタイトル"
          author="作者名"
          icon="https://via.placeholder.com/140x140"
          screenshots={[
            'https://via.placeholder.com/360x650',
            'https://via.placeholder.com/360x650',
            'https://via.placeholder.com/360x650',
            'https://via.placeholder.com/360x650',
            'https://via.placeholder.com/360x650'
          ]}
          description="ディスクリプション"
        />
      ) : (
        <AppArticle />
      )}
    </Wrapper>
  );
}