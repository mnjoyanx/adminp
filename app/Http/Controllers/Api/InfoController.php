<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Info;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Info::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $v = Validator::make($request->all(), [
            'year' => ['required'],
            'completed' => ['required'],
            'constructions' => ['required'],
            'awards' => ['required'],
        ]);

        if($v->fails())
        {
            return response()->json(['errors' => $v->errors()], 422);
        }

        $info = new Info();
        $info->year = $request->year;
        $info->completed = $request->completed;
        $info->constructions = $request->constructions;
        $info->awards = $request->awards;
        $info->save();

        return response()->json(['messages' => 'info added']);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Info::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $v = Validator::make($request->all(), [
            'year' => ['required'],
            'completed' => ['required'],
            'constructions' => ['required'],
            'awards' => ['required'],
        ]);

        if($v->fails())
        {
            return response()->json(['errors' => $v->errors()], 422);
        }

        $info = Info::find($id);
        $info->year = $request->year;
        $info->completed = $request->completed;
        $info->constructions = $request->constructions;
        $info->awards = $request->awards;
        $info->save();

        return response()->json(['messages' => 'info edited']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Info::find($id)->delete();
    }
}
