import { QuestionIcon } from "../icons";

const Logo = () => {
   return (
      <div
         className={`items-center justify-center flex flex-col bg-white h-10 w-10 rounded-full `}
      >
         <div>{QuestionIcon}</div>
      </div>
   );
};

export default Logo;
