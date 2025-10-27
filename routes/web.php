<?php

use App\Http\Controllers\SlideController;
use App\Http\Controllers\TaiwindController;
use Illuminate\Support\Facades\Route;

Route::get('/', [TaiwindController::class, 'index'])->name('taiwind.index');
Route::get('/landing1', [TaiwindController::class, 'landing'])->name('taiwind.landing');
Route::get('/landing2', [TaiwindController::class, 'landing2'])->name('taiwind.landing2');
Route::get('/landing3', [TaiwindController::class, 'landing3'])->name('taiwind.landing3');
Route::get('/landing4', [TaiwindController::class, 'landing4'])->name('taiwind.landing4');
Route::get('/landing5', [TaiwindController::class, 'landing5'])->name('taiwind.landing5');

Route::domain('vini.test')->group(function () {
    Route::get('/', function () {
        return 'Hello from storage.local';
    });
});

Route::domain('api.local')->group(function () {
    Route::get('/', function () {
        return 'Hello from api.local';
    });
});

Route::get('/create', [SlideController::class, 'create'])->name('slides.create');
Route::post('/store', [SlideController::class, 'store'])->name('slides.store');
