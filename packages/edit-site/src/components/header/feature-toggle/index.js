/**
 * External dependencies
 */
import { flow } from 'lodash';

/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { MenuItem } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { check } from '@wordpress/icons';
import { speak } from '@wordpress/a11y';

export default function FeatureToggle( {
	feature,
	label,
	info,
	messageActivated,
	messageDeactivated,
} ) {
	const speakMessage = () => {
		if ( isActive ) {
			speak( messageDeactivated || __( 'Feature deactivated' ) );
		} else {
			speak( messageActivated || __( 'Feature activated' ) );
		}
	};

	const isActive = useSelect( ( select ) => {
		return select( 'core/edit-site' ).isFeatureActive( feature );
	}, [] );

	const { toggleFeature } = useDispatch( 'core/edit-site' );

	return (
		<MenuItem
			icon={ isActive && check }
			isSelected={ isActive }
			onClick={ flow(
				toggleFeature.bind( null, feature ),
				speakMessage
			) }
			role="menuitemcheckbox"
			info={ info }
		>
			{ label }
		</MenuItem>
	);
}
