export class CssVars {
  constructor() {
  }
  getVar(elem, varName) {
    return getComputedStyle(elem).getPropertyValue(varName).trim();
  }
  setVar(elem, varName, value) {
    elem.style.setProperty(varName, value);
  }
}