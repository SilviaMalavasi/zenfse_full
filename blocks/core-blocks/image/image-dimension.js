const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, RangeControl, SelectControl } = wp.components;
import { Button } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { useState } from "react";

import { mediaQuerySmartphonesOnly } from "../../../src/js/base/globals";

/**
 * Add height attribute to image block
 */

function addAttributes(settings) {
  if (settings.name === "core/image") {
    return {
      ...settings,
      attributes: {
        ...settings.attributes,
        imageHeight: {
          type: "number",
          default: 0,
        },
        imageWidth: {
          type: "number",
          default: 0,
        },
        unitHeight: {
          type: "string",
          default: "vw",
        },
        unitWidth: {
          type: "string",
          default: "vw",
        },
        imageHeightMobile: {
          type: "number",
          default: 0,
        },
        imageWidthMobile: {
          type: "number",
          default: 0,
        },
        unitHeightMobile: {
          type: "string",
          default: "vw",
        },
        unitWidthMobile: {
          type: "string",
          default: "vw",
        },
      },
    };
  }

  return settings;
}

addFilter("blocks.registerBlockType", "zenfse-core-blocks/image-height/add-attributes", addAttributes);

/**
 * Add Dimension Control to image block
 */

const addInspectorControl = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    if (props.name !== "core/image") {
      return <BlockEdit {...props} />;
    }

    const {
      attributes: {
        imageHeight,
        unitHeight,
        imageWidth,
        unitWidth,
        imageHeightMobile,
        unitHeightMobile,
        imageWidthMobile,
        unitWidthMobile,
      },

      setAttributes,
      clientId,
    } = props;

    const [showMobileSettings, setShowMobileSettings] = useState(false);

    useEffect(() => {
      const blockElement = document.querySelector(`[data-block="${clientId}"]`);
      if (blockElement) {
        const childElement = blockElement.firstElementChild;
        if (childElement) {
          if (!mediaQuerySmartphonesOnly) {
            if (imageHeight !== 0) {
              childElement.style.height = `${imageHeight}${unitHeight}`;
              childElement.setAttribute("data-dimension-height", imageHeight);
              childElement.setAttribute("data-dimension-unit-height", unitHeight);
            }
            if (imageWidth !== 0) {
              childElement.style.width = `${imageWidth}${unitWidth}`;
              childElement.setAttribute("data-dimension-width", imageWidth);
              childElement.setAttribute("data-dimension-unit-width", unitWidth);
            }
          } else {
            if (imageHeightMobile !== 0) {
              childElement.style.height = `${imageHeightMobile}${unitHeightMobile}`;
              childElement.setAttribute("data-dimension-height-mobile", imageHeightMobile);
              childElement.setAttribute("data-dimension-unit-height-mobile", unitHeightMobile);
            }
            if (imageWidthMobile !== 0) {
              childElement.style.width = `${imageWidthMobile}${unitWidthMobile}`;
              childElement.setAttribute("data-dimension-width-mobile", imageWidthMobile);
              childElement.setAttribute("data-dimension-unit-width-mobile", unitWidthMobile);
            }
          }
        }
      }
    }, [
      imageHeight,
      unitHeight,
      imageWidth,
      unitWidth,
      imageHeightMobile,
      unitHeightMobile,
      imageWidthMobile,
      unitWidthMobile,
      clientId,
      showMobileSettings,
    ]);

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <PanelBody
            title="Dimensions"
            className="core-image-dimensions"
          >
            <PanelRow className="core-image-mediaquery">
              <Button onClick={() => setShowMobileSettings(false)}>
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1302.36 1080"
                >
                  <path
                    d="m35.4,0h1231.56c19.53.06,35.34,15.87,35.4,35.4v816.09c-.06,19.53-15.87,35.34-35.4,35.4H35.4C15.79,886.83-.06,870.89,0,851.28c0,0,0,0,0,0V35.19C.17,15.74,15.96.06,35.4,0Zm455.74,935.54h321.14c.85,55.54,23.74,105.35,85.74,144.46h-493.15c49.6-35.93,85.95-79.6,85.74-144.46h.53ZM77.79,50.56h1146.98c17.56,0,31.8,14.24,31.8,31.8v638.36c0,17.56-14.24,31.8-31.8,31.8H77.69c-17.35-.29-31.27-14.44-31.27-31.8V81.82c.29-17.35,14.44-31.27,31.8-31.27h-.42Z"
                    fill-rule="evenodd"
                    stroke-width="0"
                  />
                </svg>
              </Button>
              <Button onClick={() => setShowMobileSettings(true)}>
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 71.59 122.88"
                >
                  <path
                    d="m12.74,0h46.11c3.51,0,6.69,1.43,9,3.74,2.31,2.31,3.74,5.49,3.74,9v97.4c0,3.51-1.43,6.69-3.74,9s-5.49,3.74-9,3.74H12.74c-3.51,0-6.69-1.43-9-3.74s-3.74-5.49-3.74-9V12.74c0-3.51,1.43-6.69,3.74-9C6.05,1.43,9.24,0,12.74,0h0Zm23.05,107.18c2.88,0,5.22,2.34,5.22,5.22s-2.34,5.22-5.22,5.22-5.22-2.34-5.22-5.22c0-2.88,2.34-5.22,5.22-5.22h0Zm-32.13-4h64.28V19.7H3.66v83.48h0Z"
                    fill-rule="evenodd"
                    stroke-width="0"
                  />
                </svg>
              </Button>
            </PanelRow>
            {!showMobileSettings && (
              <PanelBody title="Desktop Dimensions">
                <PanelRow className="core-image-height">
                  <RangeControl
                    label="Height"
                    value={imageHeight}
                    onChange={(newHeight) => setAttributes({ imageHeight: newHeight })}
                    min={0}
                    max={200}
                  />
                  <SelectControl
                    label="Unnit"
                    value={unitHeight}
                    options={[
                      { label: "%", value: "%" },
                      { label: "vw", value: "vw" },
                      { label: "vh", value: "vh" },
                      { label: "rem", value: "rem" },
                    ]}
                    onChange={(newUnitHeight) => setAttributes({ unitHeight: newUnitHeight })}
                  />
                </PanelRow>
                <PanelRow className="core-image-width">
                  <RangeControl
                    label="Width"
                    value={imageWidth}
                    onChange={(newWidth) => setAttributes({ imageWidth: newWidth })}
                    min={0}
                    max={200}
                  />
                  <SelectControl
                    label="Unit"
                    value={unitWidth}
                    options={[
                      { label: "%", value: "%" },
                      { label: "vw", value: "vw" },
                      { label: "vh", value: "vh" },
                      { label: "rem", value: "rem" },
                    ]}
                    onChange={(newUnitWidth) => setAttributes({ unitWidth: newUnitWidth })}
                  />
                </PanelRow>
              </PanelBody>
            )}
            {showMobileSettings && (
              <PanelBody title="Mobile Dimensions">
                <PanelRow className="core-image-height">
                  <RangeControl
                    label="Height"
                    value={imageHeightMobile}
                    onChange={(newHeightMobile) => setAttributes({ imageHeightMobile: newHeightMobile })}
                    min={0}
                    max={200}
                  />
                  <SelectControl
                    label="Unit"
                    value={unitHeightMobile}
                    options={[
                      { label: "%", value: "%" },
                      { label: "vw", value: "vw" },
                      { label: "vh", value: "vh" },
                      { label: "rem", value: "rem" },
                    ]}
                    onChange={(newUnitHeightMobile) => setAttributes({ unitHeightMobile: newUnitHeightMobile })}
                  />
                </PanelRow>
                <PanelRow className="core-image-width">
                  <RangeControl
                    label="Width"
                    value={imageWidthMobile}
                    onChange={(newWidthMobile) => setAttributes({ imageWidthMobile: newWidthMobile })}
                    min={0}
                    max={200}
                  />
                  <SelectControl
                    label="Unit"
                    value={unitWidthMobile}
                    options={[
                      { label: "%", value: "%" },
                      { label: "vw", value: "vw" },
                      { label: "vh", value: "vh" },
                      { label: "rem", value: "rem" },
                    ]}
                    onChange={(newUnitWidthMobile) => setAttributes({ unitWidthMobile: newUnitWidthMobile })}
                  />
                </PanelRow>
              </PanelBody>
            )}
            <Button
              style={{ padding: "0", color: "#2271b1" }}
              onClick={() => {
                const blockElement = document.querySelector(`[data-block="${clientId}"]`);
                if (blockElement) {
                  const childElement = blockElement.firstElementChild;
                  if (childElement) {
                    childElement.style.height = "";
                    childElement.style.width = "";
                    childElement.removeAttribute("data-dimension-height");
                    childElement.removeAttribute("data-dimension-width");
                    ("data-dimension-height-mobile");
                    childElement.removeAttribute("data-dimension-width-mobile");
                  }
                }
                setAttributes({ imageHeight: 0, imageWidth: 0, imageHeightMobile: 0, imageWidthMobile: 0 });
              }}
            >
              Reset all
            </Button>
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, "withInspectorControl");

