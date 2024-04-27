import Layout from './Compnents/Layout/Layout';
import Home from './Compnents/Home/Home';
import AboutHome from './Compnents/About/AboutHome';
import About from './Compnents/About/About';
import AboutEstablishment from './Compnents/About/AboutEstablishment';
import Education from './Compnents/Education/Education';
import EventsAndNews from './Compnents/EventsAndNews/EventsAndNews';
import Gallery from './Compnents/Gallery/Gallery';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutIntroduction from './Compnents/About/AboutIntroduction';
import NotFound from './Compnents/NotFound/NotFound';
import Login from './Pages/Login/Login';
import EducationHome from './Compnents/Education/EducationHome';
import Strategies from './Compnents/Education/Stratigies';
import Schedules from './Compnents/Education/Schedules';
import ProductDesign from './Compnents/Departments/ProductDesign/ProductDesign';
import ProductDesignHome from './Compnents/Departments/ProductDesign/ProductDesignHome';
import PDGallery from './Compnents/Departments/ProductDesign/PDGallery';
import PDScheduales from './Compnents/Departments/ProductDesign/PDScheduales';
import PDSujects from './Compnents/Departments/ProductDesign/PDSujects';
import PDUpdates from './Compnents/Departments/ProductDesign/PDUpdates';
import Fashion from './Compnents/Departments/Fashion/Fashion';
import FashionHome from './Compnents/Departments/Fashion/FashionHome';
import FashionSubject from './Compnents/Departments/Fashion/FashionSubject';
import FashionScheduales from './Compnents/Departments/Fashion/FashionScheduales';
import FashionGallery from './Compnents/Departments/Fashion/FashionGallery';
import FashionUpdate from './Compnents/Departments/Fashion/FashionUpdate';
import InteriorDesign from './Compnents/Departments/InteriorDesign/InteriorDesign';
import InteriorDesignHome from './Compnents/Departments/InteriorDesign/InteriorDesignHome';
import IntDesignSubjects from './Compnents/Departments/InteriorDesign/IntDesignSubjects';
import IntDesignScheduals from './Compnents/Departments/InteriorDesign/IntDesignScheduals';
import IntDesignGallery from './Compnents/Departments/InteriorDesign/IntDesignGallery';
import IntDesignUpdates from './Compnents/Departments/InteriorDesign/IntDesignUpdates';
import ADV from './Compnents/Departments/Advertising/ADV';
import AdvHome from './Compnents/Departments/Advertising/AdvHome';
import AdvSubject from './Compnents/Departments/Advertising/AdvSubject';
import AdvScheduales from './Compnents/Departments/Advertising/AdvScheduales';
import AdvGallery from './Compnents/Departments/Advertising/AdvGallery';
import AdvUpdate from './Compnents/Departments/Advertising/AdvUpdate';
import Cinema from './Compnents/Departments/Cinema/Cinema';
import CinemaHome from './Compnents/Departments/Cinema/CinemaHome';
import CinemaSubjects from './Compnents/Departments/Cinema/CinemaSubjects';
import CinemaScheduales from './Compnents/Departments/Cinema/CinemaScheduales';
import CinemaGallery from './Compnents/Departments/Cinema/CinemaGallery';
import CinemaUpdates from './Compnents/Departments/Cinema/CinemaUpdates';
import Photos from './Compnents/Gallery/Photos';
import Videos from './Compnents/Gallery/Videos';
import Ai from './Compnents/AI/Ai';

import UploadProjectsHome from './Compnents/Departments/Fashion/Dashboard/UploadProjectsHome';
import FashionUploadProjects from './Compnents/Departments/Fashion/Dashboard/UploadProjectsDash';
import FashionRequestsViewer from './Compnents/Departments/Fashion/Dashboard/Views/RequestsViewer';
import FashionStudentsUploadProjects from './Compnents/Departments/Fashion/Dashboard/StudentsUploadProjects';
import UploadUpdates from './Compnents/Departments/Fashion/Dashboard/UploadUpdates';
import SchedulesDash from './Compnents/Departments/Fashion/Dashboard/SchedulesDash';
import SubjectDash from './Compnents/Departments/Fashion/Dashboard/SubjectDash';
import FashionFacultyMembers from './Compnents/Departments/Fashion/FashionFacultyMembers';
import MembersDash from './Compnents/Departments/Fashion/Dashboard/MembersDash';
import MembersHomeDashh from './Compnents/Departments/Fashion/Dashboard/MembersHomeDashh';

