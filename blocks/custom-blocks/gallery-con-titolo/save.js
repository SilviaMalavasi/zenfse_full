import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Save({ className = "" }) {
  const blockProps = useBlockProps.save({
    className: `${className} zenfse-block gallery-con-titolo`,
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