addFilter("editor.BlockEdit", "zenfse-core-blocks/image-height/add-inspector-controls", addInspectorControl);

addFilter(
  "blocks.getEditWrapperProps",
  "zenfse-core-blocks/image-size/add-wrapper-props",
  (props, blockType, attributes) => {
    if (blockType.name !== "core/image") {
      return props;
    }

    return { ...props, style: attributes.wrapperStyle };
  }
);

/**
 * Add Dimension Control to the block on the front end
 */

function addImageSizeFrontEnd(props, blockType, attributes) {
  const {
    imageHeight,
    unitHeight,
    imageWidth,
    unitWidth,
    imageHeightMobile,
    unitHeightMobile,
    imageWidthMobile,
    unitWidthMobile,
  } = attributes;

  if (blockType.name === "core/image") {
    let newProps = { ...props };

    if (imageHeight && imageHeight !== 0) {
      newProps["data-dimension-height"] = `${imageHeight}${unitHeight}`;
    }

    if (imageWidth && imageWidth !== 0) {
      newProps["data-dimension-width"] = `${imageWidth}${unitWidth}`;
    }

    if (imageHeightMobile && imageHeightMobile !== 0) {
      newProps["data-dimension-height-mobile"] = `${imageHeightMobile}${unitHeightMobile}`;
    }

    if (imageWidthMobile && imageWidthMobile !== 0) {
      newProps["data-dimension-width-mobile"] = `${imageWidthMobile}${unitWidthMobile}`;
    }

    return newProps;
  }

  return props;
}

addFilter(
  "blocks.getSaveContent.extraProps",
  "zenfse-core-blocks/image-size/add-front-end-class",
  addImageSizeFrontEnd
);
