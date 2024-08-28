'use client';

import React, { useState } from 'react';
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
    }
  ]
};

const SurveyComponent: React.FC = () => {
  const [results, setResults] = useState<any>(null);
  const survey = new Model(surveyJson);
  
  survey.onComplete.add((sender) => {
    setResults(sender.data);
  });

  return (
    <div>
      {!results ? (
        <Survey model={survey} />
      ) : (
        <div>
          <h2>Your Survey Results:</h2>
          <p><strong>Opinion on AI development:</strong> {results.FirstQuestion}</p>
          <button onClick={() => setResults(null)}>Take Survey Again</button>
        </div>
      )}
    </div>
  );
};

export default SurveyComponent;