Route::get('/db-test', function () {
    return DB::connection()->getDatabaseName();
});
