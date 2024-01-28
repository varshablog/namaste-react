import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import {act} from "react-dom/test-utils"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should search res list for burger item",async()=>{
        await act( async() => render(
        <BrowserRouter> <Body/></BrowserRouter>
        )
    );

    const search=screen.getByRole("button",{name:"Search"});
    const searchBox=screen.getByTestId("searchInput");
    
    //for getting matching input box text
    fireEvent.change(searchBox,{target :{value:"burger"} });

    //for clicking search button
    fireEvent.click(search);

    const cards=screen.getAllByTestId("resCards")

    expect(cards.length).toBe(1);

    expect(search).toBeInTheDocument
    

})

it("Should render top rated res list ",async()=>{
    await act( async() => render(
    <BrowserRouter> <Body/></BrowserRouter>
    )
);

const beforeClick=screen.getAllByTestId("resCards");
expect(beforeClick.length).toBe(20);

const ratedButton=screen.getByRole("button",{name:"Top Rated Restaurant"})
fireEvent.click(ratedButton);

const afterClick=screen.getAllByTestId("resCards");

expect(afterClick.length).toBe(19);


})