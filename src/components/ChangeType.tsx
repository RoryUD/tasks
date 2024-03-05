import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionType(): void {
        setQuestionType(
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <div>
                <Button onClick={changeQuestionType}>Change Type</Button>
            </div>
            <div>
                {questionType === "multiple_choice_question" ? (
                    <span>Multiple Choice</span>
                ) : (
                    <span>Short Answer</span>
                )}
            </div>
        </div>
    );
}
