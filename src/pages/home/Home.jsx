import NavigationBar from "../../components/navigation/NavigationBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Calendar from "../../components/dashboard/calendar/Calendar";
import NotesSection from "../../components/dashboard/note/NoteSection";
import TasksSection from "../../components/dashboard/task/TaskSection";
import WelcomeHeader from "../../components/dashboard/welcome/WelcomeHeader";
import WeeklyOverview from "../../components/dashboard/weeklyOverview/WeeklyOverview";

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="w-full">
        <NavigationBar />
      </div>

      <div className="flex flex-1">
        <div className=" bg-white border-r border-gray-200">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col p-6 space-y-3">
          <div className="flex gap-6">
            <div className="flex-1 space-y-3">
              <WelcomeHeader />
              <div className="">
                <WeeklyOverview />
              </div>
              <div className="border-b border-gray-200 my-4"></div>
              <div className="">
                <NotesSection />
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="">
                <Calendar />
              </div>

              <div className="border-b border-gray-200 my-4 mx-4"></div>
              <div className="">
                <TasksSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
