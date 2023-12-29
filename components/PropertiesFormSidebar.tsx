import { AiOutlineClose } from "react-icons/ai";
import { FormElements } from "./FormElements";
import useDesigner from "./hooks/useDesigner";
import { Button } from "./ui/button";

function PropertiesFormSidebar() {
  const { selectedElement, setSelectedElement } = useDesigner();

  if (!selectedElement) return null;

  const PropertiesForm = FormElements[selectedElement?.type].formComponent;

  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between items-center">
        <p className="text-sm text-foreground/70">Element Properties</p>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => {
            setSelectedElement(null);
          }}
        >
          <AiOutlineClose />
        </Button>
      </div>
      <PropertiesForm />
    </div>
  );
}

export default PropertiesFormSidebar;
