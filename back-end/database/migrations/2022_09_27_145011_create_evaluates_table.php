<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluates', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('user_id');    
            $table->unsignedBigInteger('month_1');
            $table->unsignedBigInteger('month_2');
            $table->unsignedBigInteger('month_3');
            $table->unsignedBigInteger('month_4');
            $table->unsignedBigInteger('month_5');
            $table->unsignedBigInteger('month_6');
            $table->unsignedBigInteger('month_7');
            $table->unsignedBigInteger('month_8');
            $table->unsignedBigInteger('month_9');
            $table->unsignedBigInteger('month_10');
            $table->unsignedBigInteger('month_11');
            $table->unsignedBigInteger('month_12');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('evaluates');
    }
}
