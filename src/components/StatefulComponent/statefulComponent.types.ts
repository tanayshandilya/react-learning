import { HTMLAttributes } from 'react';

export default interface StatefulComponentTypes extends HTMLAttributes<HTMLDivElement> {
  min?: number;
  max?: number;
  initialCount?: number;
}
