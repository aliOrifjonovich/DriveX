import { LeftRowIcon } from '@/Icons/NotificationIcon';
import { posts } from '@/data/StaticDatas';
import { Posts } from '@/interfaces/post.interface';
import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import CardBlog from '../CardBlog/CardBlog';

interface IBlogsProps {
  numbersofposts?: number;
}

const Blogs: FC<IBlogsProps> = ({ numbersofposts }) => {
  const t = useTranslations('HomePage');
  const displayedPosts = numbersofposts ? posts.slice(0, numbersofposts) : posts;

  return (
    <div className="rounded-lg bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {t('our_blogs')}
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">{t('our_blogs_text')}</p>
          </div>
          <Button
            variant="text"
            size="small"
            sx={{
              textTransform: 'none',
              color: '#1d4ed8',
              fontSize: '16px',
              fontWeight: '600',
              fontStyle: 'sans-serif',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              width: 'max-content',
            }}
          >
            {t('view_all')}
            <LeftRowIcon />
          </Button>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {displayedPosts.map((post: Posts) => (
            <CardBlog
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
