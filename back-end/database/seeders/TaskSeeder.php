<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
            'user_id'=>3,
            'status'=>"1",
            'title'=>"Report",
            'description'=>"Create a report",
            'start_date'=>"2022-10-30",
            'due_date'=>"2022-10-30",
         ]);
         DB::table('tasks')->insert([
            'user_id'=>3,
            'status'=>"1",
            'title'=>"Report",
            'description'=>"Create a report",
            'start_date'=>"2022-10-30",
            'due_date'=>"2022-10-30",
         ]);
    }
}