import PDUploadProjectsHome from './Compnents/Departments/ProductDesign/Dashboard/UploadProjectsHome';
import PDUploadProjects from './Compnents/Departments/ProductDesign/Dashboard/UploadProjectsDash';
import PDRequestsViewer from './Compnents/Departments/ProductDesign/Dashboard/Views/RequestsViewer';
import PDStudentsUploadProjects from './Compnents/Departments/ProductDesign/Dashboard/StudentsUploadProjects';

import PDMembersDash from './Compnents/Departments/ProductDesign/Dashboard/MembersDash'
import PDFacultyMembers from './Compnents/Departments/ProductDesign/PDFacultyMembers';
import PDMembersHomeDash from './Compnents/Departments/ProductDesign/Dashboard/MembersHomeDash'
import PDSchedulesDash from './Compnents/Departments/ProductDesign/Dashboard/SchedulesDash'
import PDSubjectDash from './Compnents/Departments/ProductDesign/Dashboard/SubjectDash'
import PDUploadUpdates from './Compnents/Departments/ProductDesign/Dashboard/UploadUpdates'

import IDMembersHomeDash from './Compnents/Departments/InteriorDesign/Dashboard/MembersHomeDash';
import IDMembersDash from './Compnents/Departments/InteriorDesign/Dashboard/MembersDash'
import IDFacultyMembers from './Compnents/Departments/InteriorDesign/IDFacultyMembers';
import IDSchedulesDash from './Compnents/Departments/InteriorDesign/Dashboard/SchedulesDash'
import IDSubjectDash from './Compnents/Departments/InteriorDesign/Dashboard/SubjectDash'
import IDUploadUpdates from './Compnents/Departments/InteriorDesign/Dashboard/UploadUpdates'
import IDUploadProjectsHome from './Compnents/Departments/InteriorDesign/Dashboard/UploadProjectsHome';
import IDUploadProjects from './Compnents/Departments/InteriorDesign/Dashboard/UploadProjectsDash';
import IDRequestsViewer from './Compnents/Departments/InteriorDesign/Dashboard/Views/RequestsViewer';
import IDStudentsUploadProjects from './Compnents/Departments/InteriorDesign/Dashboard/StudentsUploadProjects';


import ADVMembersHomeDash from './Compnents/Departments/Advertising/Dashboard/MembersHomeDash';
import ADVMembersDash from './Compnents/Departments/Advertising/Dashboard/MembersDash'
import ADVFacultyMembers from './Compnents/Departments/Advertising/ADVFacultyMembers';
import ADVSchedulesDash from './Compnents/Departments/Advertising/Dashboard/SchedulesDash'
import ADVSubjectDash from './Compnents/Departments/Advertising/Dashboard/SubjectDash'
import ADVUploadProjects from './Compnents/Departments/Advertising/Dashboard/UploadProjectsDash'
import ADVUploadProjectsHome from './Compnents/Departments/Advertising/Dashboard/UploadProjectsHome'
import ADVUploadUpdates from './Compnents/Departments/Advertising/Dashboard/UploadUpdates'
import ADVStudentsUploadProjects from './Compnents/Departments/Advertising/Dashboard/StudentsUploadProjects'
import ADVRequestsViewer from './Compnents/Departments/Advertising/Dashboard/Views/RequestsViewer';

import CinemaMembersHomeDash from './Compnents/Departments/Cinema/Dashboard/MembersHomeDash';
import CinemaMembersDash from './Compnents/Departments/Cinema/Dashboard/MembersDash'
import CinemaFacultyMembers from './Compnents/Departments/Cinema/CinemaFacultyMembers';
import CinemaSchedulesDash from './Compnents/Departments/Cinema/Dashboard/SchedulesDash'
import CinemaSubjectDash from './Compnents/Departments/Cinema/Dashboard/SubjectDash'
import CinemaUploadProjects from './Compnents/Departments/Cinema/Dashboard/UploadProjects'
import CinemaUploadUpdates from './Compnents/Departments/Cinema/Dashboard/UploadUpdates'
import UploadPhotosDash from './Compnents/Departments/Cinema/Dashboard/UploadPhotosDash';
import UpladVideoDash from './Compnents/Departments/Cinema/Dashboard/UpladVideoDash';
import CinemaPhotosGallery from './Compnents/Departments/Cinema/CinemaPhotosGallery';
import CinemaVideosGallery from './Compnents/Departments/Cinema/CinemaVideosGallery';
import CinemaStudentsUploadProjects from './Compnents/Departments/Cinema/Dashboard/StudentUploadProject';
import CinemaStudentsUploadPhoto from './Compnents/Departments/Cinema/Dashboard/StudentUploadPhoto';
import CinemaStudentsUploadVideo from './Compnents/Departments/Cinema/Dashboard/StudentUploadVideo';
import CinemaRequestViewer from './Compnents/Departments/Cinema/Dashboard/Views/RequestViewer';
import CinemaRequestVideo from './Compnents/Departments/Cinema/Dashboard/Views/RequestVideo';
import CinemaRequestPhotos from './Compnents/Departments/Cinema/Dashboard/Views/RequestPhotos';
import ForgotPassword from './Pages/Forgot Password/ForgotPassword';
import LoginHome from './Pages/Login/LoginHome';
import ForgetPassHome from './Pages/Forgot Password/ForgetPassHome';
import ResetPassword from './Pages/Reset Password/ResetPassword';
import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'
import Logout from './Pages/Logout/Logout';
import UserProfile from './Pages/User Profile/UserProfile';
import ProtectedRoute from './Compnents/Protected Route/ProtectedRoute';


