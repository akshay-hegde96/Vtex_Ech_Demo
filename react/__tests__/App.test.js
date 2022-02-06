import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ModelTabs from "../components/ModelTabs/index";

import AddressBanner from "../components/AddressBanner";

// Configuration
configure({ adapter: new Adapter() });



// To check Tabs component is rendered properly inside ModelTabs component
describe("ModelTabs", () => {
  test("Tabs component rendered properly", () => {
    const component = shallow(<ModelTabs />);
    const TabsExists = component.find("Tabs").exists();
    expect(TabsExists).toBe(true);
  });
});




// AddressBanner Component
describe("AddressBanner", () => {
  // To find the text EMAIL US
  it("should show text Email Us", () => {
    const wrapper = shallow(<AddressBanner />);
    const text = wrapper.find("div div div a");
    expect(text.text()).toBe("EMAIL US");
  });
// To find the text RETURN POLICY  
  it("should show text RETURN POLICY", () => {
    const wrapper = shallow(<AddressBanner />);
    const text = wrapper.find("div div a h4");
    expect(text.text()).toBe("RETURN POLICY");
  });

// Snapshot test
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<AddressBanner debug />);

    expect(component).toMatchSnapshot();
  });
});
