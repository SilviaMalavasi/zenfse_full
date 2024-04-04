const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { PanelBody, Button, ExternalLink } = wp.components;

import { mediaQueryAllMobile } from "../../../src/js/base/globals.js";

/**
 * Add Mobile Video URL attribute to core/video block
 */

function addAttributes(settings, name) {
  if (name !== "core/video") {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      mobileVideoUrl: {
        type: "string",
        default: "",
      },
    },
  };
}

addFilter("blocks.registerBlockType", "uno-core-blocks/video-mobile/add-attributes", addAttributes);

/**
 * Add Mobile Video control to the core/video block settings sidebar
 */

const withControls = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const { name, attributes, setAttributes } = props;

    if (name !== "core/video") {
      return <BlockEdit {...props} />;
    }

    const { mobileVideoUrl } = attributes;

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <PanelBody title="Mobile Video or Image">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) => setAttributes({ mobileVideoUrl: media.url })}
                allowedTypes={["video"]}
                render={({ open }) => (
                  <Button
                    onClick={open}
                    isSecondary
                  >
                    Select Mobile Video or Image
                  </Button>
                )}
              />
            </MediaUploadCheck>
            {mobileVideoUrl && (
              <p style={{ paddingTop: "1rem" }}>
                Mobile Source URL: <ExternalLink href={mobileVideoUrl}>Open Video/Image</ExternalLink>
              </p>
            )}
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, "withControls");

addFilter("editor.BlockEdit", "uno-core-blocks/video-mobile/with-controls", withControls);

/**
 * Modify the core/video block in the frontend to display the mobile video when the device is mobile
 */

function modifySaveElement(extraProps, blockType, attributes) {
  if (blockType.name !== "core/video" || !attributes.mobileVideoUrl) {
    return extraProps;
  }

  return {
    ...extraProps,
    "data-mobile-url": attributes.mobileVideoUrl,
  };
}

addFilter("blocks.getSaveContent.extraProps", "uno-core-blocks/video-mobile/modify-save-element", modifySaveElement);
