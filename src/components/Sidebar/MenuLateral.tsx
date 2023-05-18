import useAuth from "data/hook/useAuth";
import { HomeIcon, SettingsIcon, BelIcon, LogoutIcon } from "../icons";
import Logo from "../Logo/Logo";
import MenuItem from "../SidebarItem/MenuItem";

export default function MenuLateral() {
   const { logout } = useAuth();

   return (
      <aside
         className={`flex flex-col
                            bg-gray-200 text-gray-900
                            dark:bg-gray-900 h-full fixed
                        `}
      >
         <div
            className={` flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 via-blue-600 bg-purple-700`}
         >
            <Logo />
         </div>
         <ul className={`flex flex-col flex-1`}>
            <MenuItem url='/' texto='Inicio' icone={HomeIcon} />
         </ul>
         <ul className={``}>
            <MenuItem
               onClick={logout}
               texto='Sair'
               icone={LogoutIcon}
               className={`text-red-600 dark:text-red-400 hover:bg-red-400 dark:hover:text-white  hover:text-white`}
            />
         </ul>
      </aside>
   );
}
