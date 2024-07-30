import ThemeSwitcher from '@/components/molecules/ThemeSwitcher/ThemeSwitcher';
import MenusList from '@/components/organisms/MenusList/MenusList';
import { useState } from 'react';
import { HiDownload } from 'react-icons/hi';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const DesktopSidebar = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <aside
        className={`border-primaryLinesLight bg-primaryWhite transition-[width] duration-200 ease-in-out dark:border-primaryLinesDark dark:bg-primaryDarkGrey ${
          isActive
            ? 'w-sidebarTabletWidth border-r-[1px] lg:w-sidebarDesktopWidth'
            : 'w-0'
        }`}
      >
        <div className="flex h-full flex-col justify-between pr-6 pt-8">
          <MenusList />
          <section>
            {/* <div className="pl-6">
              <ThemeSwitcher isSidebarActive={isActive} />
            </div> */}

<div className="grid grid-cols-2 gap-0 my-6">
  <div className="flex justify-center items-center">
    <HiDownload size={24} />
  </div>
  <div className="p-0">
    <h1 className="text-sm m-0 inline-block">Download the app</h1>
    <p className="text-xs m-0 inline-block">Get the full experience</p>
  </div>
</div>



          </section>
        </div>
      </aside>

      {!isActive && (
        <button
          className="fixed bottom-8 left-0 z-30 flex h-12 w-14 items-center justify-center rounded-r-[100px] bg-primaryPurple duration-200 hover:bg-primaryPurpleHover"
          onClick={() => setIsActive(true)}
        >
          <IoMdEye className="text-xl text-primaryWhite" />
        </button>
      )}
    </>
  );
};

export default DesktopSidebar;
