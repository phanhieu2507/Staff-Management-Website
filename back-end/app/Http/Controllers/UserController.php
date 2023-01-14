<?php

namespace App\Http\Controllers;

use App\Models\Evaluate;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use App\Models\Task;
use Exception;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function register_user(Request $req)
    {

        $user = new User;
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));
        $user->address = $req->input('address');
        $user->username = $req->input('username');
        $user->phonenumber = $req->input('phonenumber');
        $user->role_id = 2;
        $user->save();
        $evaluate = new Evaluate;
        $evaluate->user_id = $user->id;
        $evaluate->month_1 = 0;
        $evaluate->month_2 = 0;
        $evaluate->month_3 = 0;
        $evaluate->month_4 = 0;
        $evaluate->month_5 = 0;
        $evaluate->month_6 = 0;
        $evaluate->month_7 = 0;
        $evaluate->month_8 = 0;
        $evaluate->month_9 = 0;
        $evaluate->month_10 = 0;
        $evaluate->month_11 = 0;
        $evaluate->month_12 = 0;
        $evaluate->save();
        return $user;
    }
    function login(Request $req)
    {
        $user = User::with('role')->where('email', $req->email)->first();
        if (!$user || !Hash::check($req->password, $user->password)) {
            return response()->json([
                "status" => "fail",
                "message" => "Email or Password does not matched"
            ]);
        }
        // $role=Role::where('id',$user->role_id);
        return response()->json([
            "status" => "success",
            "message" => "Login success",
            "user" => $user,
            //        "role"=>$role->role_name,


        ]);;
    }
    function list()
    {
        $user = User::with('role')->get();
        return response()->json($user, 200);
    }
    function delete($id)
    {
        $result = User::where('id', $id)->delete();
        $result2 = Evaluate::where('user_id', $id)->delete();
        if ($result) {
            return ['result' => 'User has been deleted!'];
        } else return ['result' => 'Not found'];
    }
    function find($id)
    {
        $user = User::with('evaluate', 'role', 'task')->find($id);
        return response()->json($user, 200);
    }
    function update(Request $req, $id)
    {
        $user = User::find($id);
        $user->email = $req->input('email');
        $user->address = $req->input('address');
        $user->username = $req->input('username');
        $user->phonenumber = $req->input('phonenumber');
        $user->role_id = 2;
        $user->save();
        return $user;
    }
    function search($key)
    {
        return User::with('role')->where('username', 'Like', "%$key%")->orWhere('email', 'Like', "%$key%")
            ->orWhere('email', 'Like', "%$key%")->orWhere('address', 'Like', "%$key%")->get();
    }
    function updatePerformance(Request $req, $id)
    {
        $evaluate = Evaluate::find($id);
        $evaluate->month_1 = $req->month_1;
        $evaluate->month_2 = $req->month_2;
        $evaluate->month_3 = $req->month_3;
        $evaluate->month_4 = $req->month_4;
        $evaluate->month_5 = $req->month_5;
        $evaluate->month_6 = $req->month_6;
        $evaluate->month_7 = $req->month_7;
        $evaluate->month_8 = $req->month_8;
        $evaluate->month_9 = $req->month_9;
        $evaluate->month_10 = $req->month_10;
        $evaluate->month_11 = $req->month_11;
        $evaluate->month_12 = $req->month_12;
        $evaluate->save();
    }
}
