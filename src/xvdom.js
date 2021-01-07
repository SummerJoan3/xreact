function createVNode(vtype, type, props) {
  let vnode = {
    vtype,
    type,
    props,
  };
  return vnode;
}

function initVNode(vnode) {
  let { vtype } = vnode;
  if (!vtype) {
    return document.createTextNode(vnode);
  }
  if (vtype === 1) {
    return createElement(vnode);
  } else if (vtype === 2) {
    return createClassCompoent(vnode);
  } else if (vtype === 3) {
    return createFuncComponent(vnode);
  }
}

function createElement(vnode) {
  const { type, props } = vnode;
  const node = document.createElement(type);

  const { key, children, ...rest } = props;
  Object.keys(rest).forEach((k) => {
    if (k === "className") {
      node.setAttribute("class", rest[k]);
    } else if (k === "htmlFor") {
      node.setAttribute("for", rest[k]);
    } else {
      node.setAttribute(k, rest[k]);
    }
  });

  children.forEach((c) => {
    if (Array.isArray(c)) {
      c.forEach((n) => {
        node.appendChild(initVNode(n));
      });
    } else {
      node.appendChild(initVNode(c));
    }
  });
  return node;
}
function createClassCompoent(vnode) {
  const { type } = vnode;
  const component = new type(vnode.props);
  const newNode = component.render();
  return initVNode(newNode);
}
function createFuncComponent(vnode) {
  const { type, props } = vnode;
  const newNode = type(props);
  return initVNode(newNode);
}

export { createVNode, initVNode };
