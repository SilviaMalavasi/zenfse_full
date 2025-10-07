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


function zenfse_language_switcher()
{
  $array_language = trp_custom_language_switcher();
  $current_language = get_language_attributes();
  $pattern = '/lang="([a-z]{2}-[A-Z]{2})"/';
  if (preg_match($pattern, $current_language, $matches)) {
    $current_language_final = $matches[1];
  };
  $current_language_final = str_replace('-', '_', $current_language_final);

  $html_langauge_switcher = '<div class="language-switcher" data-no-translation>';
  if (apply_filters('trp_allow_tp_to_run', true)) {
    foreach ($array_language as $name => $item) {
      $html_langauge_switcher .= '<p><a';
      if ($item["language_code"] == $current_language_final) {
        $html_langauge_switcher .= ' class="current-language"';
      }
      $html_langauge_switcher .= ' href="' . $item['current_page_url'] . '">' .
        $item['short_language_name'] . '</a><span>|</span>
      </p>';
    }
  }
  $html_langauge_switcher .= '</div>';
  return $html_langauge_switcher;
}

function zenfse_generate_desktop_menu_html($menu_id)
{
  $html_desktop = '<nav role="navigation" id="desktop-menu">';
  $html_desktop .= wp_nav_menu(array(
    'menu' => $menu_id,
    'echo' => false,
  ));
  if (function_exists('trp_custom_language_switcher')) {
    $html_desktop .= zenfse_language_switcher();
  }
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
  if (function_exists('trp_custom_language_switcher')) {
    $html_mobile .= zenfse_language_switcher();
  }
  $html_mobile .= '
         </div>
      </div>
    </nav>';
  return $html_mobile;
}
