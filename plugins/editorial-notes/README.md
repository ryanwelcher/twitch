# Overview
In this recipe, we’re going to use block filters to add a custom attribute and controls to all blocks to allow editors to add notes. Any blocks that have notes will have some custom CSS applied to them in the Block Editor to easily distinguish them from other blocks.

# Step 1 - Configure the build process

We’re not building any blocks in this recipe so let’s tell @wordpress/scripts where to find the file we want to use.

Update the start and build commands in package.json as follows to load the src/notes.js file.
```bash
"start": "wp-scripts start src/notes-field.js",
"build": "wp-scripts build src/notes-field.js",
```

Now, start the build process but running the following in the terminal
`npm run start`

# Step 2 - Enqueueing the assets we need
We’re now building files but we need to enqueue the generated JavaScript and CSS files before we can start adding our custom items.

Add the following to the main PHP in the root directory

```php
/**
 * Enqueue the JS containing our filters
 */
function editorial_notes_enqueue_scripts() {
	$notes_field_file = plugin_dir_path( __FILE__ ) . '/build/notes-field.asset.php';

	if ( file_exists( $notes_field_file ) ) {
		$assets = include $notes_field_file;

		// Enqueue the JavaScript that contains our filters.
		wp_enqueue_script(
			'notes-field',
			plugin_dir_url( __FILE__ ) . '/build/notes-field.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\editorial_notes_enqueue_scripts' );

/**
 * Enqueue the editor only style
 */
function editorial_notes_enqueue_block_editor_css() {
	$notes_field_file = plugin_dir_path( __FILE__ ) . '/build/notes-field.asset.php';
	if ( file_exists( $notes_field_file ) ) {
		$assets = include $notes_field_file;
		// Enqueue the CSS for the has-notes class.
		wp_enqueue_style(
			'notes-class',
			plugin_dir_url( __FILE__ ) . '/build/notes-field.css',
			array(),
			$assets['version'],
		);
	}
}
add_action( 'enqueue_block_assets', __NAMESPACE__ . '\editorial_notes_enqueue_block_editor_css' );
```

This code is checking for and enqueueing the files we need using the enqueue_block_editor_assets hook to ensure it’s only being added to the block editor. This is important because none of the customizations we’re making pertain to how the block displays on the front end as so these files should not be loaded there.

# Step 3 - Adding a custom attribute to all blocks
The first part of our recipe is to add a custom notes attribute to each registered block that will hold any added notes from the editor.

We’re going to use a [Block Filter](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/) called blocks.registerBlockType filter to do this. This filter allows us to modify the settings for a block at the point of registration.

The callback for this filter will receive two parameters; block settings and block name.

Add the following callback to `.src/notes-field.js`

```php
/**
* Filter the block settings to add the notes attribute.
*
* @param {Object} settings Settings for the block.
* @param {string} name     The name of the block.
*
* @return {Object} he modified settings.
*/
function addNotesAttribute( settings, name ) {
   return {
       ...settings,
       attributes: {
           ...settings.attributes,
           notes: {
               type: 'string',
               default: '',
           },
       },
   };
}
```

This code is taking the existing settings object and updating the attribute property to include a new attribute called notes of type string with a default value of an empty string.

Next, let’s register the filter for this:
```php
addFilter(
   'blocks.registerBlockType',
   'block-developer-cookbook/notes-field',
   addNotesAttribute
);
```
addFilter is part of the [`@wordpress/hooks`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-hooks/) and take four parameters; the name of the filter, a unique namespace, the callback function, and finally an optional priority.

Your new attribute is registered! Now let’s add a way to interact with it.

# Step 4 - Adding a control to manage the notes
In the previous step we registered a custom attribute so now we need to create a control to allow updating it.

