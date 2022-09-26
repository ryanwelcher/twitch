<!-- wp:template-part {"slug":"header"} /-->
<?php
wp_head();

block_template_part( 'header' );

// echo do_blocks('<!-- wp:template-part {"slug":"header","tagName":"header"} /-->');
$type     = 'post';
$per_page = 4;

echo do_blocks('<!-- wp:query {"queryId":10,"query":{"perPage":'.$per_page.',"pages":0,"offset":0,"postType":"'.$type.'","categoryIds":[],"tagIds":[],"order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false}} -->
<div class="wp-block-query"><!-- wp:post-template -->
	<!-- wp:post-content /-->
	<!-- /wp:post-template --></div>
	<!-- /wp:query -->');

// echo do_blocks( '<!-- wp:post-content {"layout":{"inherit":true}} /-->' );

block_template_part( 'footer' );

wp_footer();
