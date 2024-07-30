import { type FC } from 'react';
import { TbLayoutBoardSplit } from 'react-icons/tb';

interface MenusListItemProps {
  value: string;
  icon: any
  // isActive: boolean;
  // onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const MenusListItem: FC<MenusListItemProps> = ({
  value,
  icon
  // isActive,
  // onClick,
}) => (
  <button
    // onClick={onClick}
    className={`flex w-full cursor-pointer items-center rounded-r-[100px] bg-opacity-10 px-6 py-3.5  text-primaryMediumGrey text-xl outline-none duration-200`}
  >
    {icon}
    <p className="heading-m ml-3">{value}</p>
  </button>
);

export default MenusListItem;
