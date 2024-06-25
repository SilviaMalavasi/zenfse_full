<?php

function zenfse_render_block_video_mobile_switch($attributes, $content)
{
  // Check if we're on the frontend
  if (!is_admin() && !empty($attributes['mobileVideoUrlorImage'])) {

    // Create a new DOMDocument instance
    $dom = new DOMDocument();

    // Suppress warnings
    libxml_use_internal_errors(true);

    // Load the content HTML
    $dom->loadHTML($content, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

    // Clear the errors
    libxml_clear_errors();

    // Find the video element
    $video = $dom->getElementsByTagName('video')->item(0);

    // Initialize an array to store the video attributes
    $video_attributes = array();

    // Loop through the video attributes and add them to the array
    if ($video) {
      foreach ($video->attributes as $attr) {
        $video_attributes[$attr->nodeName] = $attr->nodeValue;
      }
    }

    // Now you can use the $video_attributes array as you need

    $output = '<div class="video-mobile-switch">
    <figure class="wp-block-video"';
    foreach ($video_attributes as $name => $value) {
      $output .= ' data-' . $name . '="' . $value . '"';
    }
    $output .= ' data-mobileSrc="' . $attributes['mobileVideoUrlorImage'] . '"></figure>
    </div>';

    return $output;

    return $output;
  }

  // If we're in the editor, return the original block content
  return $content;
}
