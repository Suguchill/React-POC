import React from 'react';
import { cleanup, fireEvent, render } from "@testing-library/react"
import Input from './Input';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
afterEach(cleanup)

describe("Input Component", () => {
    const onChange = jest.fn()

    const InputProps = [{
        id: "textField",
        type:"text",
        className: "form-control",
        value: "admin",
        placeholder:"Enter your username",
        onChange: onChange
    },
    {
        id: "passwordField",
        type:"password",
        className: "form-control",
        value: "admin",
        placeholder:"Enter your password",
        onChange: onChange
    }
]

    it("Rendering content TextField",() => {
        const {getByPlaceholderText} = render(<Input {...InputProps[0]} />)
        const value = getByPlaceholderText("Enter your username")
        expect(value.getAttribute("id")).toBe("textField")
        expect(value.getAttribute("class")).toBe("form-control")
        expect(value.getAttribute("type")).toBe("text")
        expect(value.getAttribute("value")).toBe("admin")
    })

    it("Rendering content PasswordField",() => {
        const {getByPlaceholderText} = render(<Input {...InputProps[1]} />)
        const value = getByPlaceholderText("Enter your password")
        expect(value.getAttribute("id")).toBe("passwordField")
        expect(value.getAttribute("class")).toBe("form-control")
        expect(value.getAttribute("type")).toBe("password")
        expect(value.getAttribute("value")).toBe("admin")
    })

    it("Input event handlers",() => {
        const { getByPlaceholderText } = render(<Input {...InputProps[0]} />)
        // Event Handling
        const value = getByPlaceholderText("Enter your username")
        fireEvent.change(value, { target: { value: 'changed' } })
        expect(onChange).toHaveBeenCalledTimes(1)
    })

    it("Input event handlers",() => {
        const { getByPlaceholderText } = render(<Input {...InputProps[1]} />)
        // Event Handling
        const value = getByPlaceholderText("Enter your password")
        fireEvent.change(value, { target: { value: 'changed' } })
        expect(onChange).toHaveBeenCalledTimes(2)
    })

    it('should render correctly', () => {
        const component = shallow(<Input debug />);
        expect(component).toMatchSnapshot();
    });
})