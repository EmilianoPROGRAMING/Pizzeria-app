import { Navigate, Route, Routes } from "react-router-dom"
import Inicio from "../inicio"
import Menu from "../components/Pages/Menu";
import { Favorites } from "../components/Pages/Favorites"
import MasInfo from "../components/Pages/MasInfo";

export const RouterApp = () => {
  return (
    <>
        <Routes>
          <Route path='/menu' element={<Menu />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path="/inicio" element={<Inicio /> }  />
          <Route path="/more-info/:id" element={<MasInfo /> }/>

          <Route path="/" element={<Navigate to='/inicio' />} /> 
        </Routes>
    </>
  )
}
