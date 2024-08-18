import { ButtonHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type ButtonElProps = {
  to?: string;
  textOnly?: boolean;
  otherProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

type LinkElProps = {
  to: string;
  textOnly?: boolean;
  otherProps?: LinkProps;
};

type ButtonProps = ButtonElProps | LinkElProps;

export default function Button({ to, textOnly, ...otherProps }: ButtonProps) {
  let component;

  if (to) {
    component = (
      <Link
        className={`button ${textOnly ? 'button--text-only' : ''}`}
        to={to}
        {...otherProps}
      >
        Click me
      </Link>
    );
  }

  component = (
    <button
      className={`button ${textOnly ? 'button--text-only' : ''}`}
      {...otherProps}
    >
      Click me
    </button>
  );

  return component;
}
