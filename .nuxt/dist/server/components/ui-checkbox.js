exports.ids = [1];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".checkbox[data-v-25a1dff9]{display:flex;align-items:center;grid-column-gap:11px;-moz-column-gap:11px;column-gap:11px;font-weight:500;font-size:14px;line-height:20px;color:rgba(58,53,65,.87)}.checkbox.err[data-v-25a1dff9]{color:#ba1b1b}.checkbox.err .checkbox__span[data-v-25a1dff9]{border-color:#ba1b1b}.checkbox__span[data-v-25a1dff9]{position:relative;display:block;min-width:18px;min-height:18px;max-width:18px;max-height:18px;border:1px solid #d4dbee;border-radius:3px;box-sizing:border-box;transition:.3s;cursor:pointer}.checkbox__span[data-v-25a1dff9]:before{content:\"\";display:block;width:5px;height:10px;border-right:2px solid #fff;border-bottom:2px solid #fff;position:absolute;top:2px;left:6px;transform:rotate(40deg);transition:.3s;opacity:0}.checkbox input[data-v-25a1dff9]{display:none}.checkbox input:checked+span[data-v-25a1dff9]{border-color:#9155fd;background-color:#9155fd}.checkbox input:checked+span[data-v-25a1dff9]:before{opacity:1}.checkbox a[data-v-25a1dff9]{text-decoration:none;color:#9155fd}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/ui/Checkbox.vue?vue&type=template&id=25a1dff9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:['checkbox', { err: _vm.error }]},[_vm._ssrNode("<input type=\"checkbox\""+(_vm._ssrAttr("value",_vm.modelValue))+(_vm._ssrAttr("checked",_vm.modelValue))+" data-v-25a1dff9> <span class=\"checkbox__span\" data-v-25a1dff9></span> "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ui/Checkbox.vue?vue&type=template&id=25a1dff9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/ui/Checkbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var Checkboxvue_type_script_lang_js_ = ({
  name: 'UiCheckbox',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  },

  setup(props, {
    emit
  }) {
    const changeValue = e => {
      emit('change', !props.modelValue);
    };

    return {
      changeValue
    };
  }

});
// CONCATENATED MODULE: ./components/ui/Checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_Checkboxvue_type_script_lang_js_ = (Checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ui/Checkbox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_Checkboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "25a1dff9",
  "7a92eb66"
  
)

/* harmony default export */ var Checkbox = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("906ea904", content, true, context)
};

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Checkbox_vue_vue_type_style_index_0_id_25a1dff9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Checkbox_vue_vue_type_style_index_0_id_25a1dff9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Checkbox_vue_vue_type_style_index_0_id_25a1dff9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Checkbox_vue_vue_type_style_index_0_id_25a1dff9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Checkbox_vue_vue_type_style_index_0_id_25a1dff9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=ui-checkbox.js.map