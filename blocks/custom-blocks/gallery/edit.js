import { Button } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { useEffect, useRef } from "@wordpress/element";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function Edit({ attributes, setAttributes, className, clientId }) {
  const ref = useRef();
  const swiperRef = useRef();
  const blockProps = useBlockProps({ ref });

  const { blockOrder, rootClientId, areBlocksInserted } = useSelect(
    (select) => {
      const { getBlockOrder, getBlockHierarchyRootClientId } = select("core/block-editor");
      const blockOrder = getBlockOrder(clientId);
      const rootClientId = getBlockHierarchyRootClientId(clientId);
      return {
        blockOrder,
        rootClientId,
        areBlocksInserted: blockOrder.length === blockOrder.length,
      };
    },
    [clientId]
  );

  const { insertBlock, removeBlock } = useDispatch("core/block-editor");

  useEffect(() => {
    if (
      areBlocksInserted &&
      ref.current &&
      !ref.current.querySelector(".block-editor-inner-blocks").classList.contains("swiper-container-initialized")
    ) {
      let swiperElement = ref.current.querySelector(".block-editor-inner-blocks");
      let swiperWrapper = ref.current.querySelector(".block-editor-block-list__layout");
      swiperElement.classList.add("swiper");
      swiperWrapper.classList.add("swiper-wrapper");
      let swiper_pagination = ref.current.querySelector(".swiper-pagination");
      let swiper_prev = ref.current.querySelector(".swiper-prev");
      let swiper_next = ref.current.querySelector(".swiper-next");

      swiperRef.current = new Swiper(swiperElement, {
        modules: [Navigation, Pagination],
        observer: true,
        observeParents: true,
        pagination: {
          el: swiper_pagination,
          clickable: true,
        },
        navigation: {
          nextEl: swiper_next,
          prevEl: swiper_prev,
        },
        slidesPerView: 1,
        speed: 800,
        touchStartPreventDefault: false,
      });
    }
  }, [areBlocksInserted, ref.current]);

  const TEMPLATE = [
    [
      "core/columns",
      { className: "gallery-cont swiper-slide" },
      [
        ["core/column", {}, [["core/image", {}]]],
        [
          "core/column",
          {},
          [
            ["core/heading", { placeholder: "Inserisci il titolo", level: 2 }],
            ["core/heading", { placeholder: "Inserisci il titoletto", level: 3 }],
            ["core/paragraph", { placeholder: "Inserisci il contenuto" }],
          ],
        ],
      ],
    ],
  ];

  const addSlide = () => {
    const newSlideCount = attributes.slideCount + 1;
    setAttributes({ slideCount: newSlideCount });
    const slideBlock = wp.blocks.createBlock(
      "core/columns",
      { className: `gallery-cont swiper-slide slide-${attributes.slideCount}` },
      [
        wp.blocks.createBlock("core/column", {}, [wp.blocks.createBlock("core/image", {})]),
        wp.blocks.createBlock("core/column", {}, [
          wp.blocks.createBlock("core/heading", { placeholder: "Inserisci il titolo", level: 2 }),
          wp.blocks.createBlock("core/heading", { placeholder: "Inserisci il titoletto", level: 3 }),
          wp.blocks.createBlock("core/paragraph", { placeholder: "Inserisci il contenuto" }),
        ]),
      ]
    );
    insertBlock(slideBlock, blockOrder.length, clientId);
    swiperRef.current.update();
    swiperRef.current.slideTo(attributes.slideCount);

    setTimeout(() => {
      swiperRef.current.slideTo(attributes.slideCount);
    }, 300);
  };

  const removeSlide = () => {
    const newSlideCount = attributes.slideCount - 1;
    setAttributes({ slideCount: newSlideCount });
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.activeIndex;
      const blockToRemove = blockOrder[activeIndex];
      removeBlock(blockToRemove, rootClientId);
      swiperRef.current.update();
    }
  };

  return (
    <div
      {...blockProps}
      className={`${className || ""} zenfse-block gallery edit`}
    >
      <div className="swiper">
        <div className="swiper-wrapper">
          <InnerBlocks
            template={TEMPLATE}
            templateInsertUpdatesSelection={false}
            templateLock={false}
          />
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div
        className="swiper-navigation"
        style={{ height: attributes.slideCount === 1 ? "0" : "50px" }}
      >
        <div className="swiper-prev"></div>
        <div className="swiper-next"></div>
      </div>
      <div className="button-wrapper">
        <Button
          isSecondary
          onClick={addSlide}
        >
          Aggiungi una Slide
        </Button>
        <Button
          isSecondary
          onClick={removeSlide}
          style={{ display: attributes.slideCount > 1 ? "inline-flex" : "none" }}
        >
          Rimuovi la Slide Corrente
        </Button>
      </div>
    </div>
  );
}
