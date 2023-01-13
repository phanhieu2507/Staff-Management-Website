<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Exception;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    //
    function getNoti($id) 
    {
        
        try {
            $noti = Notification::where('user_id',$id)->get();
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Create Notification successfully',
                    'noti' => $noti,
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
