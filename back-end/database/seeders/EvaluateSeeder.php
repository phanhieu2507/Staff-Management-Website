<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class EvaluateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for($i=1;$i<=7;$i++)
        {
        DB::table('evaluates')->insert([
            'user_id'=>$i,
             'month_1'=>0,
             'month_2'=>0,
             'month_3'=>0,
             'month_4'=>0,
             'month_5'=>0,
             'month_6'=>0,
             'month_7'=>0,
             'month_8'=>0,
             'month_9'=>0,
             'month_10'=>0,
             'month_11'=>0,
             'month_12'=>0,
         ]);
        }
    }
}
