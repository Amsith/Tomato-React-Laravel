<?php

use App\Http\Controllers\FoodsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


// Route::middleware('api')->group(function () {
//     Route::resource('foods', FoodsController::class);
// });


Route::resource('foods', FoodsController::class);


// ===== about Function =========//
Route::get('foods/{id}', [FoodsController::class, 'about']);

// ===== Shuffle Function =========//
// ===== Not Workng Function =========//
Route::get('hello', [FoodsController::class, 'shuffle']);


// ... other routes
// Route::get('/foods', [FoodsController::class, 'index'])->middleware('api');
// Route::post('/foods', [FoodsController::class, 'store'])->middleware('api');