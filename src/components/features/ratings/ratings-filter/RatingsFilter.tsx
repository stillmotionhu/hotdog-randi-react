import { Dispatch, SetStateAction, useState } from "react";
import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./RatingsFilter.stylex";
import {
  setOrderValue,
  UserRatingsOrder,
  UserRatingsState,
} from "@/features/user-ratings/user-ratings-slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

/**
 * RATINGS FILTER DROPDOWN ITEM
 */
interface RatingsFilterDropdownItemProps extends ParentComponentProps {
  value: UserRatingsOrder;
  onClick: () => void;
}

const RatingsFilterDropdownItem: React.FC<RatingsFilterDropdownItemProps> = ({
  value,
  onClick,
  children,
}) => {
  const { orderValue }: UserRatingsState = useAppSelector(
    (state) => state.userRatings,
  );
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setOrderValue(value));
    onClick();
  };

  return (
    <li {...props(styles.dropdownItem)} onClick={handleClick}>
      <div {...props(styles.dropdownItemLabel)}>
        <span
          {...props(
            styles.dropdownItemLabelText,
            orderValue === value && styles.dropdownItemLabelTextSelected,
          )}
        >
          {children}
        </span>
      </div>

      <svg
        {...props(
          styles.dropdownItemCheckmark,
          orderValue === value && styles.dropdownItemCheckmarkSelected,
        )}
        viewBox="0 0 12 9"
      >
        <polyline points="1 5 4 8 11 1"></polyline>
      </svg>
    </li>
  );
};

/**
 * RATINGS FILTER
 */
interface RatingsFilterProps {}

const RatingsFilter: React.FC<RatingsFilterProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div {...props(styles.wrapper)}>
      <button
        {...props(styles.triggerWrapper, isOpen && styles.triggerWrapperOpen)}
        onClick={() => toggleIsOpen()}
      >
        <div {...props(styles.triggerContainer)}>
          {Array.from({ length: 3 }, (_, index: number) => (
            <span
              key={index}
              {...props(styles.triggerLine, isOpen && styles.triggerLineOpen)}
            ></span>
          ))}
        </div>
      </button>

      <div
        {...props(styles.dropdownWrapper, isOpen && styles.dropdownWrapperOpen)}
      >
        <ul {...props(styles.dropdownContainer)}>
          <RatingsFilterDropdownItem
            value="date-desc"
            onClick={() => setIsOpen(false)}
          >
            Date: Newest First
          </RatingsFilterDropdownItem>
          <RatingsFilterDropdownItem
            value="date-asc"
            onClick={() => setIsOpen(false)}
          >
            Date: Oldest First
          </RatingsFilterDropdownItem>
          <RatingsFilterDropdownItem
            value="score-desc"
            onClick={() => setIsOpen(false)}
          >
            Score: Highest First
          </RatingsFilterDropdownItem>
          <RatingsFilterDropdownItem
            value="score-asc"
            onClick={() => setIsOpen(false)}
          >
            Score: Lowest First
          </RatingsFilterDropdownItem>
        </ul>
      </div>
    </div>
  );
};

export { RatingsFilter };
