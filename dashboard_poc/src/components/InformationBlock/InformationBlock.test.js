import React from 'react';
import { cleanup, render } from "@testing-library/react"
import InformationBlock from './InformationBlock';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
afterEach(cleanup)

describe("InformationBlock Component", () => {
    const onClick = jest.fn()

    const InformationBlockProps = [{
        variant:"",
        altText: "image alt text",
        title: "Your limitation it's only your imagination.",
    },
    {
        variant:"",
        altText: "image alt text",
        title: "Great things never come from comfort zones",
    },
    {
        variant:"",
        altText: "image alt text",
        title: "Dream it. Wish it. Do it",
    },
    {
        variant:"withCTA",
        altText: "image alt text",
        title: "Stay Focused",
        ctaTitle: "Read Articles",
        className: "btn btn-dark",
        onClick: onClick
    },
    {
        variant:"withPlayButton",
        altText: "image alt text",
        title: "Things that go around will always come back",
    }
    ]

    it("Rendering content IB1",() => {
        const {getByAltText} = render(<InformationBlock {...InformationBlockProps[0]} />)
        const value = getByAltText("image alt text")
        expect(value.getAttribute("class")).toBe("infoImageStyle")
    })

    it("Rendering content IB2",() => {
        const {getByAltText} = render(<InformationBlock {...InformationBlockProps[1]} />)
        const value = getByAltText("image alt text")
        expect(value.getAttribute("class")).toBe("infoImageStyle")
    })

    it('should render correctly', () => {
        const component = shallow(<InformationBlock debug />);
        expect(component).toMatchSnapshot();
    });
})