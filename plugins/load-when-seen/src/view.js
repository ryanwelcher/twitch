import domReady from '@wordpress/dom-ready';
import {
	render,
	useEffect,
	useState,
	unmountComponentAtNode,
} from '@wordpress/element';
import useSWR from 'swr';

const App = ( { message, ratio } ) => {
	const [ counter, setCounter ] = useState( 0 );
	const fetcher = ( ...args ) =>
		fetch( ...args ).then( ( res ) => res.json() );
	const { data, error } = useSWR(
		'https://api.imgflip.com/get_memes',
		fetcher
	);

	useEffect( () => {
		const timeout = setTimeout( () => {
			setCounter( ( counter ) => counter + 1 );
		}, 1000 );

		return () => {
			clearTimeout( timeout );
		};
	}, [ counter ] );

	return (
		<>
			{ `${ message } | Ratio: ${ ratio }` }
			<br />
			{ counter }
			{ data?.data?.memes && (
				<img src={ data?.data?.memes[ 0 ].url } width="300" />
			) }
		</>
	);
};
function buildThresholdList() {
	let thresholds = [];
	let numSteps = 20;

	for ( let i = 1.0; i <= numSteps; i++ ) {
		let ratio = i / numSteps;
		thresholds.push( ratio );
	}

	thresholds.push( 0 );
	return thresholds;
}

domReady( function () {
	const container = document.querySelector( '#app' );
	const observer = new IntersectionObserver(
		function ( entries ) {
			if ( entries[ 0 ][ 'isIntersecting' ] === true ) {
				let message = '';
				if ( entries[ 0 ][ 'intersectionRatio' ] === 1 )
					message = 'Target is fully visible in the screen';
				else if ( entries[ 0 ][ 'intersectionRatio' ] > 0.5 )
					message =
						'More than 50% of target is visible in the screen';
				else
					message =
						'Less than 50% of target is visible in the screen';
				// change the opacity?
				container.style.opacity = entries[ 0 ][ 'intersectionRatio' ];

				render(
					<App
						message={ message }
						ratio={ entries[ 0 ][ 'intersectionRatio' ] }
					/>,
					container
				);
			} else {
				unmountComponentAtNode( container );
			}
		},
		{ threshold: buildThresholdList() }
	);
	observer.observe( container );
} );
