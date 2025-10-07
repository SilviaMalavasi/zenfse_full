import { SelectControl, PanelBody } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { useEffect, useState } from "@wordpress/element";

function Edit({ attributes, setAttributes }) {
  const { menus, isLoading } = useSelect((select) => {
    const menus = select("core").getEntityRecords("taxonomy", "nav_menu");
    const isLoading = select("core/data").isResolving("core", "getEntityRecords", ["taxonomy", "nav_menu"]);
    return { menus, isLoading };
  }, []);

  const blockProps = useBlockProps();
  const [mobileMenuItems, setMobileMenuItems] = useState([]);
  const [desktopMenuItems, setDesktopMenuItems] = useState([]);

  const menuIds = menus ? menus.map((menu) => menu.id) : [];
  const selectedDesktopMenuId = menuIds.includes(attributes.selectedDesktopMenuId)
    ? attributes.selectedDesktopMenuId
    : "";
  const selectedMobileMenuId = menuIds.includes(attributes.selectedMobileMenuId) ? attributes.selectedMobileMenuId : "";

  const { apiFetch } = wp;

  useEffect(() => {
    // Clear previous menu items
    setDesktopMenuItems([]);
    setMobileMenuItems([]);

    // Step 1: Fetch Menus
    apiFetch({ path: "/wp/v2/menus" })
      .then((menus) => {
        const menuIds = menus.map((menu) => menu.id);
        const selectedDesktopMenuId = menuIds.includes(attributes.selectedDesktopMenuId)
          ? attributes.selectedDesktopMenuId
          : "";
        const selectedMobileMenuId = menuIds.includes(attributes.selectedMobileMenuId)
          ? attributes.selectedMobileMenuId
          : "";

        // Step 2: Fetch Menu Items
        // Fetch Desktop Menu Items
        if (selectedDesktopMenuId) {
          apiFetch({ path: `/wp/v2/menu-items?menus=${selectedDesktopMenuId}` })
            .then((desktopMenuItems) => {
              setDesktopMenuItems(desktopMenuItems);
            })
            .catch((error) => {
              console.error("Fetching desktop menu items failed: ", error);
            });
        }

        // Fetch Mobile Menu Items
        if (selectedMobileMenuId) {
          apiFetch({ path: `/wp/v2/menu-items?menus=${selectedMobileMenuId}` })
            .then((mobileMenuItems) => {
              setMobileMenuItems(mobileMenuItems);
            })
            .catch((error) => {
              console.error("Fetching mobile menu items failed: ", error);
            });
        }
      })
      .catch((error) => {
        console.error("Fetching menus failed: ", error);
      });
  }, [attributes.selectedDesktopMenuId, attributes.selectedMobileMenuId]);

  if (isLoading) {
    return <div {...blockProps}>Caricamento...</div>;
  }

  if (!menus || !menus.length) {
    return <div {...blockProps}>Nessun menù disponibile. Crea un menù.</div>;
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Menu Settings">
          <SelectControl
            label="Scegli il Menu Desktop"
            value={selectedDesktopMenuId ?? ""}
            options={[
              { value: "", label: "Seleziona un menu" },
              ...(menus ? menus.map((menu) => ({ value: menu.id.toString(), label: menu.name })) : []),
            ]}
            onChange={(value) => setAttributes({ selectedDesktopMenuId: parseInt(value, 10) })}
          />
          <SelectControl
            label="Scegli il Menu Mobile"
            value={selectedMobileMenuId ?? ""}
            options={[
              { value: "", label: "Seleziona un menu" },
              ...(menus ? menus.map((menu) => ({ value: menu.id.toString(), label: menu.name })) : []),
            ]}
            onChange={(value) => setAttributes({ selectedMobileMenuId: parseInt(value, 10) })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        {selectedDesktopMenuId && (
          <nav
            role="navigation"
            id="desktop-menu"
          >
            <ul>
              {desktopMenuItems.length > 0 ? (
                desktopMenuItems.map((menuItem) => (
                  <li key={menuItem.id}>
                    <a href={menuItem.url}>{menuItem.title.rendered}</a>
                  </li>
                ))
              ) : (
                <li>No items found</li>
              )}
            </ul>
          </nav>
        )}
        {selectedMobileMenuId && (
          <nav
            role="navigation"
            id="mobile-menu"
          >
            <div id="menuToggle">
              <div className="top-line"></div>
              <div className="medium-line"></div>
              <div className="bottom-line"></div>
            </div>
            <div className="mobile-menu-cont">
              <div className="mobile-menu-cont-cont">
                <ul>
                  {mobileMenuItems.length > 0 ? (
                    mobileMenuItems.map((menuItem) => (
                      <li key={menuItem.id}>
                        <a href={menuItem.url}>{menuItem.title.rendered}</a>
                      </li>
                    ))
                  ) : (
                    <li>No items found</li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        )}
      </div>
    </>
  );
  /*   return (
    <>
      <InspectorControls>
        <PanelBody title="Menu Settings">
          <SelectControl
            label="Scegli il Menu Desktop"
            value={selectedDesktopMenuId ?? ""}
            options={menus ? menus.map((menu) => ({ value: menu.id.toString(), label: menu.name })) : []}
            onChange={(value) => setAttributes({ selectedDesktopMenuId: parseInt(value, 10) })}
          />
          <SelectControl
            label="Scegli il Menu Mobile"
            value={selectedMobileMenuId ?? ""}
            options={menus ? menus.map((menu) => ({ value: menu.id.toString(), label: menu.name })) : []}
            onChange={(value) => setAttributes({ selectedMobileMenuId: parseInt(value, 10) })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        {selectedDesktopMenuId && (
          <nav
            role="navigation"
            id="desktop-menu"
          >
            <ul>
              {desktopMenuItems.length > 0 ? (
                desktopMenuItems.map((menuItem) => (
                  <li key={menuItem.id}>
                    <a href={menuItem.url}>{menuItem.title.rendered}</a>
                  </li>
                ))
              ) : (
                <li>No items found</li>
              )}
            </ul>
          </nav>
        )}
        {selectedMobileMenuId && (
          <nav
            role="navigation"
            id="mobile-menu"
          >
            <div id="menuToggle">
              <div className="top-line"></div>
              <div className="medium-line"></div>
              <div className="bottom-line"></div>
            </div>
            <div className="mobile-menu-cont">
              <div className="mobile-menu-cont-cont">
                <ul>
                  {mobileMenuItems.length > 0 ? (
                    mobileMenuItems.map((menuItem) => (
                      <li key={menuItem.id}>
                        <a href={menuItem.url}>{menuItem.title.rendered}</a>
                      </li>
                    ))
                  ) : (
                    <li>No items found</li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        )}
      </div>
    </>
  ); */
}

export default Edit;
