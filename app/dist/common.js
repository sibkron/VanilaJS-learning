"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
  function Task() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();
    var isCompleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Task);

    this.title = title, this._isCompleted = isCompleted, Task.counter += 1;
  }

  _createClass(Task, [{
    key: "completed",
    value: function completed() {
      this.isCompleted = true;
    }
  }, {
    key: "isCompleted",
    get: function get() {
      return this._isCompleted === true ? "task is completed" : "task is not completed";
    }
  }], [{
    key: "getDefaultTitle",
    value: function getDefaultTitle() {
      return "Title default";
    }
  }]);

  return Task;
}();

Task.counter = 0;

var task = new Task("ES6", false);
var task2 = new Task("Learn ReactJS", true);
task.completed();

console.log(Task.isCompleted, Task._isCompleted);