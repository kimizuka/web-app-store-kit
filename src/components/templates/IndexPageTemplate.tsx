import styled from 'styled-components';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useResize } from '@/hooks/useResize';
import { useIsStandalone } from '@/hooks/useIsStandalone';
import { StoreArticle } from '@/components/organisms/StoreArticle';
import { AppArticle } from '@/components/organisms/AppArticle';

const Wrapper = styled.div`
  line-height: 1em;

  [data-is-init] {
    opacity: 0;
    transition: opacity .2s ease-in-out;

    &[data-is-init='true'] {
      opacity: 1;
    }
  }
`;

export function IndexPageTemplate() {
  const [ isInit, setIsInit ] = useState(false);
  const { windowWidth, windowHeight } = useResize();
  const { isStandalone } = useIsStandalone({
    width: windowWidth,
    height: windowHeight
  });

  useEffect(() => {
    setIsInit(true);
  }, [isStandalone]);

  return (
    <Wrapper>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div data-is-init={ isInit }>
        {!isStandalone ? (
          <StoreArticle
            title="アプリタイトル"
            icon="https://via.placeholder.com/140x140"
            author="作者名"
            screenshots={[
              'https://via.placeholder.com/360x650',
              'https://via.placeholder.com/360x650',
              'https://via.placeholder.com/360x650',
              'https://via.placeholder.com/360x650',
              'https://via.placeholder.com/360x650'
            ]}
            description="ディスクリプション"
            copyright="copyright"
            ogImage="https://via.placeholder.com/1200x630"
          />
        ) : (
          <AppArticle />
        )}
      </div>
    </Wrapper>
  );
}