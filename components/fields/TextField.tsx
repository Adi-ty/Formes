"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../FromElements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text field",
      helperText: "helper text",
      required: false,
      placeHolder: "Value here...",
    },
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: () => <div>Designer Component</div>,
  formComponent: () => <div>form Component</div>,
  propertiesComponent: () => <div>properties Component</div>,
};
