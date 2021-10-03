import React from "react";

import shopping_cart from "./icons/add_shopping_cart_black_24dp.svg";
import cancel_icon from "./icons/cancel_black_24dp.svg";
import delete_icon from "./icons/delete_outline_black_24dp.svg";
import help_icon from "./icons/help_black_24dp.svg";
import pets_icon from "./icons/pets_black_24dp.svg";

const InputIcon = (props) => {
  const icon = props.startIcon ? props.startIcon : props.endIcon;

  // add icons
  let iconImage = "";
  if (icon === "local_grocery_store") {
    iconImage = shopping_cart;
  } else if (icon === "cancel") {
    iconImage = cancel_icon;
  } else if (icon === "delete") {
    iconImage = delete_icon;
  } else if (icon === "help") {
    iconImage = help_icon;
  } else if (icon === "pets") {
    iconImage = pets_icon;
  }

  return (
    <div className={props.startIcon ? "start-img" : "end-img"}>
      <img
        src={iconImage}
        alt={props.startIcon ? "start icon" : "end icon"}
      ></img>
    </div>
  );
};

export default InputIcon;
