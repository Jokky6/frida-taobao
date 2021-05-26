(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

const e = require("./logger"), t = Memory.alloc(16);

t.writeU32(3735928559).add(4).writeU32(3490705421).add(4).writeU64(uint64("0x1122334455667788")), 
e.log(hexdump(t.readByteArray(16), {
  ansi: !0
})), Process.getModuleByName("libSystem.B.dylib").enumerateExports().slice(0, 16).forEach(((t, r) => {
  e.log(`export ${r}: ${t.name}`);
})), Interceptor.attach(Module.getExportByName(null, "open"), {
  onEnter(t) {
    const r = t[0].readUtf8String();
    e.log(`open() path="${r}"`);
  }
});

},{"./logger":2}],2:[function(require,module,exports){
"use strict";

function e(e) {
  console.log(e);
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.log = void 0, exports.log = e;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhZ2VudC9pbmRleC50cyIsImFnZW50L2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE1BQUEsSUFBQSxRQUFBLGFBRU0sSUFBUyxPQUFPLE1BQU07O0FBQzVCLEVBQ0ssU0FBUyxZQUFZLElBQUksR0FDekIsU0FBUyxZQUFZLElBQUksR0FDekIsU0FBUyxPQUFPO0FBQ3JCLEVBQUEsSUFBSSxRQUFRLEVBQU8sY0FBYyxLQUFvQjtFQUFFLE9BQU07S0FFN0QsUUFBUSxnQkFBZ0IscUJBQ25CLG1CQUNBLE1BQU0sR0FBRyxJQUNULFNBQVEsQ0FBQyxHQUFLO0VBQ1gsRUFBQSxJQUFJLFVBQVUsTUFBVSxFQUFJO0tBR3BDLFlBQVksT0FBTyxPQUFPLGdCQUFnQixNQUFNLFNBQVM7RUFDckQsUUFBUTtJQUNKLE1BQU0sSUFBTyxFQUFLLEdBQUc7SUFDckIsRUFBQSxJQUFJLGdCQUFnQjs7Ozs7OztBQ25CNUIsU0FBZ0IsRUFBSTtFQUNoQixRQUFRLElBQUk7Ozs7OzBCQURoQixRQUFBLE1BQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiJ9
