import React from "react";
import PageCinematicTransition from "../src/components/PageCinematicTransition";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/mock-path",
}));

// Mock next/image
jest.mock("next/image", () => {
  const MockImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return React.createElement("img", { ...props });
  };
  MockImage.displayName = "Image";
  return MockImage;
});

// Mock framer-motion to simplify rendering for testing
jest.mock("framer-motion", () => {
  const React = jest.requireActual("react");
  const motion = {
    div: React.forwardRef((props: React.HTMLProps<HTMLDivElement>, ref: React.Ref<HTMLDivElement>) => 
      React.createElement("div", { ...props, ref })
    ),
  };
  motion.div.displayName = "motion.div";
  return { motion };
});

describe("PageCinematicTransition Pure React Tests", () => {
  it("should create a valid React element tree", () => {
    const children = React.createElement("div", null, "Content");
    const element = React.createElement(PageCinematicTransition, null, children);
    
    expect(element).toBeDefined();
    expect(element.type).toBe(PageCinematicTransition);
  });

  it("should render and return a structural virtual DOM with key path", () => {
    const children = React.createElement("div", { className: "test-child" }, "Child Content");
    const vdom = PageCinematicTransition({ children });

    expect(vdom).toBeDefined();
    expect(vdom.key).toBe("/mock-path");
    expect(vdom.props.className).toContain("relative");
  });
});
