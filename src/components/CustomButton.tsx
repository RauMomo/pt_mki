import { selectedTab } from "../store/HomeStore";

 interface CustomButtonProps {
   onClick: () => void;
   title: string;
   index: number;
 }

//  const { onClick, title } = Astro.props;
// <button
//   id="demo"
//   onclick={onClick()}
//   class="relative flex h-12 w-auto items-center sm:w-max cursor-pointer"
// >
//   <div class="text-base font-semibold text-primary dark:text-black text-center min-w-auto">
//     {title}
//   </div>
// </button>
// <script>
//   // JavaScript logic can be placed here
//   const element = document.getElementById("demo");

//   if (element) {
//     element.addEventListener("click", () => {
//       console.log("Button clicked in script tag");
//       onclick?.(); // Call onClick prop
//     });
//   }
// </script>

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, title, index }) => {
  var indexTab = selectedTab
  return (
    <button
      id="demo"
      onClick={onClick}
      className="relative flex h-12 w-auto items-center sm:w-max cursor-pointer hover:text-complementary"
    >
      <div className={`text-base font-semibold text-center min-w-auto ${indexTab.get() !== index ? 'text-black' : 'text-secondary'}`}>
        {title}
      </div>
    </button>
  );
}

export default CustomButton;

