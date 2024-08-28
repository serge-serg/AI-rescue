'use client';

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
    }
  ]
};

const SurveyComponent: React.FC = () => {
  const [results, setResults] = useState<any>(null);
  const [aggregatedResults, setAggregatedResults] = useState<any>(null);
  const survey = new Model(surveyJson);
  
  useEffect(() => {
    fetchAggregatedResults();
  }, []);

  const fetchAggregatedResults = async () => {
    const response = await fetch('/server/api/survey');
    const data = await response.json();
    setAggregatedResults(data);
  };

  survey.onComplete.add(async (sender) => {
    const result = sender.data;
    setResults(result);
    
    await fetch('/server/api/survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result),
    });

    fetchAggregatedResults();
  });

  const renderAggregatedResults = () => {
    const counts: {[key: string]: number} = {};
    aggregatedResults.forEach((result: any) => {
      const answer = result.FirstQuestion;
      counts[answer] = (counts[answer] || 0) + 1;
    });

    return (
      <div>
        <h3>Aggregated Results:</h3>
        <ul>
          {Object.entries(counts).map(([answer, count]) => (
            <li key={answer}>{answer}: {count}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      {!results ? (
        <Survey model={survey} />
      ) : (
        <div>
          <h2>Your Survey Results:</h2>
          <p><strong>Opinion on AI development:</strong> {results.FirstQuestion}</p>
          <button onClick={() => setResults(null)}>Take Survey Again</button>
          {aggregatedResults && renderAggregatedResults()}
        </div>
      )}
    </div>
  );
};

export default SurveyComponent;