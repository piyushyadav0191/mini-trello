import { useMediaQuery } from 'usehooks-ts';
import Header from '../components/organisms/Header/Header';
import DesktopSidebar from '../components/templates/DesktopSidebar/DesktopSidebar';
import StatusesList from '../components/templates/StatusesList/StatusesList';

const Dashboard = () => {
  const tabletMatches = useMediaQuery('(min-width: 768px)');

  return (
    <div className="body-l grid h-screen grid-rows-[64px_1fr] overflow-hidden md:grid-rows-[80px_1fr] lg:grid-rows-[97px_1fr]">
      <Header />
      <div className="flex overflow-hidden">
        {tabletMatches && <DesktopSidebar />}
        <main className="flex-1 overflow-y-auto bg-[#f7f7f7] px-3 py-5 text-primaryMediumGrey dark:bg-primaryVeryDarkGrey">
          <StatusesList />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
