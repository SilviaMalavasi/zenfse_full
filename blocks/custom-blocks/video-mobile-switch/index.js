import { registerBlockType } from "@wordpress/blocks";
import "./edit.scss";
import "./save.scss";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
registerBlockType(metadata.name, {
  edit: Edit,
  save,
});
