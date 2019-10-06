<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contacts;

class ContactsController extends Controller
{
     public function getList()
        {
            return Contacts::all();
        }

        public function Add(Request $request)
        {
            $contact = Contacts::create($request->all());

            return response()->json($contact, 201);
        }

        public function Edit(Request $request, Contacts $contact)
        {
            $contact->update($request->all());

            return response()->json($contact, 200);
        }

        public function Delete(Contacts $contact)
        {
            $contact->delete();

            return response()->json(null, 204);
        }
}
