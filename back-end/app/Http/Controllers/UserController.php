<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    function register(Request $req)
    {
          $user = new User;
          $user->email=$req->input('email');
          $user->password=$req->input('password');
          $user->address=$req->input('address');
          $user->username=$req->input('username');
          $user->phonenumber=$req->input('phonenumber');
          $user->save();
          return $user;
    }
}
