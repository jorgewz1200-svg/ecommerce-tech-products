<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::create(['name' => 'Laptop ASUS ZenBook 14', 'price' => 1200]);
        Product::create(['name' => 'Monitor LG UltraWide 34"', 'price' => 800]);
        Product::create(['name' => 'Mouse Logitech G Pro', 'price' => 150]);
        Product::create(['name' => 'Auriculares Sony WH-1000XM5', 'price' => 400]);
        Product::create(['name' => 'Teléfono Samsung Galaxy S24', 'price' => 999]);
        Product::create(['name' => 'Tablet Microsoft Surface Pro', 'price' => 1100]);
        Product::create(['name' => 'SSD Samsung 1TB NVMe', 'price' => 200]);
    }
}
