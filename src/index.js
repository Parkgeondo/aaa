import React,{ useState,useEffect,useRef } from "react";
import ReactDOM from 'react-dom/client';
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopUi from './component/ui/Top';
import { useNavigate, useParams ,useLocation } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(props){
    const postId = useParams().id
    console.log(postId)

    return(
        <BrowserRouter>
        <TopUi></TopUi>
 
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="write" element={<PostWritePage/>}/>
                <Route path="post/:id" element={<PostViewPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

root.render(<App/>);



