import Link from "next/link";

interface MenuItemProps {
   url?: string;
   texto: string;
   icone: string;
   className?: string;
   onClick?: (event: Event) => void;
}
const MenuItem = (props: MenuItemProps) => {
   function renderizaLink() {
      return (
         <Link
            href='/'
            className={`flex flex-col 
            justify-center 
            items-center 
            h-20 w-20 
            text-gray-600 
            dark:text-gray-200
            ${props.className}`}
         >
            {props.icone}
            <span
               className={`
                text-xs
                font-light
                
                `}
            >
               {props.texto}
            </span>
         </Link>
      );
   }
   return (
      <li
         onClick={props.onClick}
         className={`hover:bg-gray-300 dark:hover:bg-gray-800 cursor-pointer`}
      >
         {props.url ? (
            <Link href={props.url}>{renderizaLink()}</Link>
         ) : (
            renderizaLink()
         )}
      </li>
   );
};
export default MenuItem;
