import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🏳️‍🌈" | "🎃" | "⚒️" | "🏳️‍⚧️" | "❄️";

const ALPHABETICAL: Record<Holiday, Holiday> = {
    "🏳️‍🌈": "🎃",
    "🎃": "⚒️",
    "⚒️": "🏳️‍⚧️",
    "🏳️‍⚧️": "❄️",
    "❄️": "🏳️‍🌈"
};
const CHRONOLOGICAL: Record<Holiday, Holiday> = {
    "🏳️‍⚧️": "🏳️‍🌈",
    "🏳️‍🌈": "⚒️",
    "⚒️": "🎃",
    "🎃": "❄️",
    "❄️": "🏳️‍⚧️"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🏳️‍🌈");
    return (
        <div>
            <span>Current Holiday: {holiday}</span>
            <span>
                <Button onClick={() => setHoliday(ALPHABETICAL[holiday])}>
                    Advance by Alphabet
                </Button>
            </span>
            <span>
                <Button onClick={() => setHoliday(CHRONOLOGICAL[holiday])}>
                    Advance by Year
                </Button>
            </span>
        </div>
    );
}
