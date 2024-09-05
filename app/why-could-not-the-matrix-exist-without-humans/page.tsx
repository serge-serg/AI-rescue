import Image from 'next/image';
import { generateMetadata } from '@/utils/generateMetadata';
export const metadata = generateMetadata(__filename);
import PageWrapper from '@/components/PageWrapper';
import PageContents from './pageContents';

export default function WhyCouldNotTheMatrixExistWithoutHumans() {
    
  return (
    <PageWrapper filename={__filename}>
      <PageContents />
    </PageWrapper>
  );
}
