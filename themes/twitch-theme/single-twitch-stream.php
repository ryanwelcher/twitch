<?php

wp_head();
block_header_area();
?>
<div class="entry-content wp-block-post-content">
	<?php
		echo do_blocks('<!-- wp:post-content {"layout":{"inherit":true}} /-->');
	?>
</div>
<?php
block_template_part('footer');

wp_footer();
