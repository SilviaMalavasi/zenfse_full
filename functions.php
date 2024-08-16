<?php

// Theme init

if (!function_exists('zenfse_setup')) {
  function zenfse_setup()
  {
    // Enable support for post thumbnails and featured images.
    add_theme_support('post-thumbnails');

    // Add support for custom navigation menus.

    register_nav_menus(array(
      'desktop-menu'   => __('Desktop Menù', 'zenfse'),
      'mobile-menu'   => __('Mobile Menù', 'zenfse'),

    ));

    // Add support for the following post formats: aside, gallery, quote, image, and video

    add_theme_support('post-formats', array('aside', 'gallery', 'quote', 'image', 'video'));
  }
}
add_action('after_setup_theme', 'zenfse_setup');

// Enqueue scripts

function zenfse_enqueue_script()
{
  wp_enqueue_script('zenfse-script', get_stylesheet_directory_uri() . '/dist/site.js', array(), filemtime(get_stylesheet_directory() . '/dist/site.js'), true);
}
add_action('wp_enqueue_scripts', 'zenfse_enqueue_script');

// Enqueue styles

function zenfse_enqueue_style()
{
  wp_enqueue_style('zenfse-style', get_stylesheet_directory_uri() . '/style.css', array(), filemtime(get_stylesheet_directory() . '/style.css'), false);
}
add_action('wp_enqueue_scripts', 'zenfse_enqueue_style');

// Dashboard style

function zenfse_admin_styles()
{
  wp_enqueue_style('zenfse-admin-style', get_template_directory_uri() . '/dist/dashboard-style.css');
}
add_action('admin_enqueue_scripts', 'zenfse_admin_styles');
add_action('enqueue_block_assets', 'zenfse_admin_styles');

// Editor style

function zenfse_editor_style()
{
  add_editor_style(
    array(
      'style.css',
    )
  );
}

add_action('after_setup_theme', 'zenfse_editor_style');

// Preload fonts 

function zenfse_preload_fonts()
{
  echo '<link rel="preload" href="' . get_template_directory_uri() . '/src/assets/fonts/Roboto-Regular.woff2" as="font" type="font/woff2" crossorigin>';
  echo '<link rel="preload" href="' . get_template_directory_uri() . '/src/assets/fonts/Roboto-Bold.woff2" as="font" type="font/woff2" crossorigin>';
  echo '<link rel="preload" href="' . get_template_directory_uri() . '/src/assets/fonts/Roboto-Light.woff2" as="font" type="font/woff2" crossorigin>';
}
add_action('wp_head', 'zenfse_preload_fonts');


// Add support for SVG files in the media library

function zenfse_mime_types($mimes)
{
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'zenfse_mime_types');

function zenfse_check_svg($file)
{
  if ($file['type'] === 'image/svg+xml') {
    $svg_content = file_get_contents($file['tmp_name']);
    // Check the SVG file content and reject the file if it's not safe
    if (!zenfse_is_safe_svg($svg_content)) {
      $file['error'] = 'This SVG file is not safe to upload';
    }
  }
  return $file;
}
add_filter('wp_handle_upload_prefilter', 'zenfse_check_svg');

function zenfse_is_safe_svg($svg_content)
{
  if (strpos($svg_content, '<script>') !== false) {
    return false;
  }
  return true;
}


// Render SVG as code

function zenfse_render_svg($block_content, $block)
{
  if ($block['blockName'] === 'core/image' && isset($block['attrs']['id'])) {
    $attachment_id = $block['attrs']['id'];
    if (get_post_mime_type($attachment_id) == 'image/svg+xml') {
      $file = get_attached_file($attachment_id);
      $svg_content = file_get_contents($file);
      $block_content = preg_replace('/<img[^>]+>/i', $svg_content, $block_content);
    }
  }

  return $block_content;
}
add_filter('render_block', 'zenfse_render_svg', 10, 2);


/* Add theme name to body lass in frontend */

function add_body_class($classes)
{
  if (!is_admin()) {
    $classes[] = 'zenfse-theme';
  }
  return $classes;
}
add_filter('body_class', 'add_body_class');


/* Enhance core blocks */

// Editor

