import React from 'react';
import { cleanup, render } from "@testing-library/react"
import AvatarImage from './AvatarImage'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

afterEach(cleanup)

describe("Button Component", () => {
    const AvatarImageProps = {
        id: "avatarimg",
        className: "img-fluid",
        alt: "Avatar Image",
        src: ""
    }

    it("Rendering content",() => {
        const {getByAltText} = render(<AvatarImage {...AvatarImageProps} />)
        const value = getByAltText("Avatar Image")
        expect(value.getAttribute("id")).toBe("avatarimg")
        expect(value.getAttribute("class")).toBe("img-fluid")
        // expect(value.getAttribute("src")).toBe(ProfileImg)
    })

    it('Render correctly', () => {
        const component = shallow(<AvatarImage debug />);
        expect(component).toMatchSnapshot();
    });
})