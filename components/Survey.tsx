'use client';

import React, { useState, useEffect } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';

const surveyJson = {
  elements: [
    {
      name: "Question1",
      title: "Does Humanity need Superintelligence?",
      type: "radiogroup",
      choices: [
        "Definitely!",
        "Probably",
        "Yes, but we have to be very cautious of it",
        "No, it is too dangerous",
        "No, we don't need it at all",
        "I don't have a clear opinion yet",
      ],
      isRequired: true
    },
    {
      name: "Question2",
      title: "Do you understand the difference between AI and Superintelligence?",
      type: "radiogroup",
      choices: [
        "Yes",
        "No",
        "Not sure",
      ],
      isRequired: true
    }
  ]
}

const SurveyComponent: React.FC = () => {
  const [results, setResults] = useState<any>(null)
  const [aggregatedResults, setAggregatedResults] = useState<any>(null)
  const survey = new Model(surveyJson);
  const surveyPath = '/api/survey/'
  const surveyResultsPath = `${surveyPath}results`
  
  useEffect(() => {
    fetchAggregatedResults();
  }, []);

  const fetchAggregatedResults = async () => {
    const response = await fetch(surveyResultsPath);
    const data = await response.json();
    console.log('fetchAggregatedResults', {response, data})
    setAggregatedResults(data);
  };

  survey.onComplete.add(async (sender) => {
    const result = sender.data;
    setResults(result);
    
    await fetch(surveyResultsPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result),
    });

    fetchAggregatedResults();
  });

  const getQuestionTitleByName = (name: string) => {
    const question = surveyJson.elements.find(element => element.name === name)
    return question ? question.title : name
  };

  const renderAggregatedResults = () => {
    const counts: { [key: string]: { [choice: string]: number } } = {};
    
    aggregatedResults.forEach((result: any) => {
      Object.keys(result).forEach(questionName => {
        const questionTitle = getQuestionTitleByName(questionName);
        if (!counts[questionTitle]) {
          counts[questionTitle] = {};
        }
        const answer = result[questionName];
        counts[questionTitle][answer] = (counts[questionTitle][answer] || 0) + 1;
      });
    });
  
    return (
      <div>
        <h3>Aggregated Results:</h3>
        <ul>
          {Object.entries(counts).map(([title, answerCounts]) => (
            <li key={title}>
              <strong>{title}:</strong>
              <ul>
                {Object.entries(answerCounts).map(([answer, count]) => (
                  <li key={answer}>{answer}: {count}</li>
                ))}
              </ul>
            </li>
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
          {aggregatedResults && renderAggregatedResults()}
          <button onClick={() => setResults(null)}>Take Survey Again</button>
        </div>
      )}
    </div>
  );
}

export default SurveyComponent