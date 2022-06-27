import React, {useState} from 'react';
import JourneyWizard from 'components/Packages/JourneyWizard/JourneyWizard';
import Button from '@material/react-button';

import {contentContainer} from '../../pages/MainPage/MainPage.style';
const TOTAL_STEPS = 2;

const WizardDisplay = () => {
  const [journeyStep, setJourneyStep] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    if (journeyStep < wizardData.length - 1) {
      setJourneyStep(journeyStep + 1);
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (journeyStep > 0) {
      setJourneyStep(journeyStep - 1);
    }
  };

  const wizardData = [
    {
      header: () => 'header1',
      body: () => 'body1',
      footer: () => <Button onClick={(e) => handleNext(e)}>next</Button>,
    },
    {
      header: () => 'header2',
      body: () => 'body2',
      footer: () => <Button onClick={(e) => handlePrevious(e)}>back</Button>,
    },
  ];

  return (
    <div className={contentContainer}>
      <JourneyWizard
        header={wizardData[journeyStep].header}
        body={wizardData[journeyStep].body}
        footer={wizardData[journeyStep].footer}
        currentStep={journeyStep}
        totalSteps={TOTAL_STEPS}
      />
    </div>
  );
};

export default WizardDisplay;
