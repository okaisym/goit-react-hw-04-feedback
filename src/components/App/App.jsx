import React, { useState } from 'react';
import { Options } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section';
import { Notification } from '../Notification';
import { FeedbackIndicators, FeedbackContainter } from './App.styled';
import { Statistics } from '../Statistics/Statistics';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((feedback.good / total) * 100) : 0;
  };

  const clearStatistic = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();

  return (
    <FeedbackContainter>
      <Section title="Please leave feedback">
        <Options
          options={{ good, neutral, bad }}
          onLeaveFeedback={updateFeedback}
        />
      </Section>
      <FeedbackIndicators>
        {total > 0 ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            totalAmount={total}
            positivePercentage={countPositiveFeedbackPercentage()}
            clearStatistic={clearStatistic}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </FeedbackIndicators>
    </FeedbackContainter>
  );
};
