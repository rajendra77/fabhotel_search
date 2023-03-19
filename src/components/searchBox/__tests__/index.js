import React from "react";
import {render} from '@testing-library/react'
import SearchBox from "../index";

describe('rendering Searchbox', ()=>{
  test('Check Search box', ()=>{
    render(<SearchBox />)
  })
})