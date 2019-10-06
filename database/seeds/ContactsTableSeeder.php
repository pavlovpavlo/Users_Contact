<?php

use Illuminate\Database\Seeder;
use App\Contacts;

class ContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

                // Create 50 product records
                for ($i = 0; $i < 5; $i++) {
                    Contacts::create([
                        'name' => $faker->name,
                        'phone' =>$faker->phoneNumber,
                        'description' => $faker->paragraph(10),
                        'image' =>''
                    ]);
                }
    }
}
