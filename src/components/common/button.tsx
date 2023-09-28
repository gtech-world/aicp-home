import classNames from 'classnames';
import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Button as AntBtn, ButtonProps } from 'antd';
export function Button(p: HTMLAttributes<HTMLButtonElement>) {
  const { children, className, ...other } = p;

  return (
    <button {...other} className={classNames(className)}>
      {p.children}
    </button>
  );
}

export type BtnProps = {
  busy?: boolean;
  defStyle?: 'btn-primary' | 'btn-primary-1';
} & ButtonProps;

export function Btn(p: BtnProps) {
  const { busy, type = 'primary', className, defStyle = 'btn-primary', children, ...props } = p;
  return (
    <AntBtn
      type={defStyle === 'btn-primary-1' ? 'default' : type}
      className={classNames(className, 'leading-none !shadow-none', {
        // [defStyle]: !disabled,
        // 'btn-disable': disabled,
      })}
      {...props}
    >
      {busy ? <FaSpinner className="animate-spin mx-auto" /> : children}
    </AntBtn>
  );
}
