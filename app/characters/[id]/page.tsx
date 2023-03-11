import PocketBase from 'pocketbase';

async function getCharacter(charId: string) {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const record = await pb.collection('character').getOne(charId);
    return record;
}

export default async function CharacterPage({ params }: any) {
    const char = await getCharacter(params.id);
    console.log(char);

    return (
        <div>
            <div>character/{char.id}</div>
            <div>{char.name}</div>
            <div>{char.description}</div>
            <div>{char.created}</div>
            <div>{char.updated}</div>
        </div>
    )
}