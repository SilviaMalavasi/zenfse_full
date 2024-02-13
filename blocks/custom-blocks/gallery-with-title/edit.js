import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Edit({ className }) {
  const blockProps = useBlockProps();

  const TEMPLATE = [
    [
      "core/group",
      { className: "gallery-with-title-cont", backgroundColor: "base" },
      [
        ["core/heading", { placeholder: "Insert Title", level: 2, textAlign: "center" }],
        ["custom-blocks/gallery", {}],
      ],
    ],
  ];

  return (
    <div
      {...blockProps}
      className={`${className || ""} zenfse-block gallery-with-title edit`}
    >
      <InnerBlocks template={TEMPLATE} />
    </div>
  );
}
