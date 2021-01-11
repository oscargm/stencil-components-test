import BasePage from "../base.page";

class Home extends BasePage {
  get title() {
    return "Components / Button - States ⋅ Storybook";
  }

  /**
   * Opens the page
   */
  open() {
    super.open("http://localhost:6006/?path=/story/components-button--states");
  }
}

export default new Home();
