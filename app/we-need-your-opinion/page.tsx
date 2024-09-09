//'use client';
import { generateMetadata } from '@/utils/generateMetadata';
export const metadata = generateMetadata(__filename);
import PageWrapper from '@/components/PageWrapper';

const SurveyPage: React.FC = () => {
  return (
    <PageWrapper filename={__filename} underHeaderBlock={false}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc446VlxyaXNtsgT0VfRyncjYg1kZyH6y9YIPAsAyrieQmTwQ/viewform?embedded=true" width="750" height="4570" style={{ marginLeft: '-32px'}} frameBorder="0" marginHeight={0} marginWidth={0}>Loading...</iframe>
    </PageWrapper>
  );
};

export default SurveyPage;