import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="edit-mode"
                    label="Edit Mode?"
                    checked={mode}
                    onChange={() => setMode(!mode)}
                    //onChange={updateMode}
                />
            </div>
            <div>
                {mode && (
                    <Form.Group className="name-changer" controlId="formName">
                        <Form.Label>New Name: </Form.Label>
                        <Form.Control
                            type="string"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                )}
            </div>
            <div>
                {mode && (
                    <Form.Check
                        type="checkbox"
                        id="Student"
                        label="Is Student?"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                        //onChange={updateIsStudent}
                    ></Form.Check>
                )}
            </div>
            <span>
                {!mode
                    ? isStudent
                        ? name + " is a student"
                        : name + " is not a student"
                    : ""}
            </span>
        </div>
    );
}
