'use client';

import PocketBase from 'pocketbase';
import { useState } from 'react';

// first time creation of character to push to database, will need to work on form-less version for updates
export default function CreateCharacter() {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const create = async (data) => {
        console.log(data);
        try {
            const record = await pb.collection('character').create(JSON.stringify(data));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={create}>
            <h2>Create new character</h2>
            <input
                type='text'
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <textarea
                placeholder='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            <button type='submit'>Create character</button>
        </form>
    )
}