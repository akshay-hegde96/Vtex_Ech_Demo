import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ImageHotspot from "../components/ImageHotspot/index";

import AddressBanner from "../components/AddressBanner";

// Configuration
configure({ adapter: new Adapter() });



// To check Tabs component is rendered properly inside ModelTabs component
describe("ImageHotspot", () => {
  test("ImageHotspot component rendered properly", () => {
    const component = shallow(<ImageHotspot />);
    const ImgHotspot = component.find("ImageHotspots").exists();
    expect(ImgHotspot).toBe(true);
  });

  test("TxtContainer rendered properly", () => {
    const component = shallow(<ImageHotspot />);
    const TxtContainer = component.find("div p").exists();
    expect(TxtContainer).toBe(true);
  });
});
