// import sprite from "../../assets/sprite.svg";
// import {
//   CheckedBoxGroupWrapper,
//   CheckedBoxInput,
//   CheckedBoxInputWrapper,
//   CheckedBoxLabel,
//   CheckedBoxWrapper,
//   EquipmentSvg,
// } from "./CampersFilter.styled";

// const svgIconsBox = [
//   { icon: "icon-wind", name: "AC", class: "", id: "airConditioner" },
//   { icon: "icon-line-pd", name: "Automatic", class: "stroke", id: "transmission" },
//   { icon: "icon-gastronomy", name: "Kitchen", class: "stroke", id: "kitchen" },
//   { icon: "icon-tv", name: "TV", class: "stroke", id: "TV" },
//   { icon: "icon-shower", name: "Shower/WC", class: "stroke", id: "shower" },
// ];

// export const CheckedBoxGroup = ({ isCheckedBox, handleCheckboxChange }) => {
//   return (
//     <CheckedBoxGroupWrapper>
//       {isCheckedBox.map((isChecked, index) => (
//         <CheckedBoxInputWrapper key={index} className={isChecked ? "checked" : ""}>
//           <CheckedBoxInput
//             id={svgIconsBox[index].id}
//             type="checkbox"
//             checked={isChecked}
//             onChange={() => handleCheckboxChange(index, true)}
//           />
//           <CheckedBoxWrapper>
//             <EquipmentSvg className={svgIconsBox[index].class}>
//               <use href={`${sprite}#${svgIconsBox[index].icon}`} />
//             </EquipmentSvg>
//             <CheckedBoxLabel>{svgIconsBox[index].name}</CheckedBoxLabel>
//           </CheckedBoxWrapper>
//         </CheckedBoxInputWrapper>
//       ))}
//     </CheckedBoxGroupWrapper>
//   );
// };
