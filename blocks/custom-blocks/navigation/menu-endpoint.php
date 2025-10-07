<?php
function get_registered_menus()
{
  $locations = get_nav_menu_locations();
  $menus = array();

  foreach ($locations as $location => $id) {
    $menu = wp_get_nav_menu_object($id);
    $menu_items = wp_get_nav_menu_items($menu->term_id);

    $items = array();
    foreach ($menu_items as $menu_item) {
      $items[] = array(
        'id' => $menu_item->ID,
        'url' => $menu_item->url,
        'title' => $menu_item->title,
        'target' => $menu_item->target,
        'description' => $menu_item->description,
      );
    }

    $menus[$location] = array(
      'id' => $menu->term_id,
      'name' => $menu->name,
      'slug' => $menu->slug,
      'items' => $items,
    );
  }

  return $menus;
}

function register_menus_route()
{
  register_rest_route('zenfse-navigation/v1', '/zenfse-menus', array(
    'methods' => 'GET',
    'callback' => 'get_registered_menus',
    'permission_callback' => '__return_true',
  ));
}
add_action('rest_api_init', 'register_menus_route');
