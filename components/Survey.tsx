import React, { useState, useEffect } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';

const surveyJson = {
  elements: [
    {
      name: "FirstQuestion",
      title: "What is your opinion on AI development?",
      type: "radiogroup",
      choices: [
        "Very positive",
        "Somewhat positive",
        "Neutral",
        "Somewhat negative",
        "Very negative"
      ],
      isRequired: true
    },
    {
      name: "SecondQuestion",
      title: "Do you think AI will significantly impact your job in the next 5 years?",
      type: "radiogroup",
      choices: [
        "Yes, positively",
        "Yes, negatively",
        "No significant impact",
        "Unsure"
      ],
      isRequired: true
    }
  ]
};

const SurveyComponent: React.FC = () => {
  const [survey, setSurvey] = useState<Model | null>(null);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    const newSurvey = new Model(surveyJson);
    newSurvey.onComplete.add((sender) => {
      const results = JSON.stringify(sender.data);
      localStorage.setItem('surveyResults', results);
      setResults(sender.data);
    });
    setSurvey(newSurvey);

    // Load existing results
    const savedResults = localStorage.getItem('surveyResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  return (
    <div>
      {!results && survey && <Survey model={survey} />}
      {results && (
        <div>
          <h2>Survey Results:</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SurveyComponent;