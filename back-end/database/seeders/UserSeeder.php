<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'username'=>'phan cong hieu',
            'email'=>'hieu@gmail.com',
            'password'=>'123456',
            'address'=>'hoa binh',
            'phonenumber'=>'086592456',
            'role_id'=>1,
         ]);
    }
}
