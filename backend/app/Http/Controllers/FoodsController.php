<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Food;
use Illuminate\Http\Resources\Json\ResourceResponse;
use Illuminate\Support\Facades\Validator;

class FoodsController extends Controller
{


    //   Show the products in table
    public function index()
    {
        $foods = Food::all();
        $shufproduct = Food::latest()->get()->take(10);
        return response()->json(['fire' => $foods,'latest'=>$shufproduct], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [

            "name" => "required|string",
            "categories" => "required",
            "shortdesc" => "required|string|max:60",
            "about" => "required|string",
            "price" => "required|numeric",
            "prodimage" => "required|mimes:jpg,jpeg,gif,png,webp"
        ]);


        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }


        $prodImage = time() . "." . $request->prodimage->extension();
        $request->prodimage->move(public_path("products"), $prodImage);

        $foods = new Food();
        $foods->name = $request->name;
        $foods->categories = $request->categories;
        $foods->shortdesc = $request->shortdesc;
        $foods->about = $request->about;
        $foods->price = $request->price;
        $foods->prodimage = $prodImage;
        $foods->save();
        return response()->json(['message' => 'Product Created Successfully'], 200);
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $foods = Food::find($id);
        return response()->json(['fire' => $foods], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $foods = Food::find($id);

        $validator = Validator::make($request->all(), [

            "name" => "required|string",
            "categories" => "required",
            "shortdesc" => "required|string|max:60",
            "about" => "required|string",
            "price" => "required|numeric",
            "prodimage" => "required|mimes:jpg,jpeg,gif,png,webp"
        ]);


        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $prodImage = time() . "." . $request->file('prodimage')->extension();
        $request->file('prodimage')->move(public_path("products"), $prodImage);

        $foods->name = $request->name;
        $foods->categories = $request->categories;
        $foods->shortdesc = $request->shortdesc;
        $foods->about = $request->about;
        $foods->price = $request->price;
        $foods->prodimage = $prodImage;
        $foods->save();

        return response()->json(['message' => 'Product Updated Successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $foods = Food::find($id);
        $foods->delete();
        return response()->json(['message' => 'Product Deleted Successfully'], 200);
    }

    // ===== about Function =========//
    public function about($id)
    {
        $about = Food::find($id);
        return response()->json(['aboutfire' => $about]);
    }


    // ===== Shuffle Function =========//
    public function shuffle()
    {
        $foods = Food::all()->shuffle();
        return response()->json(['lol' => $foods], 200);
    }
}
