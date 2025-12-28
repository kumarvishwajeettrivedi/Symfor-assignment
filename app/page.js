import Link from 'next/link';
import { getAllPages } from '@/lib/api';
import { extractText } from '@/lib/cleaner';
import { format } from 'date-fns';

export default async function Home() {
  const pages = await getAllPages();

  return (
    <div className="container-custom py-20 lg:py-24">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
          Insights & Updates
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Explore the latest strategies for data-driven campus management and educational excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {pages.map((page) => (
          <article key={page.id} className="group flex flex-col h-full bg-white">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-6 border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
              {page.yoast_head_json?.og_image?.[0]?.url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={page.yoast_head_json.og_image[0].url}
                  alt={page.title.rendered}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-50">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex flex-col flex-grow">
              <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                <span>{format(new Date(page.date), 'MMMM d, yyyy')}</span>
                <span className="mx-2">•</span>
                <span>Article</span>
              </div>

              <Link href={`/${page.slug}`} className="block mb-3">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors leading-tight line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
              </Link>

              <p className="text-gray-600 mb-6 flex-grow line-clamp-3 text-base leading-relaxed">
                {extractText(page.excerpt?.rendered || page.content.rendered, 140)}
              </p>

              <Link href={`/${page.slug}`} className="inline-flex items-center text-gray-900 font-semibold text-sm hover:underline decoration-2 underline-offset-4 decoration-current transition-all mt-auto self-start">
                Read Article
                <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
