import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";


export const HomePage = lazy(() => import('../../pages/homePage'))