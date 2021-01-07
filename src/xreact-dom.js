import { initVNode } from "./xvdom";
import { shallowEqual } from "./shallowEqual";

function render(vnode, container) {
  const node = initVNode(vnode);
  container.appendChild(node);
}

class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }
}

Component.isClassComponent = true;

class PureComponent extends Component {
  constructor(props) {
    super(props);
    this.state = super.state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }
}

export { render, Component, PureComponent };
