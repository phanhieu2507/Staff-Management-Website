<?php

namespace App\Http\Controllers;


use App\Models\Notification;
use App\Models\User;
use App\Models\Role;
use App\Models\Task;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    function createTask(Request $req)
    {
        try {
            $user = User::where('username', $req->assignee)->first();
            $task = new Task;
            $task->user_id = $user->id;
            $task->status = "0";
            $task->title = $req->title;
            $task->description = $req->description;
            $task->start_date = $req->start_date;
            $task->save();
            $noti = new Notification;
            $noti -> user_id = $task -> user_id;
            $noti -> task_id = $task->id;
            $noti -> description = $req->admin ." "."assigned you to task:". $req->title;
            $noti -> read = '0';
            $noti ->save();
           
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Create Task successfully'

                ],
                200
            );
        } catch (Exception $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage(),
            ]);
        }
    }
    function deleteTask($id){
        try {
            Task::where('id',$id)->delete();
            Notification::where('task_id',$id) -> delete();
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Delete Task successfully'

                ],
                200
            );
        } catch (Exception $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage(),
            ]);
        }
    }
    function editTask(Request $req){
        try {
            $task = Task::find($req->id);
            $task->status = $req ->status;
            $task->title = $req ->title;
            $task->description = $req ->description;
            if($req ->status === '1') {
                $date = Carbon::now() -> format('Y-m-d');
                $task->due_date =  $date;
            }
            $task ->save();
            $noti = new Notification;
            $noti -> user_id = $task -> user_id;
            $noti -> task_id = $task -> id;
            $noti -> description = $req->admin ." editted your task";
            $noti -> read = '0';
            $noti ->save();
           
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Edit Task successfully'

                ],
                200
            );
        } catch (Exception $error) {
            return response()->json([
                'success' => false,
                'message' => $error->getMessage(),
            ]);
        }
    }
}
