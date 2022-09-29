import { Navigate, Route, Routes } from "react-router-dom";
import { Empleados } from "../pages/Empleados";
import { FormsPage } from "../pages/FormsPage";


export const JKBNominaRouters = () => {
  return (
    <Routes>
        <Route path="/" element={<Empleados/>}/>
        <Route path="/*" element = {<Navigate to="/" />} />
    </Routes>
  )
}
