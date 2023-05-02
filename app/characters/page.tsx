import Link from 'next/link';
import PocketBase from 'pocketbase';
import CreateCharacter from './CreateCharacter';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getCharacters() {
    // using pocketbase sdk
    const pb = new PocketBase('http://127.0.0.1:8090');
    const data = await pb.collection('character').getList(1, 30)
    // const data = await pb.records.getList('characters');
    return data?.items as any[];
}

// server component by default
export default async function TestCharacterPage() {
    const characters = await getCharacters();

    return (
        <div>
            <div>Cards</div>
            <div>{characters?.map((char) => {
                return <Card key={char.id} name={char.name} description={char.description} props={char} />;
            })}</div>
            <CreateCharacter />
        </div>
    )
}

function Card({ props, ...character }: any) {
    const { id, name, description, created, updated } = character || {};
    return (
        <Link href={`/characters/${props.id}`}>
            <div className="p-10">
                <div>I AM A CARD</div>
                <div>{name}</div>
                <div>{description}</div>
                <div className='text-xs'>{id}</div>
            </div>
        </Link>
    )
}