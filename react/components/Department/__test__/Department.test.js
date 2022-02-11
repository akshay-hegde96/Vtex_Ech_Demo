import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ReactDOM from 'react-dom';
import Banner from './../Banner';
import Department from "../index"

import { render } from '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

describe("Banner", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Banner></Banner>, div)
    })
    
    it("renders banner correctly", () => {
        const wrapper = shallow(<Banner imgUrl="javascript:void(0)" bannerText="some text"></Banner>)
        const heading = wrapper.find("h2")
        /* const bannerImg = wrapper.find("img")
        expect(bannerImg.getAttribute("src")).toBe("javascript:void(0)") */
        expect(heading.text()).toBe("GENUINE 2020 NISSAN some text* PARTS")
    })
})

/* describe("Department", () => {
    it("Department renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Department></Department>, div)
    })
}) */
