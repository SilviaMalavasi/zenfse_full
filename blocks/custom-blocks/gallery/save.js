import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Save({ className }) {
  const blockProps = useBlockProps.save();

  return (
    <div
      {...blockProps}
      className={`${className || ""} zenfse-block gallery`}
    >
      <div className="swiper">
        <div className="swiper-wrapper">
          <InnerBlocks.Content />
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}
