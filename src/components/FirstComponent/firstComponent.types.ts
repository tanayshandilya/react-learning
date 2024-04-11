import { HTMLAttributes } from 'react';

export default interface FirstComponentProps extends HTMLAttributes<HTMLDivElement> {
  firstName?: string;
  lastName?: string;
  img?: string;
}