To do this, we’re going to use another block filter called [`editor.BlockEdit`](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#editor-blockedit) which gives us access to the Edit component for a block.

Register the new filter and add the callback:

```js
/**
* Add a custom control to the block inspector controls for every block.
*
* @param {WPElement} BlockEdit The original block edit component.
*
* @return {WPElement} Element to render.
*/
function addEditorNotesField( BlockEdit ) {
   return ( props ) => {
       return (
           <>
               <BlockEdit { ...props } />
           </>
       );
   };
}
addFilter(
   'editor.BlockEdit',
   'block-developer-cookbook/notes-field-control',
   addEditorNotesField
);
```
There is a lot going on here so let’s take a minute to walk through it. The callback for this filter receives a single parameter which is the Edit component for the block being filtered.

`addEditorNotesField` returns another function that receives the props from the Edit component as a parameter and the output of this will be used at the new Edit component for the block.

Finally , the function that is returned by `addEditorNotesField` returns the new JSX for the Edit component.

Notice the `<BlockEdit { ...props } />` line in there? That is there so that any controls from the original block will be persisted.

Now, let’s add our new control below the existing controls. To do this we need to use the `InspectorControls` component.

Let’s add that now along with the `PanelBody` and `TextareaControl`:

```js
/**
* Add a custom control to the block inspector controls for every block.
*
* @param {WPElement} BlockEdit The original block edit component.
*
* @return {WPElement} Element to render.
*/
function addEditorNotesField( BlockEdit ) {
   return ( props ) => {
	const {
           attributes: { notes },
           setAttributes,
       } = props;
       return (
           <>
               <BlockEdit { ...props } />
               <InspectorControls>
                   <PanelBody>
                       <TextareaControl
                           label={ __(
                               'Editorial Notes',
                               'block-developer-cookbook'
                           ) }
                           value={ notes }
                           onChange={ ( notes ) =>
                               setAttributes( { notes } )
                           }
                           help={ __(
                               'Add some editorial notes for this block'
                           ) }
                       />
                   </PanelBody>
               </InspectorControls>
           </>
       );
   };
}


addFilter(
   'editor.BlockEdit',
   'block-developer-cookbook/notes-field-control',
   addEditorNotesField
);
```
We’ve also added all of the settings for the `TextareaControl` to display and update the notes attribute.

Next, we’re going to add a some code to make this run a little faster. We only need this new control when the block is selected so let’s only display it when that is the case using the `isSelected` property from props.

```js
/**
* Add a custom control to the block inspector controls for every block.
*
* @param {WPElement} BlockEdit The original block edit component.
*
* @return {WPElement} Element to render.
*/
function addEditorNotesField( BlockEdit ) {
   return ( props ) => {
       const {
           attributes: { notes },
           setAttributes,
isSelected
       } = props;
       return (
           <>
               <BlockEdit { ...props } />
               { isSelected && (
                   <InspectorControls>
                       <PanelBody>
                           <TextareaControl
                               label={ __(
                                   'Editorial Notes',
                                   'block-developer-cookbook'
                               ) }
                               value={ notes }
                               onChange={ ( notes ) =>
                                   setAttributes( { notes } )
                               }
                               help={ __(
                                   'Add some editorial notes for this block'
                               ) }
                           />
                       </PanelBody>
                   </InspectorControls>
               ) }
           </>
       );
   };
}


addFilter(
   'editor.BlockEdit',
   'block-developer-cookbook/notes-field-control',
   addEditorNotesField
);
```

# Step 5 - Displaying when a block has notes.
The last thing we need to do is show a visual cue that a block has notes inside the block editor.

For this we’re going to use the [`editor.BlockListBlock`](https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#editor-blocklistblock). This filter is used to modify the block’s wrapper component containing the block’s edit component and all toolbars. It receives the original `BlockListBlock` component and returns a new wrapped component.

```js
/**
* Add a custom class and CSS to show when a block has notes.
*
* @param {WPElement} BlockListBlock The original block list block component.
*
* @return {WPElement} Element to render.
*/
function addNotesDisplayClass( BlockListBlock ) {
   return ( props ) => {
       const { notes } = props.attributes;
       return (
           <BlockListBlock
               { ...props }
               className={ notes.length ? 'has-notes' : '' }
           />
       );
   };
}
addFilter(
   'editor.BlockListBlock',
   'block-developer-cookbook/notes-field-class',
   addNotesDisplayClass
);
```

In the callback for this filter, we are checking to see of the notes attribute has a length and if so, adding the has-notes class. Once this class has been added, the CSS enqueued in Step 2 takes over and we can now see which blocks have notes.

Save and try it out!
