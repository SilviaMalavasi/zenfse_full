import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Save({ className }) {
  const blockProps = useBlockProps.save();

  return (
    <div
      {...blockProps}
      className={`${className || ""} zenfse-block gallery-with-title`}
    >
      <InnerBlocks.Content />
    </div>
  );
}
