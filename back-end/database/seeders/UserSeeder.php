<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
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
            'password'=>Hash::make('123456'),
            'address'=>'hoa binh',
            'phonenumber'=>'086592456',
            'role_id'=>1,
        ]);
        DB::table('users')->insert([
            'username'=>'le anh duc',
            'email'=>'duc@gmail.com',
            'password'=>Hash::make('123456'),
            'address'=>'hoa binh',
            'phonenumber'=>'0123456',
            'role_id'=>1,
        ]);
        DB::table('users')->insert([
            'username'=>'hoang lam',
            'email'=>'lam@gmail.com',
            'password'=>Hash::make('123456'),
            'address'=>'ha noi',
            'phonenumber'=>'011233445',
            'role_id'=>2,
        ]);
        DB::table('users')->insert([
            'username'=>'vu minh quan',
            'email'=>'quan@gmail.com',
            'password'=>Hash::make('123456'),
            'address'=>'hoa binh',
            'phonenumber'=>'035432132',
            'role_id'=>2,
        ]);
        DB::table('users')->insert([
            'username'=>'nguyen duc hoang',
            'email'=>'hoang@gmail.com',
            'password'=>Hash::make('123456'),
            'address'=>'ha nam',
            'phonenumber'=>'012316516',
            'role_id'=>2,
        ]);
        DB::table('users')->insert([
            'username'=>'phan thanh luong',
            'email'=>'luong@gmail.com',
            'password'=>Hash::make('123456'),
            'address'=>'cao bang',
            'phonenumber'=>'086592456',
            'role_id'=>2,
         ]);
         DB::table('users')->insert([
            'username'=>'tran thi thu ha',
            'email'=>'ha@gmail.com',
            'password'=>Hash::make('123456'),
            'address'=>'bac ninh',
            'phonenumber'=>'0123156',
            'role_id'=>2,
         ]);
        
    }
}
