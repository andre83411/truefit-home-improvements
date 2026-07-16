import { Header } from "./Header"; import { Footer } from "./Footer";
export function Shell({children}:{children:React.ReactNode}){return <><Header/><main id="main">{children}</main><Footer/></>}
