import styled from 'styled-components';
import { StoreSection } from '@/components/organisms/StoreSection';

const Wrapper = styled.div`
  line-height: 1em;
`;

export function IndexPageTemplate() {
  return (
    <Wrapper>
      <StoreSection
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
    </Wrapper>
  );
}