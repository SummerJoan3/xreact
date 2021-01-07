import { createVNode } from "./xvdom";

function createElement(type, props, ...children) {
  props.children = children;
  let vtype;
  if (typeof type === "string") {
    // 文本节点
    vtype = 1;
  } else if (typeof type === "function") {
    if (type.isClassComponent) {
      // 类组件
      vtype = 2;
    } else {
      // 函数组件
      vtype = 3;
    }
  }
  return createVNode(vtype, type, props);
}

export default { createElement };
