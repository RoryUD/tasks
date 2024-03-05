import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [numAttempts, setNumAttempts] = useState<number>(4);
    function notInProgress(): void {
        setInProgress(false);
    }
    function isInProgress(): void {
        setInProgress(true);
    }
    function minusAttempt(): void {
        setNumAttempts(numAttempts - 1);
    }
    function addAttempt(): void {
        setNumAttempts(numAttempts + 1);
    }
    function start() {
        isInProgress();
        minusAttempt();
    }
    return (
        <div>
            <div>
                <div>Number of Attempts: {numAttempts}</div>
                <Button
                    onClick={start}
                    disabled={inProgress || numAttempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={notInProgress} disabled={!inProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={addAttempt} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
