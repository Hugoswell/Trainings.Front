import React, { useState, useContext } from "react"
import { Link } from "react-router-dom";
import { useLocation } from "react-router"
import AuthContext from "../../App/AuthContext"

const BottomNav = () => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();
    const [pathname] = useState(`${location.pathname}`);    
    if (auth) {
        
        return (
            <ul className="fixed bottom-0 w-full h-16 bg-white overflow-y-hidden overflow-x-auto whitespace-no-wrap z-10">            
                <Link to="/dashboard" className="inline-block h-full w-27">                
                    <svg className="my-0 mx-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"><g transform="translate(-32 -152)" className={`${pathname === "/dashboard" ? "orange-fill" : "dark-grey-fill"}`}><g transform="translate(26 146)"><rect width="9" height="12" rx="1" transform="translate(17 6)"/><rect width="9" height="12" rx="1" transform="translate(6 15)"/><rect width="9" height="8" rx="1" transform="translate(6 6)"/><rect width="9" height="8" rx="1" transform="translate(17 19)"/></g></g></svg>
                    <p className={`${pathname === "/dashboard" ? "orange" : "dark-grey"} text-xs text-center mt-2`}>Tableau de bord</p>                
                </Link>
                <Link to="/trainings" className="inline-block h-full w-27">                
                    <svg className="my-0 mx-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="20.55" height="25.801" viewBox="0 0 20.55 25.801"><g transform="translate(-5.725 -3.099)" className={`${pathname === "/trainings" ? "orange-fill" : "dark-grey-fill"}`}><circle cx="2.4" cy="2.4" r="2.4" transform="translate(13.6 6.633)"/><path d="M25.475,3.1h-1a.8.8,0,0,0-.8.8V5.067H23.27a1.01,1.01,0,0,0-.358-.3,1,1,0,0,0-1.235.3H10.325a.99.99,0,0,0-1.594,0H8.325V3.9a.8.8,0,0,0-.8-.8h-1a.8.8,0,0,0-.8.8V7.433a.8.8,0,0,0,.8.8h1a.8.8,0,0,0,.8-.8V6.267H8.7l3.971,8.185V27.5a1.4,1.4,0,0,0,2.8,0V20.9h1.05v6.6a1.4,1.4,0,0,0,2.8,0V14.451l3.97-8.185h.38V7.433a.8.8,0,0,0,.8.8h1a.8.8,0,0,0,.8-.8V3.9A.8.8,0,0,0,25.475,3.1Zm-7.329,9.2H13.855L10.928,6.267H21.073Z"/></g></svg>
                    <p className={`${pathname === "/trainings" ? "orange" : "dark-grey"} text-xs text-center mt-2`}>Entrainements</p>                
                </Link>
                <Link to="#" className="inline-block h-full w-23 opacity-50">                
                    <svg className="my-0 mx-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="25" height="18.333" viewBox="0 0 25 18.333"><g transform="translate(17 -84)" className={`${pathname === "/stats" ? "orange-fill" : "dark-grey-fill"}`}><g transform="translate(-17 84)"><path d="M9.833,5A2.607,2.607,0,0,0,7.155,7.5a2.382,2.382,0,0,0,.65,1.61l-2.64,4.269a2.819,2.819,0,0,0-.487-.046A2.607,2.607,0,0,0,2,15.833a2.607,2.607,0,0,0,2.679,2.5,2.607,2.607,0,0,0,2.679-2.5,2.381,2.381,0,0,0-.652-1.61l2.64-4.269a2.629,2.629,0,0,0,.975,0l5.734,9.269a2.381,2.381,0,0,0-.652,1.61,2.685,2.685,0,0,0,5.357,0,2.382,2.382,0,0,0-.65-1.61L23.833,13.2a2.82,2.82,0,0,0,.488.046A2.607,2.607,0,0,0,27,10.745a2.685,2.685,0,0,0-5.357,0,2.382,2.382,0,0,0,.651,1.61l-3.725,6.024a2.629,2.629,0,0,0-.975,0L11.86,9.11a2.381,2.381,0,0,0,.652-1.61A2.607,2.607,0,0,0,9.833,5Z" transform="translate(-2 -5)"/></g></g></svg>
                    <p className={`${pathname === "/stats" ? "orange" : "dark-grey"} text-xs text-center mt-2`}>Statistiques</p>                
                </Link>
                <Link to="/profile" className="inline-block h-full w-23">                
                <svg className="my-0 mx-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="15" height="18.913" viewBox="0 0 15 18.913"><g transform="translate(-138 -111)" className={`${pathname === "/profile" ? "orange-fill" : "dark-grey-fill"}`}><path d="M24,20.3a1.927,1.927,0,0,1-1.467,1.878,25.082,25.082,0,0,1-6.033.73,25.077,25.077,0,0,1-6.03-.736A1.927,1.927,0,0,1,9,20.3a7.5,7.5,0,1,1,15,0ZM16.5,4a3.587,3.587,0,0,0-3.587,3.587v.652a3.587,3.587,0,0,0,7.174,0V7.587A3.587,3.587,0,0,0,16.5,4ZM13.148,18.635a3.812,3.812,0,0,1,1.2-1.4.653.653,0,0,0-.753-1.066,5.126,5.126,0,0,0-1.63,1.885.658.658,0,0,0,1.18.584Z" transform="translate(129 107)"/></g></svg>
                    <p className={`${pathname === "/profile" ? "orange" : "dark-grey"} text-xs text-center mt-2`}>Profil</p>                
                </Link>
            </ul>
        );
    }
    return null;
}

export default BottomNav;