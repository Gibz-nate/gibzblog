"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { HandleSubmission } from "@/app/actions"

export default function CreateBlog(){


    return (
        <div>
            <Card className="max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>
                        Create Post
                    </CardTitle>
                    <CardDescription>
                        Share Your Knowledge With the World
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4" action={HandleSubmission} >
                        <div className="flex flex-col gap-2">
                            <Label>
                                Title
                            </Label>
                            <Input name="title" required type="text" placeholder="Title"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>
                                Content
                            </Label>
                            <Textarea name="content" required placeholder="Content"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>
                                Image URL
                            </Label>
                            <Input name="url" required type="url" placeholder="Image url"/>
                        </div>

                        <Button>Publish Post</Button>
                    </form>
                </CardContent>
            </Card>
            
        </div>
    )
}