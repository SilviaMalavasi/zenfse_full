import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes, className = "" }) {
  const blockProps = useBlockProps({
    className: `${className} zenfse-block footer edit`,
  });

  const TEMPLATE = [
    [
      "core/group",
      { className: "footer-cont", backgroundColor: "blu" },
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
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
              ],
            ],
            [
              "core/column",
              {},
              [
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
              ],
            ],
            [
              "core/column",
              {},
              [
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
                ["core/paragraph", { placeholder: "Inserisci link" }],
              ],
            ],
            ["core/column", {}, [["core/social-links", {}]]],
          ],
        ],
        ["core/paragraph", { placeholder: "Inserisci Link alle pagine della privacy e dei cookies" }],
        ["core/paragraph", { placeholder: "Inserisci Copyright" }],
      ],
    ],
  ];

  return (
    <div {...blockProps}>
      <InnerBlocks template={TEMPLATE} />
    </div>
  );
}
