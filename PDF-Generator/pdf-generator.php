<?php
/*
Plugin Name: Product Spec Sheet Generator
Description: Generate PDF spec sheets for products from Sanity.io dataset.
Version: 1.0
Author: Ciaran Fitzpatrick
*/


// Enqueue scripts and styles
function enqueue_scripts_and_styles()
{
    $plugin_dir = plugin_dir_path(__FILE__);
    $plugin_dir_url = plugin_dir_url(__FILE__);
    $specSheetVersion = 2;
    $spacesKey = "mQpG+BMPWCiZPQHqmF3zFbzXISRv3LWYdZytwbxkeKw";
    wp_enqueue_script('spec-sheet-generator-script', plugin_dir_url(__FILE__) . 'dist/spec-sheet-generator.js', array('jquery'), $specSheetVersion, true);
    wp_localize_script('spec-sheet-generator-script', 'pluginData', array(
        'pluginDirUrl' => $plugin_dir_url,
        'pluginDir' => $plugin_dir,
        'spacesKey' => $spacesKey,

    ));
    wp_enqueue_style('spec-sheet-generator-style', $plugin_dir_url . 'dist/admin-style.css', array(), $specSheetVersion);
}
add_action('admin_enqueue_scripts', 'enqueue_scripts_and_styles');

// Create admin menu page
function add_spec_sheet_generator_page()
{
    add_menu_page('Spec Sheet Generator', 'Spec Sheet Generator', 'manage_options', 'spec-sheet-generator', 'generate_spec_sheets');
}
add_action('admin_menu', 'add_spec_sheet_generator_page');

// HTML markup for spec sheet generator page
function generate_spec_sheets()
{
?>
    <div id="spec-sheet-generator" class="wrap">
        <h1>Generate PDF Spec Sheets</h1>
        <p>Click the button below to generate PDF spec sheets</p>

        <div id="pdf-buttons-container"></div>
    </div>
<?php
}
