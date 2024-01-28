import { render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("Should load Contact Us Component",()=>{
    render(<Contact/>);

    //Quering
    const heading=screen.getByRole("heading");

    //Asserion
    expect(heading).toBeInTheDocument();
})

test("Should load button inside Contact Document",()=>{
    render(<Contact/>);

    //Quering-there is any text (named button) inside DOM
        const button=screen.getByText("Submit");

    //Asserion
    expect(button).toBeInTheDocument();
})

test("Should load 2 inputBoxes inside Contact Component",()=>{
    render(<Contact/>);

    //Quering
    const textBoxes=screen.getAllByRole("textbox");

    //Asserion
    expect(textBoxes.length).toBe(2);

    // expect(textBoxes.length).not.toBe(2);
})