!function(e){var t={};function n(r){if(t[r])return t[r].exports;var d=t[r]={i:r,l:!1,exports:{}};return e[r].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),function(){const e=document.querySelector(".todo-list"),t=document.querySelector(".new-todo");t.autofocus=!0,t.addEventListener("keypress",n=>{if("Enter"===n.key&&t.value){const n=function(e){const t=document.createElement("li"),n=document.createElement("div"),r=document.createElement("input"),d=document.createElement("label"),o=document.createElement("button"),c=document.createElement("input");return n.classList.add("view"),r.classList.add("toggle"),r.type="checkbox",d.innerText=e,d.addEventListener("dblclick",()=>{t.classList.add("editing"),c.focus()}),o.classList.add("destroy"),c.classList.add("edit"),c.value=e,c.addEventListener("keypress",e=>{"Enter"===e.key&&t.classList.remove("editing")}),c.addEventListener("focusout",()=>{t.classList.remove("editing")}),n.appendChild(r),n.appendChild(d),n.appendChild(o),t.appendChild(n),t.appendChild(c),t}(t.value);e.appendChild(n),t.value=""}})}()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJ2YWx1ZSIsIm4iLCJfX2VzTW9kdWxlIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwidG9Eb0xpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b0RvSW5wdXQiLCJhdXRvZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsIm5ld0xpIiwidXNlcklucHV0IiwibGkiLCJjcmVhdGVFbGVtZW50IiwiZGl2IiwiaW5wdXRUb2dnbGUiLCJsYWJlbCIsImRlc3Ryb3lCdXR0IiwiaW5wdXRFZGl0IiwiY2xhc3NMaXN0IiwiYWRkIiwidHlwZSIsImlubmVyVGV4dCIsImZvY3VzIiwicmVtb3ZlIiwiYXBwZW5kQ2hpbGQiLCJuZXdUYXNrSFRNTExpIiwic2V0TGlzdGVuZXJzIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxLQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLElBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsWUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsR0FDQUssY0FBQSxFQUNBQyxZQUFBLEVBQ0FDLElBQUFOLEtBTUFaLEVBQUFtQixFQUFBLFNBQUFqQixHQUNBWSxPQUFBQyxlQUFBYixFQUFBLGNBQWlEa0IsT0FBQSxLQUlqRHBCLEVBQUFxQixFQUFBLFNBQUFsQixHQUNBLElBQUFTLEVBQUFULEtBQUFtQixXQUNBLFdBQTJCLE9BQUFuQixFQUFBLFNBQzNCLFdBQWlDLE9BQUFBLEdBRWpDLE9BREFILEVBQUFVLEVBQUFFLEVBQUEsSUFBQUEsR0FDQUEsR0FJQVosRUFBQWEsRUFBQSxTQUFBVSxFQUFBQyxHQUFzRCxPQUFBVixPQUFBVyxVQUFBQyxlQUFBbkIsS0FBQWdCLEVBQUFDLElBR3REeEIsRUFBQTJCLEVBQUEsR0FJQTNCLElBQUE0QixFQUFBLHlDQ2pFQSxXQUNBLE1BQUFDLEVBQUFDLFNBQUFDLGNBQUEsY0FDQUMsRUFBQUYsU0FBQUMsY0FBQSxhQUNBQyxFQUFBQyxXQUFBLEVBRUFELEVBQUFFLGlCQUFBLFdBQUFDLElBQ0EsYUFBQUEsRUFBQUMsS0FBQUosRUFBQVosTUFBQSxDQUNBLE1BQUFpQixFQ1RBLFNBQUFDLEdBQ0EsTUFBQUMsRUFBQVQsU0FBQVUsY0FBQSxNQUNBQyxFQUFBWCxTQUFBVSxjQUFBLE9BQ0FFLEVBQUFaLFNBQUFVLGNBQUEsU0FDQUcsRUFBQWIsU0FBQVUsY0FBQSxTQUNBSSxFQUFBZCxTQUFBVSxjQUFBLFVBQ0FLLEVBQUFmLFNBQUFVLGNBQUEsU0FpQ0EsT0EvQkFDLEVBQUFLLFVBQUFDLElBQUEsUUFFQUwsRUFBQUksVUFBQUMsSUFBQSxVQUNBTCxFQUFBTSxLQUFBLFdBRUFMLEVBQUFNLFVBQUFYLEVBQ0FLLEVBQUFULGlCQUFBLGdCQUNBSyxFQUFBTyxVQUFBQyxJQUFBLFdBQ0FGLEVBQUFLLFVBR0FOLEVBQUFFLFVBQUFDLElBQUEsV0FFQUYsRUFBQUMsVUFBQUMsSUFBQSxRQUNBRixFQUFBekIsTUFBQWtCLEVBQ0FPLEVBQUFYLGlCQUFBLFdBQUFDLElBQ0EsVUFBQUEsRUFBQUMsS0FHQUcsRUFBQU8sVUFBQUssT0FBQSxhQUVBTixFQUFBWCxpQkFBQSxnQkFDQUssRUFBQU8sVUFBQUssT0FBQSxhQUdBVixFQUFBVyxZQUFBVixHQUNBRCxFQUFBVyxZQUFBVCxHQUNBRixFQUFBVyxZQUFBUixHQUNBTCxFQUFBYSxZQUFBWCxHQUNBRixFQUFBYSxZQUFBUCxHQUVBTixFRDlCQWMsQ0FBQXJCLEVBQUFaLE9BQ0FTLEVBQUF1QixZQUFBZixHQUNBTCxFQUFBWixNQUFBLE1FVEFrQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IG5ld1Rhc2tIVE1MTGkgZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldExpc3RlbmVycygpIHtcbiAgY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gIGNvbnN0IHRvRG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kbycpO1xuICB0b0RvSW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZTtcblxuICB0b0RvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiB0b0RvSW5wdXQudmFsdWUpIHtcbiAgICAgIGNvbnN0IG5ld0xpID0gbmV3VGFza0hUTUxMaSh0b0RvSW5wdXQudmFsdWUpO1xuICAgICAgdG9Eb0xpc3QuYXBwZW5kQ2hpbGQobmV3TGkpO1xuICAgICAgdG9Eb0lucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Rhc2tIVE1MTGkodXNlcklucHV0KSB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGlucHV0VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBkZXN0cm95QnV0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBpbnB1dEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd2aWV3Jyk7XG5cbiAgaW5wdXRUb2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG4gIGlucHV0VG9nZ2xlLnR5cGUgPSAnY2hlY2tib3gnO1xuXG4gIGxhYmVsLmlubmVyVGV4dCA9IHVzZXJJbnB1dDtcbiAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XG4gICAgbGkuY2xhc3NMaXN0LmFkZCgnZWRpdGluZycpO1xuICAgIGlucHV0RWRpdC5mb2N1cygpO1xuICB9KTtcblxuICBkZXN0cm95QnV0dC5jbGFzc0xpc3QuYWRkKCdkZXN0cm95Jyk7XG5cbiAgaW5wdXRFZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgaW5wdXRFZGl0LnZhbHVlID0gdXNlcklucHV0O1xuICBpbnB1dEVkaXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0aW5nJyk7XG4gIH0pO1xuICBpbnB1dEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGluZycpO1xuICB9KTtcblxuICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXRUb2dnbGUpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHQpO1xuICBsaS5hcHBlbmRDaGlsZChkaXYpO1xuICBsaS5hcHBlbmRDaGlsZChpbnB1dEVkaXQpO1xuXG4gIHJldHVybiBsaTtcbn1cbiIsImltcG9ydCBsaXN0ZW5lcnMgZnJvbSAnLi9saXN0ZW5lcnMnO1xuXG5saXN0ZW5lcnMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=