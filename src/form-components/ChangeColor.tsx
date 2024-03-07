//import { readdir } from "fs";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Check
                    inline
                    data-testid="color-sample"
                    style={{
                        width: "red".length.toString + "ch",
                        height: "red".length.toString + "ch",
                        backgroundColor: "red",
                        display: "inline-block"
                    }}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-red"
                    label="Red"
                    value="red"
                    background-color="red"
                    checked={color === "red"}
                />
                <Form.Check
                    inline
                    data-testid="color-sample"
                    style={{
                        width: "orange".length.toString + "ch",
                        height: "orange".length.toString + "ch",
                        backgroundColor: "orange",
                        display: "inline-block"
                    }}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-orange"
                    label="Orange"
                    value="orange"
                    checked={color === "orange"}
                />
                <Form.Check
                    inline
                    style={{
                        width: "yellow".length.toString + "ch",
                        height: "yellow".length.toString + "ch",
                        backgroundColor: "yellow",
                        display: "inline-block"
                    }}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-yellow"
                    label="Yellow"
                    value="yellow"
                    checked={color === "yellow"}
                />
                <Form.Check
                    inline
                    style={{
                        width: "green".length.toString + "ch",
                        height: "green".length.toString + "ch",
                        backgroundColor: "green",
                        display: "inline-block"
                    }}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-green"
                    label="Green"
                    value="green"
                    checked={color === "green"}
                />
                <Form.Check
                    inline
                    style={{
                        width: "blue".length.toString + "ch",
                        height: "blue".length.toString + "ch",
                        backgroundColor: "blue",
                        display: "inline-block"
                    }}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-blue"
                    label="Blue"
                    value="blue"
                    checked={color === "blue"}
                />
                <Form.Check
                    inline
                    style={{
                        width: "Purple".length.toString + "ch",
                        height: "Purple".length.toString + "ch",
                        backgroundColor: "purple",
                        display: "inline-block"
                    }}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-purple"
                    label="Purple"
                    value="purple"
                    checked={color === "purple"}
                />
                <Form.Check
                    inline
                    style={{
                        width: "Pink".length.toString + "ch",
                        height: "Pink".length.toString + "ch",
                        backgroundColor: "pink",
                        display: "inline-block"
                    }}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-pink"
                    label="Pink"
                    value="pink"
                    checked={color === "pink"}
                />
                <Form.Check
                    inline
                    style={{
                        width: "Black".length.toString + "ch",
                        height: "Black".length.toString + "ch",
                        backgroundColor: "black",
                        display: "inline-block"
                    }}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-black"
                    label="Black"
                    value="black"
                    checked={color === "black"}
                />
            </div>
            <span>You have chosen </span>
            <span
                data-testid="colored-box"
                style={{
                    width: color.length.toString + "ch",
                    height: color.length.toString + "ch",
                    backgroundColor: color,
                    display: "inline-block"
                }}
            >
                {color}
            </span>
            <span>.</span>
        </div>
    );
}
