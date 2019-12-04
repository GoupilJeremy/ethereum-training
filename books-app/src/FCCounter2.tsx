import * as React from 'react';


type Props = {
    label: string;
    count: number;
    onIncrement: () => void
}

export const FCCounter2: React.FC<Props> = (props) => {
  const {label, count, onIncrement} = props;

  const handleClick = () => {
    onIncrement();
  };

  return (
      <div>
          <span>
              label: {label}
              count: {count}
          </span>
          <button type="button" onClick={handleClick}>
            Increment
          </button>
      </div>
  )
};