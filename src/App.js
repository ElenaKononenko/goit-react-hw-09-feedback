import React, { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import s from './App.module.css';
import SectionTitle from './components/Section';
import Statistic from './components/Statistic';
import Notification from './components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const hanleIncrement = e => {
    let target = e.target.name;
    switch (target) {
      case 'good':
        setGood(prev => prev + 1);
        return;
      case 'neutral':
        setNeutral(prev => prev + 1);
        return;
      case 'bad':
        setBad(prev => prev + 1);
        return;
      default:
        console.log('error');
    }
  };

  const countTotalFeedback = () => {
    return bad + neutral + good;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100);
  };

  return (
    <section className={s.app}>
      <SectionTitle title="Please leave feedback" children>
        <Feedback
          options={{ good, neutral, bad }}
          onIncrement={hanleIncrement}
        />
      </SectionTitle>

      {countTotalFeedback() > 0 ? (
        <SectionTitle title="Statistics" children>
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            countTotal={countTotalFeedback()}
            countPositive={countPositiveFeedbackPercentage()}
          />
        </SectionTitle>
      ) : (
        <Notification />
      )}
    </section>
  );
};

export default App;
