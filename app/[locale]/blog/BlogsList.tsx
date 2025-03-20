/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Heart,
  MessageSquare,
  Search,
} from "lucide-react";
import { DevToPost } from "./types";

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  author: string;
  authorImage: string;
  likes: number;
  comments: number;
  link: string;
};

export default function BlogsList({ posts }: { posts: DevToPost[] }) {
  const mappedBlogs: BlogPost[] = posts.map((post) => ({
    title: post.title,
    author: post.user.username,
    authorImage: post.user.profile_image,
    image: post.cover_image,
    excerpt: post.description,
    tags: post.tag_list,
    likes: post.positive_reactions_count,
    comments: post.comments_count,
    link: post.url,
  }));

  return (
    <div>
      <div className="container max-w-screen-xl mx-auto">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex items-center justify-between my-4">
            <h2 className="text-4xl font-bold tracking-tight text-primary-foreground">
              Latest Articles
            </h2>
            {/* <TabsList className="glass-paper">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList> */}
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mappedBlogs.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all hover:shadow-md  glass-paper"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="space-y-2">
                      <div className="flex gap-2 flex-wrap-wrap">
                        {post.tags.map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="px-2 py-0.5 text-xs"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="line-clamp-2 text-xl font-bold dark:text-slate-100 ">
                        <a
                          className="hover:text-primary transition-all duration-300"
                          href={post.link}
                          target="_blank"
                        >
                          {post.title}
                        </a>
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between p-4 pt-0">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={post.authorImage} alt={post.author} />
                        <AvatarFallback>
                          {post.author.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3.5 w-3.5" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