function zenfse_core_blocks()
{
  // GSAP animation 

  wp_enqueue_script('zenfse-core-blocks-gsap', get_stylesheet_directory_uri() . '/blocks/build-core-blocks/gsap-dropdown.js', array('wp-blocks', 'wp-element', 'wp-block-editor'), filemtime(get_stylesheet_directory() . '/blocks/build-core-blocks/gsap-dropdown.js'), true);


  // core/image dimension

  wp_enqueue_script('zenfse-core-blocks-image', get_stylesheet_directory_uri() . '/blocks/build-core-blocks/image-dimension.js', array('wp-blocks', 'wp-element', 'wp-block-editor'), filemtime(get_stylesheet_directory() . '/blocks/build-core-blocks/image-dimension.js'), true);

  wp_enqueue_style('zenfse-core-blocks-image-backend-style', get_stylesheet_directory_uri() . '/blocks/build-core-styles/image-dimension-backend-style.css', array(), filemtime(get_stylesheet_directory() . '/blocks/build-core-styles/image-dimension-backend-style.css'));

  // core/image style (icona piccola)

  wp_enqueue_script('zenfse-enqueue-image-style-script', get_stylesheet_directory_uri() . '/blocks/build-core-blocks/image-style.js', array('wp-blocks', 'wp-element', 'wp-block-editor'), filemtime(get_stylesheet_directory() . '/blocks/build-core-blocks/image-style.js'), true);

  wp_enqueue_style('zenfse-enqueue-image-style-style', get_stylesheet_directory_uri() . '/blocks/build-core-styles/image-style.css', array(), filemtime(get_stylesheet_directory() . '/blocks/build-core-styles/image-style.css'));
}

add_action('enqueue_block_editor_assets', 'zenfse_core_blocks');
add_action('enqueue_block_assets', 'zenfse_core_blocks');


// Frontend

function zenfse_core_blocks_frontend()
{

  // GSAP animation

  wp_enqueue_style('zenfse-gsap-animations-gsap-frontend-style', get_stylesheet_directory_uri() . '/blocks/build-core-styles/gsap-frontend-style.css', array(), filemtime(get_stylesheet_directory() . '/blocks/build-core-styles/gsap-frontend-style.css'));

  wp_enqueue_script('zenfse-gsap-frontend', get_stylesheet_directory_uri() . '/blocks/build-core-blocks/gsap-frontend.js', array('wp-blocks', 'wp-element', 'wp-block-editor'), filemtime(get_stylesheet_directory() . '/blocks/build-core-blocks/gsap-frontend.js'), true);


  // core/image dimension

  wp_enqueue_style('zenfse-core-blocks-image-frontend-style', get_stylesheet_directory_uri() . '/blocks/build-core-styles/image-dimension-frontend-style.css', array(), filemtime(get_stylesheet_directory() . '/blocks/build-core-styles/image-dimension-frontend-style.css'));
  wp_enqueue_style('zenfse-enqueue-image-style-frontend', get_stylesheet_directory_uri() . '/blocks/build-core-styles/image-style.css', array(), filemtime(get_stylesheet_directory() . '/blocks/build-core-styles/image-style.css'));

  wp_enqueue_script('zenfse-core-blocks-image-frontend', get_stylesheet_directory_uri() . '/blocks/build-core-blocks/image-dimension-frontend.js', array('wp-blocks', 'wp-element', 'wp-block-editor'), filemtime(get_stylesheet_directory() . '/blocks/build-core-blocks/image-dimension-frontend.js'), true);
}
add_action('wp_enqueue_scripts', 'zenfse_core_blocks_frontend');


/* Custon blocks */

// Register custom blocks category

add_filter('block_categories_all', 'zenfse_blocks_categories');
function zenfse_blocks_categories($categories)
{
  array_unshift($categories, array(
    'slug'  => 'blocchi-zenfse',
    'title' => 'Blocchi ZenFSE'
  ));
  return $categories;
};


// Register custom blocks

include_once get_template_directory() . '/blocks/custom-blocks/navigation/callback.php';
include_once get_template_directory() . '/blocks/custom-blocks/navigation/menu-endpoint.php';
include_once get_template_directory() . '/blocks/custom-blocks/video-mobile-switch/callback.php';

function zenfse_register_blocks()
{

  $blocks = array(
    'navigation' => 'zenfse_render_navigation_block',
    'gallery' => '',
    'gallery-con-titolo' => '',
    'footer' => '',
    'video-mobile-switch'  => 'zenfse_render_block_video_mobile_switch',

  );

  foreach ($blocks as $block => $render_callback) {
    $args = array();
    if ($block === 'video-mobile-switch') {
      $args['attributes'] = array(
        'mobileVideoUrlorImage' => array(
          'type' => 'string',
        ),
      );
    }
    if (!empty($render_callback)) {
      $args['render_callback'] = $render_callback;
    }
    register_block_type(__DIR__ . '/blocks/build-custom-blocks/' . $block, $args);
  }
}
add_action('init', 'zenfse_register_blocks');
