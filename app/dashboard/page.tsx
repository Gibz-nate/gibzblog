import { buttonVariants } from "@/components/ui/button"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import Link from "next/link"
import { prisma } from "../utils/db"
import { Blogpost } from "@/components/nav/blogpostcard";
import { redirect } from "next/navigation";

async function getData( userId: string){
    const data = await prisma.blogPost.findMany({
        where: {
            authorId: userId,
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    return data;
}

export default async function Dashboard(){
    const {getUser} = getKindeServerSession()
    const user = await getUser();

    if (!user) {
        redirect('/auth/login');  // or wherever your login page is
    }

    const data = await getData(user.id)

    interface BlogPost {
        id: string;
        title: string;
        content: string;
        imageUrl: string;
        authorId: string;
        authorName: string;
        authorImage: string;
        createdAt: Date;
        updatedAt: Date;
    }

    return (
        <div >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Your Blog Articles</h2>

                <Link className={buttonVariants()} href="/dashboard/create">Create Post</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item: BlogPost) => (
                    <Blogpost data={item} key={item.id}/>
                ))}

            </div>
        </div>
    )
}