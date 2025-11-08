import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select, Container } from "..";
import appwriteService from "../../appwrite/configure";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post = {} }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    // const submit = async (data) => {
    //     try {
    //         if (post) {
    //             // Update post
    //             const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

    //             if (file) {
    //                 await appwriteService.deleteFile(post.featuredImage);
    //             }

    //             const dbPost = await appwriteService.updatePost(post.$id, {
    //                 ...data,
    //                 featuredImage: file ? file.$id : post.featuredImage,
    //             });

    //             if (dbPost) {
    //                 navigate(`/post/${dbPost.$id}`);
    //             }
    //         } else {
    //             // Create new post
    //             const file = await appwriteService.uploadFile(data.image[0]);

    //             if (file) {
    //                 const dbPost = await appwriteService.createPost({
    //                     ...data,
    //                     featuredImage: file.$id,
    //                     userId: userData.$id,
    //                 });

    //                 if (dbPost) {
    //                     navigate(`/post/${dbPost.$id}`);
    //                 }
    //             }
    //         }
    //     } catch (error) {
    //         console.error("Error submitting post:", error);
    //         // Display error message to the user
    //     }
    // };

    const submit = async (data) => {
    try {
        if (post?.$id) {
            // Validate post.$id
            if (!post.$id) {
                throw new Error("Document ID is missing");
            }

            // Upload new image if provided
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            // Delete old image if a new one is uploaded and old exists
            if (file && post.featuredImage) {
                await appwriteService.deleteFile(post.featuredImage);
            }

            // Update post
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : post.featuredImage,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            // Create new post
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const dbPost = await appwriteService.createPost({
                    ...data,
                    featuredImage: file.$id,
                    userId: userData.$id,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    } catch (error) {
        console.error("Error submitting post:", error);
        // Optionally show an error message to the user
    }
};


    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post.featuredImage && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
