import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Edit({ className }) {
  const blockProps = useBlockProps();

  const TEMPLATE = [
    [
      "core/group",
      { className: "footer-cont", backgroundColor: "contrast" },
      [
        [
          "core/columns",
          {},
          [
            ["core/column", {}, [["core/image", {}]]],
            [
              "core/column",
              {},
              [
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
              ],
            ],
            [
              "core/column",
              {},
              [
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
              ],
            ],
            [
              "core/column",
              {},
              [
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
                ["core/paragraph", { placeholder: "Add Link" }],
              ],
            ],
            ["core/column", {}, [["core/social-links", {}]]],
          ],
        ],
        ["core/paragraph", { placeholder: "Add Link to privacy and cookie policy" }],
        ["core/paragraph", { placeholder: "Add Copyright Info" }],
      ],
    ],
  ];

  return (
    <div
      {...blockProps}
      className={`${className || ""} zenfse-block footer edit`}
    >
      <InnerBlocks template={TEMPLATE} />
    </div>
  );
}
