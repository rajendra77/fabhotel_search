import React from "react";
import {render} from '@testing-library/react'
import ListItem from "../index";

describe('Rendering List item', ()=>{
  test('Check Result List', ()=>{
    render(<ListItem />)
  })
})

  