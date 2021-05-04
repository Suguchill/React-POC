import React from "react";
import Login from './login';
import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe('loginComponent', () => {
    const setLoginState = jest.fn();
    const LoginState = jest.spyOn(React, "useState");
    LoginState.mockImplementation(loginState => [loginState, setLoginState]);


    it('should render correctly ', () => {
        const component = shallow(<Login debug />);
        expect(component).toMatchSnapshot();
    });

    it("testing event handlers",() => {
        const { getByText, getByTestId} = render(<Login setLoginState={setLoginState} />)
        
        const name = getByTestId("userField")
        userEvent.type(name, 'admin')
        const pass = getByTestId("passField")
        userEvent.type(pass, '')

        getByText('*Required')
    })

});