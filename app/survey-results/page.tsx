import { generateMetadata } from '@/utils/generateMetadata';
export const metadata = generateMetadata(__filename);
import PageWrapper from '@/components/PageWrapper';
const SurveyResults: React.FC = () => {
  return (
    <PageWrapper filename={__filename}>
      <h1>Survey Results</h1>
      <iframe width="600" height="450" src="https://lookerstudio.google.com/embed/reporting/234ad68a-957d-4c64-9885-7872fedcbc0c/page/zpMAE" frameBorder={0} style={{border:0, width: '100%', height: '100%'}} allowFullScreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
    </PageWrapper>
  );
};

export default SurveyResults;