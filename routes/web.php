<?php

use App\Http\Controllers\TaiwindController;
use Illuminate\Support\Facades\Route;

Route::get('/', [TaiwindController::class, 'index'])->name('taiwind.index');

Route::domain('storage.local')->group(function () {
    Route::get('/', function () {
        return 'Hello from storage.local';
    });
});

Route::domain('api.local')->group(function () {
    Route::get('/', function () {
        return 'Hello from api.local';
    });
});
