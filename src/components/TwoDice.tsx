import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function evaluate(diceOne: number, diceTwo: number): string {
    if (diceOne === diceTwo) {
        if (diceOne === 1) {
            return "Lose";
        } else {
            return "Win";
        }
    }
    return "";
}

export function TwoDice(): JSX.Element {
    const [diceOne, setDiceOne] = useState<number>(1);
    const [diceTwo, setDiceTwo] = useState<number>(6);
    return (
        <div>
            <span data-testid="left-die">
                Value:{diceOne}
                <Button onClick={() => setDiceOne(d6())}>Roll Left</Button>
            </span>
            <span data-testid="right-die">
                Value:{diceTwo}
                <Button onClick={() => setDiceTwo(d6())}>Roll Right</Button>
            </span>
            <span>{evaluate(diceOne, diceTwo)}</span>
        </div>
    );
}
