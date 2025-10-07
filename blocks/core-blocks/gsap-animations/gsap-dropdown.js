const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;

/**
 * Add Gsap Class attribute to blocks
 */

function addAttributes(settings, name) {
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      gsapClass: {
        type: "string",
        default: "",
      },
    },
  };
}

addFilter("blocks.registerBlockType", "zenfse-core-blocks/gsap-dropdown/add-attributes", addAttributes);

/**
 * Add Gsap Class control to blocks
 */

const addInspectorControl = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const {
      attributes: { gsapClass },
      setAttributes,
      name,
    } = props;

    let optionsList = [
      {
        label: "Nessuna",
        value: "none",
      },
      {
        label: "Fade in",
        value: "fade-in",
      },
      {
        label: "Fade in Up",
        value: "fade-in-up",
      },
      {
        label: "Fade in Left",
        value: "fade-in-left",
      },
      {
        label: "Fade in Right",
        value: "fade-in-right",
      },
      {
        label: "Fade in Stagger",
        value: "fade-in-stagger-cont",
      },
      {
        label: "Fade in Left Stagger",
        value: "fade-in-left-stagger-cont",
      },
      {
        label: "Fade in Right Stagger",
        value: "fade-in-right-stagger-cont",
      },
      {
        label: "Fade in Up Stagger",
        value: "fade-in-up-stagger-cont",
      },
    ];

    if (name === "core/heading") {
      optionsList.push(
        {
          label: "Numeri - inserisci in grassetto la parte da animare",
          value: "numeri",
        },
        {
          label: "Anima i caratteri",
          value: "character-animation",
        }
      );
    }

    if (name === "core/paragraph") {
      optionsList.push({
        label: "Animazione del testo",
        value: "text-animation",
      });
    }

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <PanelBody
            title="Animazione"
            initialOpen={false}
          >
            <SelectControl
              label="Scegli l'animazione"
              value={gsapClass}
              options={optionsList}
              onChange={(value) => {
                setAttributes({ gsapClass: value });
              }}
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, "withInspectorControl");

addFilter("editor.BlockEdit", "zenfse-core-blocks/gsap-dropdown/add-inspector-controls", addInspectorControl);

/**
 * Add Gsap Class to the block in the editor
 */

const addGsapClassEditor = createHigherOrderComponent((BlockListBlock) => {
  return (props) => {
    const {
      attributes: { gsapClass },
      className,
      name,
    } = props;

    let newProps = { ...props };
    if (className || gsapClass) {
      newProps.className = `${className ? className : ""} ${gsapClass ? gsapClass : ""}`;
    }

    return <BlockListBlock {...newProps} />;
  };
}, "withClientIdClassName");

addFilter("editor.BlockListBlock", "zenfse-core-blocks/gsap-dropdown/add-editor-class", addGsapClassEditor);

/**
 * Add size class to the block on the front end
 */

function addGsapClassFrontEnd(props, block, attributes) {
  const { className } = props;
  const { gsapClass } = attributes;

  let newProps = { ...props };
  if (className || gsapClass) {
    newProps.className = `${className ? className : ""} ${gsapClass ? gsapClass : ""}`;
  }

  return newProps;
}

addFilter(
  "blocks.getSaveContent.extraProps",
  "zenfse-core-blocks/gsap-dropdown/add-front-end-class",
  addGsapClassFrontEnd
);
