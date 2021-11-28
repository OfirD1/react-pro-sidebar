/* eslint-disable react/no-array-index-key */
import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';

export type IconShapeType = 'square' | 'round' | 'circle';

export type Props = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  children?: React.ReactNode;
  iconShapeType?: IconShapeType;
  popperArrow?: boolean;
  useList?: boolean;
};

const Menu: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, iconShapeType, popperArrow, useList = true, ...rest },
  ref,
) => {
  const menuRef: LegacyRef<HTMLElement> = (ref as any) || React.createRef<HTMLElement>();
  const MenuBody =
    React.Children.toArray(children)
        .filter(Boolean)
        .map((child, index) =>
          React.cloneElement(child as React.ReactElement, {
            key: index,
            firstchild: 1,
            popperarrow: popperArrow === true ? 1 : 0,
          }),
        );
  return (
    <nav
      ref={menuRef}
      className={classNames('pro-menu', className, {
        [`shaped ${iconShapeType}`]: ['square', 'round', 'circle'].indexOf(iconShapeType  || '') >= 0,
      })}
      {...rest}
    >
      { useList ? <ul>{ MenuBody }</ul> : <div>{ MenuBody }</div> }
    </nav>
  );
};

export default forwardRef<unknown, Props>(Menu);
