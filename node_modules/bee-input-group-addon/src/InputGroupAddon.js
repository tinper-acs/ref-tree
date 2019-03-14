import classNames from 'classnames';
import React from 'react';

const defaultProps = {
  clsPrefix: 'u-input-group-addon'
}

class InputGroupAddon extends React.Component {
  render() {
    const { className,clsPrefix, ...others } = this.props;

    return (
      <span
        {...others}
        className={classNames(className, clsPrefix)}
      />
    );
  }
}
InputGroupAddon.defaultProps = defaultProps;
export default InputGroupAddon;