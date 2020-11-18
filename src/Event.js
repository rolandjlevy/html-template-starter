export class Event {
  constructor() {
    this.mouse = this.getEventTypes();
  }
  getEventTypes() {
    const docElem = document.documentElement;
    return {
      down: 'ontouchstart' in docElem ? 'touchstart' : 'mousedown',
      up: 'ontouchend' in docElem ? 'touchend' : 'mouseup',
      move: 'ontouchmove' in docElem ? 'touchmove' : 'mousemove'
    }
  }
}