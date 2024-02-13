<?php
function zenfse_render_navigation_block($attributes)
{

  $menu_html = '';

  if (array_key_exists('selectedDesktopMenuId', $attributes)) {
    $desktop_menu_id = $attributes['selectedDesktopMenuId'];
  }
  if (array_key_exists('selectedMobileMenuId', $attributes)) {
    $mobile_menu_id = $attributes['selectedMobileMenuId'];
  }

  if (isset($desktop_menu_id)) {
    $menu_html .= zenfse_generate_desktop_menu_html($desktop_menu_id);
  }
  if (isset($mobile_menu_id)) {
    $menu_html .= zenfse_generate_mobile_menu_html($mobile_menu_id);
  }

  return $menu_html;
}



function zenfse_generate_desktop_menu_html($menu_id)
{
  $html_desktop = '<nav role="navigation" id="desktop-menu">';
  $html_desktop .= wp_nav_menu(array(
    'menu' => $menu_id,
    'echo' => false,
  ));
  $html_desktop .= '</nav>';
  return $html_desktop;
}

function zenfse_generate_mobile_menu_html($menu_id)
{
  $html_mobile = '
    <nav role="navigation" id="mobile-menu">
      <div id="menuToggle">
        <div class="top-line"></div>
        <div class="medium-line"></div>
        <div class="bottom-line"></div>
      </div>
      <div class="mobile-menu-cont">
        <div class="mobile-menu-cont-cont">';
  $html_mobile .= wp_nav_menu(array(
    'menu' => $menu_id,
    'echo' => false,
  ));
  $html_mobile .= '
         </div>
      </div>
    </nav>';
  return $html_mobile;
}
