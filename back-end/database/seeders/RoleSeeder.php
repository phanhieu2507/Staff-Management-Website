<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
           'role_name'=>'ADMIN'
        ]);
        DB::table('roles')->insert([
            'role_name'=>'STAFF'
        ]);
    }
}
