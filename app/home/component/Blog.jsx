import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ViewAllButton from "@/app/shared/ViewAllButton";


const Blog = () => {
    const blogPosts = [
        {
            id: "1",
            title: "Top tips for effective home tutoring",
            description: "These practical advice on how students can make the most out of tutoring sessions.",
            imageUrl: "/blog1.svg",
            slug: "effective-home-tutoring",
        },
        {
            id: "2",
            title: "Building a productive study environment",
            description: "Share practical advice on how students can create the ideal setting for learning success.",
            imageUrl: "/blog2.svg",
            slug: "productive-study-environment",
        },
        {
            id: "3",
            title: "5 skills every great tutor should have",
            description: "Outline essential skills for tutors, such as patience, adaptability, subject knowledge.",
            imageUrl: "/blog1.svg",
            slug: "tutor-essential-skills",
        },
        {
            id: "4",
            title: "Setting the best individual tutition",
            description: "Share practical advice on how students can make the most out of tutoring sessions.",
            imageUrl: "/blog2.svg",
            slug: "best-individual-tutition",
        },
    ];


    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="md:text-[42px] text-[30px] font-[400] text-[#655945]">Latest from <span className="font-[600]">Our Blog</span></h2>
                    <ViewAllButton />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg  overflow-hidden">
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{post.title}</h3>
                                <p className="text-gray-600 text-sm mt-2">{post.description}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
