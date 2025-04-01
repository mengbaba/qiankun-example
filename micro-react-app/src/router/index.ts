import { lazy } from "react";
import { createHashRouter} from "react-router-dom";
const Home = lazy(() => import("@/pages/home"))
const Test = lazy(() => import("@/pages/test"))
const ErrorPage = lazy(() => import("@/components/ErrorPage"))

const MainRoutes = [
  {
    index: true,
    Component: Home,
    title: "仪表盘",
  },
  {
    path:'/home',
    Component: Home,
    title: "仪表盘",
  },
  {
    path:'/test',
    Component: Test,
    title: "测试页面",
  }
];


const router =  createHashRouter([
  {
      path:"/",
      ErrorBoundary:ErrorPage,
      children:MainRoutes
  }
])

export default router ;