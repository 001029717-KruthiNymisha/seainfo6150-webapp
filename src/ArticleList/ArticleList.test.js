import React from "react";
import ArticleList from "./ArticleList";
import { fireEvent } from "@testing-library/react";
describe("ArticleListTest", () => {
    const articles = [
      {
         slug: "181122102925-statue-of-liberty-crown",
         title: "The Statue of Liberty's torch heads to new museum",
         shortText:"The Statue of Liberty's original torch is getting a new home",
         displayDate: 'November 22nd 2018, 7:12 am',
         image: {
          _url: "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg",
        },
      },
      {
        slug: "170321135754-airport-security-line",
        title: 'You can take a pie on a plane',
        shortText:"Getting excited to eat your mother's roast turkey, your uncle's stuffing and your sister's famous green bean casserole?",
        displayDate: 'November 21st 2018, 2:57 pm',
        image: {
          _url: "https://cdn.cnn.com/cnnnext/dam/assets/170321135754-airport-security-line-file-super-169.jpg",
        },
      }
    ];
    it("renders correctly", () => {
    const { container } = render(<ArticleList articles={Object.values(articles)} />);
    expect(container).toMatchSnapshot();
  });
});