import React from 'react';
import {render} from "@testing-library/react";
import Hello from "./hello";
import '@testing-library/jest-dom/extend-expect'


describe('select', () => {
  test('selected value', () => {
    const {container} = render(<Hello/>)
    const select = container.querySelector<HTMLInputElement>('select');
    expect(select!.value).toEqual('222');
  });
})
