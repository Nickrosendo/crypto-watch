/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { CoinsList } from "@root/components";

describe("CoinsList tests", () => {
  it("should render without crashing with empty list", () => {
    render(<CoinsList />);

    const list = screen.getByTitle("coins-list-container");

    expect(list).toBeInTheDocument();
  });

  it("should render the provided item", () => {
    const mockCoins = [
      {
        id: "mockcoin",
        image: "",
        price: 999.99,
        currency: "$",
        name: "MockCoin",
        update: {
          type: 'increase',
          percentage: 50
        }
      },
    ];
    render(<CoinsList coins={mockCoins} />);

    const item = screen.getByTitle("mockcoin-coin-list-item");

    expect(item).toBeInTheDocument();
  });

  it("should render only one item", () => {
    const mockCoins = [
      {
        id: "mockcoin",
        image: "",
        price: 999.99,
        currency: "$",
        name: "MockCoin",
        update: {
          type: 'increase',
          percentage: 50
        }
      },
    ];
    render(<CoinsList coins={mockCoins} />);

    const list = screen.getByTitle("coins-list-container");

    expect(list.childElementCount).toBe(1);
  });

  it("should render multiple items", () => {
    const mockCoins = [
      {
        id: "mockcoin",
        image: "",
        price: 999.99,
        currency: "$",
        name: "MockCoin",
        update: {
          type: 'decrease',
          percentage: 50
        }
      },
      {
        id: "mockcoin2",
        image: "",
        price: 999.99,
        currency: "$",
        name: "MockCoin2",
        update: {
          type: 'decrease',
          percentage: 50
        }
      },
      {
        id: "mockcoin3",
        image: "",
        price: 999.99,
        currency: "$",
        name: "MockCoin4",
        update: {
          type: 'increase',
          percentage: 24
        }
      },
    ];
    render(<CoinsList coins={mockCoins} />);

    const list = screen.getByTitle("coins-list-container");

    expect(list.childElementCount).toBe(3);
  });
});
