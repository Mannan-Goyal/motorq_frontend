import React, { useState } from 'react';
import { addEvent } from '../../api/Request';
import "./styles.css";

function Add_Update() {
    const [title, setTitle] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [start, setStart] = React.useState(new Date())
    const [end, setEnd] = React.useState(new Date())
    const [registeredParticipants, setRegisteredParticipants] = React.useState(0)
    const [maxParticipants, setMaxParticipants] = React.useState(0)
    const [lat, setLat] = React.useState(0)
    const [long, setLong] = React.useState(0)
    return (
    <>
        <form>
          <input type="text" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)}></input>
          <input type="text" name="desc" placeholder="Desc" onChange={(e) => setDesc(e.target.value)}></input>
          <input type="date" name="start" placeholder="Start" onChange={(e) => setStart(e.target.value)}></input>
          <input type="date" name="end" placeholder="End" onChange={(e) => setEnd(e.target.value)}></input>
          <input type="number" name="regP" placeholder="registeredParticipants" onChange={(e) => setRegisteredParticipants(e.target.value)}></input>
          <input type="number" name="max" placeholder="maxParticipants" onChange={(e) => setMaxParticipants(e.target.value)}></input>
          <input type="number" name="lat" placeholder="lat" onChange={(e) => setLat(e.target.value)}></input>
          <input type="number" name="long" placeholder="long" onChange={(e) => setLong(e.target.value)}></input>
          <button
                            type="button"
                            class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                            onClick={() => { addEvent(title, desc, start, end, registeredParticipants, maxParticipants, lat, long) }}
                        >
                            Insert
                        </button>
        </form>

    </>
  );
}

export default Add_Update;
