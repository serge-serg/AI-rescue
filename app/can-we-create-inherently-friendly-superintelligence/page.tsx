import { generateMetadata } from '@/utils/generateMetadata';
export const metadata = generateMetadata(__filename);
import PageWrapper from '@/components/PageWrapper';
export default function CanWeCreateInherentlyFriendlySuperintelligence() {
  return (
    <PageWrapper filename={__filename} underHeaderBlock={['no-audio']}>
      Let us try!
    </PageWrapper>
  );
}
