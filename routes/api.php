<?php
/**
**Basic Routes for a RESTful service:
**Route::get($uri, $callback);
**Route::post($uri, $callback);
**Route::put($uri, $callback);
**Route::delete($uri, $callback);
**
*/


Route::get('contacts', 'ContactsController@getList');

Route::post('contacts','ContactsController@Add');

Route::put('contacts/{contact}','ContactsController@Edit');

Route::delete('contacts/{contact}', 'ContactsController@Delete');
