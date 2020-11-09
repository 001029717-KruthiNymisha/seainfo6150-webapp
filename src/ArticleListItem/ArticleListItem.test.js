import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItemTests", () => {
    const article = {
        slug: '181122102925-statue-of-liberty-crown',
        title: "The Statue of Liberty's torch heads to new museum",
        shortText:
            "The Statue of Liberty's original torch is getting a new home",
        author: 'Kate Farley',
        displayDate: 'November 22nd 2018, 7:12 am',
    };
    it("renders correctly", () => {
        const { container } = render(<ArticleListItem article={article} />);
        expect(container).toMatchSnapshot();
    });

});