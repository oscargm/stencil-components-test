import BasePage from "../base.page";

class ButtonPage extends BasePage {
  get button() {
    return $("co2-button");
  }

  /**
   * Opens the page
   */
  open() {
    super.open("http://localhost:6006/?path=/story/button--enabled");
  }
}

export default new ButtonPage();
