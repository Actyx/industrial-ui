import { ChevronType } from './Chevron';

export const mkDefaultStyles = (type: ChevronType) => (animationDuration: number) => ({
  transition: `transform ${animationDuration}ms`,
  transform: `rotate(${type === 'upDown' ? 0 : 90}deg)`
});

export const mkTransitionStyles = (type: ChevronType) => ({
  entering: {
    transform: `rotate(${type === 'upDown' ? 0 : 90}deg)`
  },
  entered: {
    transform: 'rotate(180deg)'
  }
});
