import { SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

function Edit({ attributes, setAttributes }) {
  const menus = useSelect((select) => select("core").getEntityRecords("root", "menu"), []);

  if (!menus) {
    return "Loading...";
  }

  if (!menus.length) {
    return "No menus available. Please add a menu.";
  }

  return (
    <div className="navigation-edit">
      <SelectControl
        label="Choose Desktop Menu"
        value={attributes.selectedDesktopMenuId}
        options={[{ value: "", label: "None" }, ...menus.map((menu) => ({ value: menu.id, label: menu.name }))]}
        onChange={(selectedDesktopMenuId) => setAttributes({ selectedDesktopMenuId })}
      />
      <SelectControl
        label="Choose Mobile Menu"
        value={attributes.selectedMobileMenuId}
        options={[{ value: "", label: "None" }, ...menus.map((menu) => ({ value: menu.id, label: menu.name }))]}
        onChange={(selectedMobileMenuId) => setAttributes({ selectedMobileMenuId })}
      />
    </div>
  );
}

export default Edit;
