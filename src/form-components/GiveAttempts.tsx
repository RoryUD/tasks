import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    function updateAttemptsRequested(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setAttemptsRequested(event.target.value);
    }

    function decreaseAttemptsLeft() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function increaseAttemptsLeft() {
        const requestedAsNumber: number = +attemptsRequested;
        setAttemptsLeft(attemptsLeft + requestedAsNumber);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <div>
                <Form.Group
                    className="attemptsChecker"
                    controlId="formAttemptsChecker"
                >
                    <Form.Label>Add Attempts</Form.Label>
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={updateAttemptsRequested}
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => decreaseAttemptsLeft()}
                    disabled={attemptsLeft <= 0}
                >
                    Use attempt
                </Button>
            </div>
            <div>
                <Button onClick={() => increaseAttemptsLeft()}>
                    Gain attempts
                </Button>
            </div>
        </div>
    );
}
