import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes, className = "" }) {
  const blockProps = useBlockProps({
    className: `${className} zenfse-block gallery-con-titolo edit`,
  });

  const TEMPLATE = [
    [
      "core/group",
      { className: "gallery-con-titolo-cont", backgroundColor: "contrast" },
      [
        ["core/heading", { placeholder: "Inserisci il titolo del gruppo", level: 2, textAlign: "center" }],
        ["custom-blocks/gallery", {}],
      ],
    ],
  ];

  return (
    <div {...blockProps}>
      <InnerBlocks template={TEMPLATE} />
    </div>
  );
}
