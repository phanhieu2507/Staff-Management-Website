<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('register',[UserController::class,'register_user']);
Route::post('login',[UserController::class,'login']);
Route::get('home',[UserController::class,'list']);
Route::delete('delete/{id}',[UserController::class,'delete']);
Route::get('update/{id}',[UserController::class,'find']);
Route::put('push/{id}',[UserController::class,'update']);
Route::get('search/{key}',[UserController::class,'search']);
Route::put('updateperformance/{id}',[UserController::class,'updatePerformance']);

Route::post('tasks/create',[TaskController::class,'createTask']);
Route::delete('tasks/delete/{id}',[TaskController::class,'deleteTask']);
Route::put('tasks/edit/{id}',[TaskController::class,'editTask']);

Route::get('notification/{id}',[NotificationController::class,'getNoti']);