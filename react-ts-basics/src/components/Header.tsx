import { type ReactNode } from 'react';

type HeaderProps = {
  image: { src: string; alt: string };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <h1>{children}</h1>
      <img {...image} />
    </header>
  );
}
