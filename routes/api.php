<?php

use App\Http\Controllers\Api\AboutController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\InfoController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\RegistrationController;
use App\Http\Controllers\Api\ServiceController;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('/login', [RegistrationController::class, 'login']);
Route::resource('/register', RegistrationController::class);
Route::resource('/services', ServiceController::class);
Route::resource('/about', AboutController::class);
Route::resource('/info', InfoController::class);
Route::resource('/projects', ProjectController::class);
Route::resource('/clients', ClientController::class);
