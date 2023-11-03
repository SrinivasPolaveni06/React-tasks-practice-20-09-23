import Tostify from "./Tostify";
import DragAndDropFiles from "./DragAndDrop";
import SimpleDragAndDrop from "./SimpleDragAndDrop";
import EmailValidators from "./EmailValidator";
import TodosTable from "./components/TodoMuiTable";
import TodoCreation from "./components/TodoCreation/index";
import UserDetailsCard from "./components/DataBinding/UserForm";
import TextCaseChanges from "./components/TextCaseChanges";
import ReactSelectDropDown from "./components/ReactSelectDropDown";
import ReactRXJSLibrary from "./components/ReactRXJSLibrary";
import ReactDayPicker from "./components/ReactDayPicker";
import CKEditors from './components/CKEidtors/index'
import AutoComplete from './AutoComplete';
import DatePickers from './DatePickers';
import SimpleSwiper from "./ReactIdSwiper";
// import 'swiper/css/swiper.css'
import BackgroundAnimation from "./BackgroundAnimation";
import ReactSlickSlider from "./ReactSlickSlider";
import { AppContextProvider } from "./context/TripDataContext";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";




function DropzoneAreaExample() {
  return (
    <><div>


      <Tostify />
      <DragAndDropFiles />
      <SimpleDragAndDrop />
      <EmailValidators />
      <TodosTable />
      <TodoCreation />
      <UserDetailsCard />
      <TextCaseChanges />
      <ReactSelectDropDown />
      <ReactRXJSLibrary />
      <ReactDayPicker />
      <AutoComplete />
      <CKEditors />
      <DatePickers />
    </div>
      {/* <SimpleSwiper /> */}
      {/* <BackgroundAnimation /> */}
      {/* <AppContextProvider>
        <ReactSlickSlider />
      </AppContextProvider> */}

    </>
  );
}

export default DropzoneAreaExample;
