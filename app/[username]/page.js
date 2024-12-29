import Linkspage from "../components/Linkspage"

export default async function Page({ params }) {
    const username = (await params).username
    return <div>
        <Linkspage username={username}/>
    </div>
  }