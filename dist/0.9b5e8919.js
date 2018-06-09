webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todoBox_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todoBox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todoBox_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todoBox_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todoBox_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0c4d28ec_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_todoBox_vue__ = __webpack_require__(57);
function injectStyle (ssrContext) {
  __webpack_require__(41)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0c4d28ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todoBox_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0c4d28ec_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_todoBox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _todo = __webpack_require__(43);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  metaInfo: {
    title: 'into the todo app'
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    console.log('##todo box before enter');
    // 相同类型的路由重复切换，不会触发这个，只会触发下面的beforeRouteUpdate
    next(function (vm) {
      console.log('vm', vm);
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    console.log('##todo update enter');
    // 替代 wtach: {this.$route.id} , /test/:id 形如这样的变换时，会触发 这种情况不会触发mounted
    next();
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    // 用于提醒用户是否确认离开
    console.log('##todo leave enter');
    next();
  },

  components: {
    Todo: _todo2.default
  }
}; //
//
//
//
//
//
//

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _item = __webpack_require__(46);

var _item2 = _interopRequireDefault(_item);

var _tabs = __webpack_require__(52);

var _tabs2 = _interopRequireDefault(_tabs);

var _vuex = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 0;
exports.default = {
  data: function data() {
    return {
      todos: [],
      filter: 'all'
    };
  },

  components: {
    Item: _item2.default,
    Tabs: _tabs2.default
  },
  mounted: function mounted() {
    // let i = 1
    this.updateCountSync({
      num: 5,
      time: 2000
    });
    // this.$store.dispatch('updateCountSync', {
    //   num: 5,
    //   time: 2000
    // })
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
  },

  computed: _extends({}, (0, _vuex.mapState)(['count']), (0, _vuex.mapGetters)(['fullName']), {
    // fullName () {
    //   return this.$store.getters.fullName
    // },
    filteredTodos: function filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }
      var completed = this.filter === 'completed';
      return this.todos.filter(function (todo) {
        return completed === todo.completed;
      });
    }
  }),
  methods: _extends({}, (0, _vuex.mapActions)(['updateCountSync']), (0, _vuex.mapMutations)(['updateCount']), {
    addTodo: function addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = '';
    },
    deleteTodo: function deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(function (todo) {
        return todo.id === id;
      }), 1);
    },
    toggleFilter: function toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted: function clearAllCompleted() {
      this.todos = this.todos.filter(function (todo) {
        return !todo.completed;
      });
    }
  })
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo: function deleteTodo() {
      this.$emit('del', this.todo.id);
    }
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      states: ['all', 'active', 'completed']
    };
  },

  computed: {
    unFinishedTodoLength: function unFinishedTodoLength() {
      return this.todos.filter(function (todo) {
        return !todo.completed;
      }).length;
    }
  },
  methods: {
    clearAllCompleted: function clearAllCompleted() {
      this.$emit('clearAllCompleted');
    },
    toggleFilter: function toggleFilter(state) {
      this.$emit('toggle', state);
    }
  }
};

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("13c8432f", content, true, {});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "h1[data-v-0c4d28ec]{text-align:center;font-size:50px}", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba9c2128_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_todo_vue__ = __webpack_require__(56);
function injectStyle (ssrContext) {
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ba9c2128"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba9c2128_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_todo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("81de02c0", content, true, {});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".real-app[data-v-ba9c2128]{width:600px;margin:0 auto;-webkit-box-shadow:0 0 5px #666;box-shadow:0 0 5px #666}.add-input[data-v-ba9c2128]{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;outline:none;color:inherit;padding:6px;border:1px solid #999;-webkit-box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px 16px 16px 60px;border:none;-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,.03);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_646033b9_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_item_vue__ = __webpack_require__(51);
function injectStyle (ssrContext) {
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-646033b9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_646033b9_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1ed4953f", content, true, {});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".todo-item[data-v-646033b9]{position:relative;background-color:#fff;font-size:24px;border-bottom:1px solid rgba(0,0,0,.06)}.todo-item:hover .destory[data-v-646033b9]:after{content:\"\\D7\"}.todo-item label[data-v-646033b9]{white-space:pre-line;word-break:break-all;padding:15px 60px 15px 15px;margin-left:45px;display:block;line-height:1.2;-webkit-transition:color .4s;transition:color .4s}.todo-item.completed label[data-v-646033b9]{color:#d9d9d9;text-decoration:line-through}.toggle[data-v-646033b9]{text-align:center;width:40px;height:40px;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.toggle[data-v-646033b9]:after{content:url(" + __webpack_require__(49) + ")}.toggle[data-v-646033b9]:checked:after{content:url(" + __webpack_require__(50) + ")}.destory[data-v-646033b9]{position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;margin-bottom:11px;-webkit-transition:color .2s ease-out;transition:color .2s ease-out;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:0;cursor:pointer;outline:none}", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iLTEwIC0xOCAxMDAgMTM1Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWRlZGVkIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4="

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iLTEwIC0xOCAxMDAgMTM1Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYmRkYWQ1IiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBmaWxsPSIjNWRjMmFmIiBkPSJNNzIgMjVMNDIgNzEgMjcgNTZsLTQgNCAyMCAyMCAzNC01MnoiLz48L3N2Zz4="

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['todo-item', _vm.todo.completed ? 'completed' : '']},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.todo.completed),expression:"todo.completed"}],staticClass:"toggle",attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.todo.completed)?_vm._i(_vm.todo.completed,null)>-1:(_vm.todo.completed)},on:{"change":function($event){var $$a=_vm.todo.completed,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.todo.completed=$$a.concat([$$v]))}else{$$i>-1&&(_vm.todo.completed=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.$set(_vm.todo, "completed", $$c)}}}}),_vm._v(" "),_c('label',[_vm._v(_vm._s(_vm.todo.content))]),_vm._v(" "),_c('button',{staticClass:"destory",on:{"click":_vm.deleteTodo}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54f64248_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__ = __webpack_require__(55);
function injectStyle (ssrContext) {
  __webpack_require__(53)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54f64248"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54f64248_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("40695f46", content, true, {});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".helper[data-v-54f64248]{font-weight:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:5px 0;line-height:30px;background-color:#fff;font-size:14px}.clear[data-v-54f64248],.left[data-v-54f64248],.tabs[data-v-54f64248]{padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}.clear[data-v-54f64248],.left[data-v-54f64248]{width:150px}.left[data-v-54f64248]{text-align:left}.clear[data-v-54f64248]{text-align:right;cursor:pointer}.tabs[data-v-54f64248]{width:200px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.tabs [data-v-54f64248]{display:inline-block;padding:0 10px;cursor:pointer;border:1px solid rgba(175,47,47,0)}.tabs .actived[data-v-54f64248]{border-color:rgba(175,47,47,.4);border-radius:5px}", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"helper"},[_c('span',{staticClass:"left"},[_vm._v(_vm._s(_vm.unFinishedTodoLength)+" items left")]),_vm._v(" "),_c('span',{staticClass:"tabs"},_vm._l((_vm.states),function(state){return _c('span',{key:state,class:[state, _vm.filter === state ? 'actived' : ''],on:{"click":function($event){_vm.toggleFilter(state)}}},[_vm._v("\n      "+_vm._s(state)+"\n    ")])})),_vm._v(" "),_c('span',{staticClass:"clear",on:{"click":_vm.clearAllCompleted}},[_vm._v("Clear Completed")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"real-app"},[_c('p',[_vm._v("看这里看这里"+_vm._s(_vm.fullName)+" "+_vm._s(_vm.count))]),_vm._v(" "),_c('input',{staticClass:"add-input",attrs:{"type":"text","autofocus":"autofocus","placeholder":"做点什么？"},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.addTodo($event)}}}),_vm._v(" "),_vm._l((_vm.filteredTodos),function(todo){return _c('item',{key:todo.id,attrs:{"todo":todo},on:{"del":_vm.deleteTodo}})}),_vm._v(" "),_c('tabs',{attrs:{"filter":_vm.filter,"todos":_vm.todos},on:{"toggle":_vm.toggleFilter,"clearAllCompleted":_vm.clearAllCompleted}})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("脚手架程序 - TODO功能测试")]),_vm._v(" "),_c('todo')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
]);