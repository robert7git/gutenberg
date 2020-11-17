/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';

/**
 * Default template details, ordered by perceived importance
 */
export const TEMPLATES_DEFAULT_DETAILS = [
	{
		slug: 'front-page',
		title: _x( 'Front Page', 'template name' ),
		description: __(
			'Resolves when the site home page is requested'
		),
	},
	{
		slug: 'single-post',
		title: _x( 'Post', 'template name' ),
		description: __( 'Resolves when a post is requested' ),
	},
	{
		slug: 'page',
		title: _x( 'Page', 'template name' ),
		description: __( 'Resolves when a page is requested' ),
	},
	{
		slug: 'archive',
		title: _x( 'Archive', 'template name' ),
		description: __(
			'Resolves when archives like post categories are requested'
		),
	},
	{
		slug: 'search',
		title: _x( 'Search Results', 'template name' ),
		description: __( 'Resolves when a visitor searches the site' ),
	},
	{
		slug: '404',
		title: _x( '404', 'template name' ),
		description: __(
			'Resolves when the requested content cannot be found'
		),
	},
	{
		slug: 'index',
		title: _x( 'Index', 'template name' ),
		description: __( 'Resolves when no other template can be found' ),
	},
];
