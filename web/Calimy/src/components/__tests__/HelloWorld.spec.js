import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MainMenu from "../main/MainMenu.vue";

describe("MainMenu", () => {
  it("renders properly", () => {
    const wrapper = mount(MainMenu, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
