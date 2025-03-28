import Counter from "../components/counter";

type Params = Promise<{ slug: string }>

export default async function Dashdynamic({params} : {params: Params}){
    const {slug} = await params;

    return (
        <div>
            <h1>Hello from dynamic dash: {slug}</h1>
            <Counter/>
        </div>
    

)
}