function App() {
  const [userData ,setUserData] = useState(null)
  useEffect(()=>{
console.log(document.cookie);
  },[])
  
  function saveUserData (){
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }
  let router = createBrowserRouter(
    [
      {
        path: '',
        element: <Layout userData={userData} />,
        children: [
          { index: true, element: <Home /> },
          {path: "loginHome", element: <LoginHome /> , children: [
            {index:true , element: <Login saveUserData={saveUserData} /> },
              { path: 'ForgotPassword', element: <ForgetPassHome /> , children: [
                  {index:true , element: <ForgotPassword /> },
                  { path: 'ResetPassword', element: <ResetPassword /> }
                ]
              }
            ]
          },
          {path: "Logout", element: <Logout />},
          {path: "Profile", element: <UserProfile userData={userData} />},
          // {path: "Register", element: <Register />},
          {
            path: "aboutHome", element: <AboutHome />, children: [
              { index: true, element: <About /> },
              { path: 'aboutIntroduction', element: <AboutIntroduction /> },
              { path: 'aboutEstablishment', element: <AboutEstablishment /> }
            ]
          },
          {
            path: "educationHome", element: <EducationHome />, children: [
              { index: true, element: <Education /> },
              { path: "strategies", element: <Strategies /> },
              { path: "schedules", element: <Schedules /> }
            ]
          },
          {
            path: "productDesign", element: <ProductDesign />, children: [
              { index: true, element: <ProductDesignHome /> },
              
              
              
              
              
              { path: "membersDash", element: <PDMembersDash />  },
              
              
              
              
              
              
              
              
              
              { path: "membersHomeDash", element: <PDMembersHomeDash />},
              { path: "schedulesDash" , element: <PDSchedulesDash />},
              { path: "SubjectDash" , element: <PDSubjectDash />},
              { path: "UploadUpdates" , element: <PDUploadUpdates />},
              { path: "UploadProjects" , element:<PDUploadProjectsHome  /> ,children:[
                { index: true, element: <PDUploadProjects /> },
                { path: "RequestsViewer" , element: <PDRequestsViewer /> },
              ]},
              { path: "StudentsUpload" , element:<PDStudentsUploadProjects />},
              { path: "facultyMembers", element: <PDFacultyMembers /> },
              { path: "pdGallery", element: <PDGallery /> },
              { path: "pdSceduales", element: <PDScheduales /> },
              { path: "pdSujects", element: <PDSujects /> },
              { path: "pdUpdates", element: <PDUpdates /> },
            ]
          },
          {
            path: "Fashion", element: <Fashion />, children: [
              { index: true, element: <FashionHome /> },
              { path: "UploadProjects" , element:<UploadProjectsHome  /> ,children:[
                { index: true, element: <FashionUploadProjects /> },
                { path: "RequestsViewer" , element: <FashionRequestsViewer /> },
              ]},
              { path: "StudentsUpload" , element:<FashionStudentsUploadProjects />},
              { path: "SchedulesDash", element: <SchedulesDash /> },
              { path: "facultyMembers", element: <FashionFacultyMembers /> },
              {path: "membersDash", element: <MembersDash />},
              {path: "MembersHomeDash", element: <MembersHomeDashh />},
              { path: "SubjectDash", element: <SubjectDash /> },
              { path: "UploadResearch", element: <UploadUpdates /> },
              { path: "fashionSubject", element: <FashionSubject /> },
              { path: "fashionScheduales", element: <FashionScheduales /> },
              { path: "fashionGallery", element: <FashionGallery /> },
              { path: "fashionUpdate", element: <FashionUpdate /> },
            ]
          },
          {
            path: "InteriorDesign", element: <InteriorDesign />, children: [
              { index: true, element: <InteriorDesignHome /> },
              { path: "membersDash", element: <IDMembersDash />},
              { path: "membersHomeDash", element: <IDMembersHomeDash />},
              { path: "schedulesDash" , element: <IDSchedulesDash />},
              { path: "SubjectDash" , element: <IDSubjectDash />},
              { path: "UploadUpdates" , element: <IDUploadUpdates />},
              {path: "UploadProjects" , element:<IDUploadProjectsHome /> ,children:[
                { index: true, element: <IDUploadProjects /> },
                { path: "RequestsViewer" , element: <IDRequestsViewer /> },
              ]},
              { path: "StudentsUpload" , element:<IDStudentsUploadProjects />},,
              {
                 path: "facultyMembers", element: <IDFacultyMembers /> },
              { path: "intDesignSubjects", element: <IntDesignSubjects /> },
              { path: "intDesignScheduals", element: <IntDesignScheduals /> },
              { path: "intDesignGallery", element: <IntDesignGallery /> },
              { path: "intDesignUpdates", element: <IntDesignUpdates /> },
            ]
          },
          {
            path: "ADV", element: <ADV />, children: [
              { index: true, element: <AdvHome /> },
              { path: "membersDash", element: <ADVMembersDash />},
              { path: "membersHomeDash", element: <ADVMembersHomeDash />},
              { path: "schedulesDash" , element: <ADVSchedulesDash />},
              { path: "SubjectDash" , element: <ADVSubjectDash />},
              { path: "UploadUpdates" , element: <ADVUploadUpdates />},
              { path: "UploadProjectsHome" , element:<ADVUploadProjectsHome  /> ,children:[
                { index: true, element: <ADVUploadProjects /> },
                { path: "RequestsViewer" , element: <ADVRequestsViewer /> },
              ]},
              { path: "StudentsUpload" , element:<ADVStudentsUploadProjects />},
              { path: "facultyMembers", element: <ADVFacultyMembers /> },
              { path: "advSubject", element: <AdvSubject /> },
              { path: "advScheduales", element: <AdvScheduales /> },
              { path: "advGallery", element: <AdvGallery /> },
              { path: "advUpdate", element: <AdvUpdate /> },
            ]
          },
          {
            path: "Cinema", element: <Cinema />, children: [
              { index: true, element: <CinemaHome /> },
              { path: "membersDash", element: <CinemaMembersDash />},
              { path: "membersHomeDash", element: <CinemaMembersHomeDash />},
              { path: "schedulesDash" , element: <CinemaSchedulesDash />},
              { path: "SubjectDash" , element: <CinemaSubjectDash />},
              { path: "UploadUpdates" , element: <CinemaUploadUpdates />},
              { path: "UploadProjects" , element:<CinemaUploadProjects  /> ,children:[
                  { index: true, element: <UploadPhotosDash /> },
                  { path: "UpladVideoDash" , element: <UpladVideoDash />},
                  { path:"CinemaRequestViewer" , element:<CinemaRequestViewer /> , children:[
                    { index: true, element: <CinemaRequestPhotos /> },
                    { path: "CinemaRequestVideo" , element: <CinemaRequestVideo />},
                  ]}
                ]
              },
              { path: "StudentsUploadProjects" , element:<CinemaStudentsUploadProjects  /> ,children:[
                { index: true, element: <CinemaStudentsUploadPhoto /> },
                { path: "UploadVideoDash" , element: <CinemaStudentsUploadVideo />}
              ]
              },
              { path: "facultyMembers", element: <CinemaFacultyMembers /> },
              { path: "cinemaSubjects", element: <CinemaSubjects /> },
              { path: "cinemaScheduales", element: <CinemaScheduales /> },
              { path: "cinemaGallery", element: <CinemaGallery /> ,children:[
                  { index: true, element: <CinemaPhotosGallery /> },
                  { path: "VideosGallery" , element: <CinemaVideosGallery />}
                ]
              },
              { path: "cinemaUpdates", element: <CinemaUpdates /> },
            ]
          },
          { path: "eventsAndNews", element: <EventsAndNews /> },
          {
            path: "gallery", element: <Gallery />, children: [
              { index: true, element: <Photos /> },
              { path: "videos", element: <Videos /> },
            ]
          },
          { path: "ai", element: <Ai /> },
          { path: "*", element: <NotFound /> }
        ]
      }
    ]
  )
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
