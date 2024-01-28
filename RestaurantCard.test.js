import { render, screen } from "@testing-library/react"
import Cards from "../Cards"
import resCardMock from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render Restaurant Card Component with props data ",()=>{
    render(<Cards resData={resCardMock}/>)

    //Querying
    const resData=screen.getByText("McDonald's");

    //Assertion
    expect(resData).toBeInTheDocument();
})