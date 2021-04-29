import React from 'react';
import { cleanup, fireEvent, render } from "@testing-library/react"
import Button from './Button';

afterEach(cleanup)

describe("Button Component", () => {
    const onClick = jest.fn()

    const ButtonProps = {
        id: "btn-id",
        className: "btn btn-primary",
        value: "Primary",
        href:"#",
        onClick: onClick
    }

    it("Rendering content",() => {
        const {getByText} = render(<Button {...ButtonProps} />)
        const value = getByText("Primary")
        expect(value.getAttribute("id")).toBe("btn-id")
        expect(value.getAttribute("class")).toBe("btn btn-primary")
        expect(value.getAttribute("href")).toBe("#")
    })

    it("Button event handlers",() => {
        const { getByText } = render(<Button {...ButtonProps} />)
        // Event Handling
        const value = getByText("Primary")
        fireEvent.click(value)
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})