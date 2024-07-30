import MenusListItem from '@/components/molecules/MenusListItem/MenusListItem';
import BoardModal from '@/components/organisms/BoardModal/BoardModal';
import Modal from '@/components/templates/Modal/Modal';
import useModal from '@/components/templates/Modal/useModal';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHook';
import { boardActivated } from '@/store/slices/boardsSlice';
import { HiHome, HiViewBoards } from 'react-icons/hi';
import { MdAnalytics, MdGroup, MdSettings } from 'react-icons/md';
import { TbLayoutBoardSplit } from 'react-icons/tb';

const MenusList = () => {
  const dispatch = useAppDispatch();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const boards = useAppSelector((state) => state.boards);

  const navItems = [
    {
      name: "Home",
      icon: <HiHome />
    },
    {
      name: "Boards",
      icon: <HiViewBoards />
    },
    {
      name: "Settings",
      icon: <MdSettings />
    },
    {
      name: "Teams",
      icon: <MdGroup />
    },
    {
      name: "Analytics",
      icon: <MdAnalytics />
    }
  ]


  return (
    <>

      <section className="flex flex-col overflow-hidden">
       
        <nav className="flex-1 overflow-y-auto overflow-x-hidden">
          {navItems.map(({ name, icon }) => (
            <MenusListItem
              value={name}
              key={name}
              icon={icon}
            />
          ))}
        </nav>
        <button
          className="flex w-60 cursor-pointer items-center rounded-r-[100px] px-6 py-3.5 text-primaryPurple duration-200"
          onClick={handleOpenModal}
        >
          <TbLayoutBoardSplit className="text-xl" />
          <p className="heading-m ml-3">+ Create New Board</p>
        </button>
      </section>
      <Modal isOpen={isOpen} onCloseModal={handleCloseModal}>
        <BoardModal type="add" title="Add New Board" />
      </Modal>
    </>
  );
};

export default MenusList;
