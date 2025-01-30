import { Posts } from '@/interfaces/post.interface';
import Image from 'next/image';
import { FC } from 'react';

interface ICardBlog {
  post: Posts;
}

const CardBlog: FC<ICardBlog> = ({ post }) => {
  return (
    <article
      key={post.id}
      className="group flex max-w-xl cursor-pointer flex-col items-start justify-between rounded-lg border border-solid border-gray-300 p-5"
    >
      <div className="m-2 flex h-auto w-full items-center justify-center">
        <Image
          src={post.bannerImage}
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full object-contain"
        ></Image>
      </div>

      <div className="flex items-center gap-x-4 text-xs">
        <time
          dateTime={post.datetime}
          className="text-gray-500"
        >
          {post.date}
        </time>
        <a
          href={post.category.href}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 no-underline hover:bg-gray-100"
        >
          {post.category.title}
        </a>
      </div>
      <div className="relative">
        <h3 className="mt-3 text-lg/6 font-semibold">
          <a
            href={post.href}
            className="text-gray-900 no-underline group-hover:text-gray-600"
          >
            <span className="absolute inset-0" />
            {post.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
      </div>
    </article>
  );
};

export default CardBlog;
