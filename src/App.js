import Tostify from "./Tostify";
import DragAndDropFiles from "./DragAndDrop";
import SimpleDragAndDrop from "./SimpleDragAndDrop";
import EmailValidators from "./EmailValidator";
import TodosTable from "./components/TodoMuiTable";
import TodoCreation from "./components/TodoCreation/index";
import UserDetailsCard from "./components/DataBinding/UserForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function DropzoneAreaExample() {
  return (
    <>
      <Tostify />
      <DragAndDropFiles />
      <SimpleDragAndDrop />
      <EmailValidators />
      <TodosTable />
      <TodoCreation />
      <UserDetailsCard />
    </>
  );
}

export default DropzoneAreaExample;
