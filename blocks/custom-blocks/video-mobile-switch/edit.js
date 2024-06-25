import { InspectorControls, MediaUpload, MediaUploadCheck, InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes, className = "" }) {
  const blockProps = useBlockProps({
    className: `${className} zenfse-block video-mobile-switch edit`,
  });
  const { mobileVideoUrlorImage } = attributes;

  const TEMPLATE = [["core/video", {}]];

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title="Mobile Video or Image">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ mobileVideoUrlorImage: media.url })}
              allowedTypes={["video", "image"]}
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
          {mobileVideoUrlorImage && (
            <p style={{ paddingTop: "1rem" }}>
              Mobile Source URL:
              <a
                href={mobileVideoUrlorImage}
                target="_blank"
                rel="noopener noreferrer"
              >
                {mobileVideoUrlorImage}
              </a>
            </p>
          )}
        </PanelBody>
      </InspectorControls>
      <p className="disclaimer">
        Click here and then use the right Sidebar to select an alternative source for mobile →{" "}
      </p>
      <InnerBlocks template={TEMPLATE} />
    </div>
  );
}
