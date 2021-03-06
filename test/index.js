'use strict';

const Promise = require( 'bluebird' );

before( 'create tokens', function( done ) {
	let makeToken = require( './helpers' ).makeToken;

	Promise.join(
		makeToken( 1, 'admin' ),
		makeToken( 2, 'nc' ),
		makeToken( 5, 'user' ),
		makeToken( 6, 'expired' ),
		makeToken( 11, 'suspended' ),
		() => done()
	);
});

describe( 'auth', require( './auth' ) );

describe( 'users', require( './user' ) );

describe( 'org units', require( './org-unit' ) );

describe( 'offices', require( './office' ) );

describe( 'permissions', require( './permission' ) );

after( 'destroy tokens', function( done ) {
	let deleteToken = require( './helpers' ).deleteToken;

	Promise.join(
		deleteToken( 'admin' ),
		deleteToken( 'nc' ),
		deleteToken( 'user' ),
		deleteToken( 'expired' ),
		deleteToken( 'suspended' ),
		() => done()
	);
});
