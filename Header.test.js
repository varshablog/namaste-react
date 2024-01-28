import { fireEvent, render } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom"

it("Should load Login button inside header component",()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header/>
             </BrowserRouter>
        </Provider>
    )

    //Quering
    const button=screen.getByRole("button");

    //assertion
    expect(button).toBeInTheDocument()
})

it("Should load CartItems 0  inside header component",()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header/>
             </BrowserRouter>
        </Provider>
    )

    //Quering
    const cartItems=screen.getByText("Cart");

    //assertion
    expect(cartItems).toBeInTheDocument()
})

it("Should change Login button to Logout on Click ",()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header/>
             </BrowserRouter>
        </Provider>
    )

    //Quering
    const Loginbutton=screen.getByRole("button",{name:"Login"});

    fireEvent.click(Loginbutton)

    const Logoutbutton=screen.getByRole("button",{name:"Logout"});
    //assertion
    expect(Logoutbutton).toBeInTheDocument()
})