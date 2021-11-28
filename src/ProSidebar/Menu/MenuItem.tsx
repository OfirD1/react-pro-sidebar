import React, { forwardRef } from 'react';
import classNames from 'classnames';

export type Props = {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  active?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  firstchild?: boolean;
  popperarrow?: boolean;
  useList?: boolean;
};

const MenuItem: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, icon, active, prefix, suffix, firstchild, popperarrow, useList = true, ...rest },
  ref,
) => {
  const menuItemRef = (ref as any) || React.createRef();
  const menuItemBody =
    <div className="pro-inner-item" tabIndex={0} role="button">
      {icon ? (
        <span className="pro-icon-wrapper">
          <span className="pro-icon">{icon}</span>
        </span>
      ) : null}

      {prefix ? <span className="prefix-wrapper">{prefix}</span> : null}
      <span className="pro-item-content">{children}</span>
      {suffix ? <span className="suffix-wrapper">{suffix}</span> : null}
    </div>;
  
  return (
    useList ? 
    <div ref={menuItemRef} className={classNames('pro-menu-item', className, { active })} {...rest}>
      { menuItemBody}
    </div>
    :
    <li ref={menuItemRef} className={classNames('pro-menu-item', className, { active })} {...rest}>
      { menuItemBody}
    </li>
  );
};

export default forwardRef<unknown, Props>(MenuItem);
