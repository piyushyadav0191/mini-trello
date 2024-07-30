import logoImage from '@/assets/logo.png';
import Button from '@/components/atoms/Button/Button';
import EllipsisMenu, {
  type EllipsisMenuItem,
} from '@/components/molecules/EllipsisMenu/EllipsisMenu';
import Modal from '@/components/templates/Modal/Modal';
import useModal from '@/components/templates/Modal/useModal';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHook';
import { boardDeleted, selectActiveBoard } from '@/store/slices/boardsSlice';
import { useState } from 'react';
import { MdAdd, MdKeyboardArrowDown } from 'react-icons/md';
import { useMediaQuery } from 'usehooks-ts';
import MobileSidebar from '../../templates/MobileSidebar/MobileSidebar';
import BoardModal from '../BoardModal/BoardModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import TaskModal from '../TaskModal/TaskModal';

export type ModalType =
  | 'create-board'
  | 'delete-board'
  | 'edit-board'
  | 'create-task'
  | 'mobile-sidebar';

const Header = () => {
  const tabletMatches = useMediaQuery('(min-width: 768px)');
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentModal, setCurrentModal] = useState<ModalType>('create-task');
  const dispatch = useAppDispatch();

  const board = useAppSelector(selectActiveBoard);

  if (!board) {
    return null;
  }

  const ellipsisMenuList: EllipsisMenuItem[] = [
    {
      name: 'Edit Board',
      action: () => openModal('edit-board'),
    },
    {
      name: 'Delete Board',
      action: () => openModal('delete-board'),
      version: 'red',
    },
  ];

  const openModal = (modalType: ModalType) => {
    switch (modalType) {
      case 'create-task':
        setCurrentModal('create-task');
        break;
      case 'edit-board':
        setCurrentModal('edit-board');
        break;
      case 'delete-board':
        setCurrentModal('delete-board');
        break;
      case 'mobile-sidebar':
        setCurrentModal('mobile-sidebar');
        break;
    }
    handleOpenModal();
  };

  const handleDeleteBoard = () => {
    dispatch(boardDeleted(board));
    handleCloseModal();
  };

  const deleteBoardDescription = `Are you sure you want to delete the ‘${board.name}’ board? This action will remove all columns and tasks and cannot be reversed.`;

  return (
    <>
      <header className="flex items-center justify-between border-primaryLinesLight bg-primaryWhite dark:border-primaryLinesDark dark:bg-primaryDarkGrey">
        <section className="flex h-full bg-[#f7f7f7]">
          {tabletMatches && (
            <div className="flex h-full w-sidebarTabletWidth  bg-white items-center border-r-[1px] border-primaryLinesLight pl-headerTabletPadding dark:border-primaryLinesDark lg:w-sidebarDesktopWidth lg:pl-headerDesktopPadding gap-3">
             <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

              <h1 className="text-2xl font-bold text-primaryBlack dark:text-primaryWhite">
                Joe Karben
              </h1>
            </div>
          )}
          <div className="flex items-center bg-[#f7f7f7] pl-headerMobilePadding md:pl-6">
            <img className="mr-4 md:hidden" src={logoImage} alt="logo" />

            <h2 className="heading-l lg:text-3xl mr-1 text-primaryBlack dark:text-primaryWhite md:m-0 md:text-3xl md:leading-normal">
             Good morning, Joe Karden
            </h2>

            <button
              className="md:hidden"
              onClick={() => openModal('mobile-sidebar')}
            >
              <MdKeyboardArrowDown className="p-1 text-3xl text-primaryPurple" />
            </button>
          </div>
        </section>

        <section className="flex bg-[#f7f7f7] items-center gap-x-4 pr-headerMobilePadding md:pr-headerTabletPadding lg:pr-headerDesktopPadding">
          {!tabletMatches ? (
            <button
              className={`rounded-3xl bg-primaryPurple px-3.5 py-1.5 duration-200 hover:bg-primaryPurpleHover `}
              disabled={board.statuses.length === 0}
              onClick={() => openModal('create-task')}
            >
              <MdAdd className="text-xl text-primaryWhite" />
            </button>
          ) : (
            <Button
              version="secondary"
              disabled={board.statuses.length === 0}
              onClick={() => openModal('create-task')}
            >
              <MdAdd className="text-xl text-primaryWhite" />
              Add New Task
            </Button>
          //  <h1>Help & Feedback</h1>
          )}

          <EllipsisMenu items={ellipsisMenuList} />
        </section>
      </header>
      <Modal isOpen={isOpen} onCloseModal={handleCloseModal}>
        {currentModal === 'mobile-sidebar' && <MobileSidebar />}
        {currentModal === 'create-task' && (
          <TaskModal type="add" title="Add New Task" />
        )}
        {currentModal === 'edit-board' && (
          <BoardModal type="edit" title="Edit Board" />
        )}
        {currentModal === 'delete-board' && (
          <DeleteModal
            title="Delete this board?"
            description={deleteBoardDescription}
            onDelete={handleDeleteBoard}
            onCancel={handleCloseModal}
          />
        )}
        {currentModal === 'create-board' && (
          <BoardModal type="add" title="Add New Board" />
        )}
      </Modal>
    </>
  );
};

export default Header;
