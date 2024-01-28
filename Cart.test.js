import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import mockResMenu from "../mocks/mockResMenu.json";
import { act } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockResMenu);
    },
  });
});

it("Should render restaurant Menu page", async () => {
  await act(async () =>
        render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
            <Cart/>
            <RestaurantMenu />
        </Provider>
        )
    );

    const menuPanel=screen.getByText("South Indian (26)")
    fireEvent.click(menuPanel);

    const foodItems=screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(26);

    const button=screen.getAllByRole("button",{name:"ADD"})
    fireEvent.click(button[0]);

    const cartItem1=screen.getByText("1");
    expect(cartItem1).toBeInTheDocument();

    fireEvent.click(button[1]);
    const cartItem2=screen.getByText("2");
    expect(cartItem2).toBeInTheDocument();

    fireEvent.click(screen.getByText("2"));
    const CartList=screen.getAllByTestId("foodItems");
    expect(CartList.length).toBe(28);



});
