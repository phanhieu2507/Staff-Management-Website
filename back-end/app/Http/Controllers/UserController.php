<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
class UserController extends Controller
{
    function register_user(Request $req)
    {     
         
          $user = new User;
          $user->email=$req->input('email');
          $user->password=$req->input('password');
          $user->address=$req->input('address');
          $user->username=$req->input('username');
          $user->phonenumber=$req->input('phonenumber');
          $user->role_id=2;
          $user->save();
          return $user;
    }
    function login(Request $req)
    {
        $user= User::with('role')->where('email',$req->email)->first();
         if(!$user||$req->password!=$user->password)
         {
             return response()->json([
                 "status" =>"fail",
                 "message" => "Email or Password does not matched"
             ]);
         }
      // $role=Role::where('id',$user->role_id);
        return response()->json([
            "status" =>"success",
            "message" => "Login success",
            "user"=>$user,
    //        "role"=>$role->role_name,

            
        ]);;
    }
    function list()
    {
        $user=User::with('role')->get();
        return response()->json($user, 200);
    }
    function delete($id)
    {
        $result=User::where('id',$id)->delete();
        if($result)
        {
            return ['result'=>'User has been deleted!'];

        }
        else return ['result'=>'Not found'];
    }
    function find($id)
    {
        $user= User::with('role')->find($id);
        return response()->json($user, 200);
    }
    function update(Request $req,$id)
{
    $user = User::find($id);
    $user->email=$req->input('email');
    $user->password=$req->input('password');
    $user->address=$req->input('address');
    $user->username=$req->input('username');
    $user->phonenumber=$req->input('phonenumber');
    $user->role_id=2;
    $user->save();
    return $user;
}
 function search($key)
 {
    return User::with('role')->where('username','Like',"%$key%")->orWhere('email','Like',"%$key%")
    ->orWhere('email','Like',"%$key%")->orWhere('address','Like',"%$key%")->get();
 }
}
