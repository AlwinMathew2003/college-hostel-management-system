import Home from "./pages/home/Home";
import './index.css'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AdminHome from "./pages/Admin/admin_home/AdminHome";
import NameWiseReport from "./pages/Admin/nameWiseReport/NameWiseReport";
import MonthlyAttendanceReport from "./pages/Admin/monthly_attendence_report/Monthly_Attendence_Report";
import DateWiseReport from "./pages/Admin/data_wise_report/Date_Wise_Report";
import Request_View from "./pages/Admin/request_view/Request_View";
import RequestBulkApproval from "./pages/Admin/request_bulk_approval/Request_Bulk_Approval";
import ApologyRequest from "./pages/Admin/apology_request/Apology_Request";
import ApologyRequestView from "./pages/Admin/apology_request_view/Apology_Request_View";
import AttendanceReport from "./pages/Admin/attendence_sheet/Attendence_Sheet";
import AttendanceSheet from "./pages/Admin/attendence_sheet/Attendence_Sheet";
import PresentButMessCut from "./pages/Admin/present_but_mess_cut/Present_But_Mess_Cut";
import AbsentButNoMesscut from "./pages/Admin/absent_but_no_mess_cutt/Absent_But_No_Mess_Cut";
import AbsenteesReport from "./pages/Admin/absentees_report/Absentees_Report";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
<div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      <div className="container mx-auto px-8">
        <Router>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Admin" element={<AdminHome/>}/>
            <Route path="/Admin/NameWiseReport" element={<NameWiseReport/>}/>
            <Route path="/Admin/MonthlyAttendanceReport" element={<MonthlyAttendanceReport/>}/>
            <Route path="/Admin/DateWiseReport" element={<DateWiseReport/>}/>
            <Route path="/Admin/Request_View" element={<Request_View/>}/>
            <Route path="/Admin/RequestBulkApproval" element={<RequestBulkApproval/>}/>
            <Route path="/Admin/ApologyRequest" element={<ApologyRequest/>}/>
            <Route path="/Admin/ApologyRequestView" element={<ApologyRequestView/>}/>
            <Route path="/Admin/AttendanceReport" element={<AttendanceReport/>}/>
            <Route path="/Admin/AttendanceSheet" element={<AttendanceSheet/>}/>
            <Route path="/Admin/PresentButMessCut" element={<PresentButMessCut/>}/>
            <Route path="/Admin/AbsentButNoMesscut" element={<AbsentButNoMesscut/>}/>
            <Route path="/Admin/AbsenteesReport" element={<AbsenteesReport/>}/>


          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;

