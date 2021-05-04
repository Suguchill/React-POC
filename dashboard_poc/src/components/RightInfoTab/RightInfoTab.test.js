import React from 'react';
import { cleanup, render } from "@testing-library/react"
import RightInfoTab from './RightInfoTab';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

afterEach(cleanup)

describe("RightInfoTab Component", () => {
    const onClick = jest.fn()

    const RightInfoTabProps = {
        "ibProps" : [{
            variant:"",
            imgSrc: "img1",
            altText: "image alt text",
            title: "Your limitation it's only your imagination.",
        },
        {
            variant:"",
            imgSrc: "img2",
            altText: "image alt text",
            title: "Great things never come from comfort zones",
        },
        {
            variant:"",
            imgSrc: "img3",
            altText: "image alt text",
            title: "Dream it. Wish it. Do it",
        },
        {
            variant:"withCTA",
            imgSrc: "img4",
            altText: "image alt text",
            title: "Stay Focused",
            ctaTitle: "Read Articles",
            className: "btn btn-dark"
        },
        {
            variant:"withPlayButton",
            imgSrc: "img5",
            altText: "image alt text",
            title: "Things that go around will always come back",
        },
        {
            variant: "",
            imgSrc: "img6",
            altText: "image alt text",
            title: "Information Block",
        }
        ],
        "navProps" : {
            value1:"All",
            value2:"article",
            value3:"video",
            value4:"podcast",
            NavBackgroundColor: "black",
            NavFontColor:"white"
        }
    }

    it("Rendering content value1",() => {
        const {getByText} = render(<RightInfoTab {...RightInfoTabProps} />)
        const value = getByText("Motivation")
        expect(value.getAttribute("class")).toBe("row titleStyle")
    })

    it('should render correctly ', () => {
        const component = shallow(<RightInfoTab {...RightInfoTabProps} debug />);
        expect(component).toMatchSnapshot();
    });

})