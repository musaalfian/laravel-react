<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
   /**
    * Show all users page.
    */
   public function index()
   {
      $users = User::all();

      return Inertia::render('user/index');
   }

   /**
    * Show the create user page.
    */
   public function create()
   {
      return Inertia::render('user/create');
   }
}
