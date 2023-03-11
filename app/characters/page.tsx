import PocketBase from 'pocketbase';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getCharacters() {
    // using pocketbase sdk
    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.collection('character').getList(1, 30)
    // const data = await db.records.getList('characters');
    return data?.items as any[];

    // using fetch api
    // const res = await fetch('http://127.0.0.1:8090/api/collections/character/records?page=1&perPage=30',
    //     { cache: 'no-store' });
    // const data = await res.json();
    // return data?.items as any[];
}

// server component by default
export default async function TestCharacterPage() {
    const characters = await getCharacters();

    return (
        <div>
            <div>Cards</div>
            <div>{characters?.map((char) => {
                return <Card key={char.id} name={char.name} description={char.description} />;
            })}</div>
        </div>
    )
}

function Card({ ...character }: any) {
    const { id, name, description, created, updated } = character || {};
    return (
        <div className="p-10">
            <div>I AM A CARD</div>
            <div>{name}</div>
            <div>{description}</div>
        </div>
    )
}