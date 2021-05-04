import React from 'react';
import { cleanup, render } from "@testing-library/react"
import Navbar from './Navbar';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

afterEach(cleanup)

describe("Navbar Component", () => {
    const onClick = jest.fn()

    const NavbarProps = {
        value1:"All",
        value2:"article",
        value3:"podcast",
        value4:"video",
        NavBackgroundColor:"LightGrey",
        NavFontColor:"black",
        onClick: onClick
    }

    it("Rendering content value1",() => {
        const {getByText} = render(<Navbar {...NavbarProps} />)
        const value = getByText("All")
        expect(value.getAttribute("class")).toBe("nav-link active")
        expect(value.getAttribute("href")).toBe("#")
    })

    it("Rendering content value2",() => {
        const {getByText} = render(<Navbar {...NavbarProps} />)
        const value = getByText("article")
        expect(value.getAttribute("class")).toBe("nav-link")
        expect(value.getAttribute("href")).toBe("#")
    })

    it("Rendering content value3",() => {
        const {getByText} = render(<Navbar {...NavbarProps} />)
        const value = getByText("podcast")
        expect(value.getAttribute("class")).toBe("nav-link")
        expect(value.getAttribute("href")).toBe("#")
    })

    it("Rendering content value4",() => {
        const {getByText} = render(<Navbar {...NavbarProps} />)
        const value = getByText("video")
        expect(value.getAttribute("class")).toBe("nav-link")
        expect(value.getAttribute("href")).toBe("#")
    })

    it('should render correctly', () => {
        const component = shallow(<Navbar debug />);
        expect(component).toMatchSnapshot();
    });
})