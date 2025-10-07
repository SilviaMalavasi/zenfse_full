# ZenFSE - a blank developer theme for FSE WordPress

Hi devs. This is a blank developer theme per Wordpress using FSE.

ZenFSE it's intended to create a solid, high customizable starting point for building a theme with his own custom
blocks. No frameworks in production: this theme is for mad folks like me who want to have maximun control over final CSS
and JS.

This is the core, minimal version of ZenFSE and it's the best starting point if you want to develope from zero. I also
built an enhanced version (that's the one I use when I start a new project) with some fancy animation and modified core
blocks. You can check it out here: [Fancy ZenFSE](https://pages.github.com/).

## :rocket: Getting Started

To use ZenFSE, clone this repo and just `npm i` and `npm run build` as usual. Use `npm run dev` for developing. Nothing
new.

## :trolleybus: Compiling

I used Webpack (built-in @wordpress/scripts). The CSS is processed by SASS and autoprefixed.

## :school: Project structure

Ok, the folder stucture needs explaination.

- blocks: where to put your magic. Build here your custom blocks and register them in [funcions.php](funcions.php) under
  the `/* Custon blocks */` section. They will be compiled in `build-custom-blocks` folder. I left two custom blocks
  (the ones I always use) but you can delete `footer` if you don't need it. Custom block `navigation` is used in header
  template part [header.html](parts/header.html). If you wanto to remome it, please update
  [header.html](parts/header.html) conequently.
  - build-custom-blocks: a folder with compiled custom blocks.
  - footer: a custom block for footer, usefull if you want to build an animated or complex footer. Remove this folder
    and his registration in [funcions.php](funcions.php) if you only need core wordpress blocks for your footer.
  - navigation: a custom block to have a customizable navigation menù. Set it in header section of wordpress editor.
    It's loaded in [header.html](parts/header.html) and lets you display and style a desktop menù and a different mobile
    menù.

## :sunglasses: License

This project is licensed under the GNU License - see the [license.txt](license.txt) file for details.
