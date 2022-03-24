import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepCount = steps + 1;
        setSteps(newStepCount);
    }

    useEffect( () => {
        console.log(steps);
    }, [steps])
    return (
        <div>
            <h2>This is my smart watch</h2>
            <h3>My current Step: {steps}</h3>
            <button onClick={increaseSteps}> De Dour......</button>
            <Display name='garmin' steps={steps}></Display>
        </div>
    );
};

export default Watch; 