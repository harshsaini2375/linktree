import clientPromise from "@/lib/mongodb";


export async function POST(request) {

    // establishing connections
    const client = await clientPromise;
    const db = client.db("linktree")
    const collection = db.collection("links")

    const body = await request.json()

    // adding new links to already existed user
    const exist = await collection.findOne({ handle: body.handle })
    if (exist) {
        const prevlinks = exist.links
        const newarr = body.links.concat(prevlinks)

        await collection.deleteOne({ handle: body.handle })

        await collection.insertOne({
            handle: body.handle,
            picture: body.picture,
            links: newarr,
        })

        return Response.json({ message: 'new links inserted', Error: false })
    }

    const inserteddata = await collection.insertOne({
        handle: body.handle,
        picture: body.picture,
        links: body.links,
    })
    console.log(inserteddata);

    return Response.json({ message: 'inserted', Error: false })
}