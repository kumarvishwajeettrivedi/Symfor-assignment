import { getPageBySlug, getAllPages } from '@/lib/api';
import { cleanContent } from '@/lib/cleaner';
import Sidebar from '@/components/Sidebar';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import Image from 'next/image';

export async function generateStaticParams() {
    const pages = await getAllPages();
    return pages.map((page) => ({
        slug: page.slug,
    }));
}

export async function generateMetadata(props) {
    const params = await props.params;
    const page = await getPageBySlug(params.slug);
    if (!page) return {};

    const title = page.title.rendered || 'Campusify Blog';
    const ogImage = page.yoast_head_json?.og_image?.[0]?.url;
    const descriptionText = page.yoast_head_json?.description ||
        page.excerpt?.rendered?.replace(/<[^>]*>/g, '').trim().substring(0, 155) ||
        'Read our latest insights on campus management and data-driven decisions.';

    return {
        title,
        description: descriptionText,
        keywords: 'campus management, data-driven decisions, education technology, Campusify',
        authors: [{ name: 'Campusify Team' }],
        robots: { index: true, follow: true },
        openGraph: {
            title,
            description: descriptionText,
            type: 'article',
            url: `https://campusify.io/${page.slug}`,
            images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
        },
        alternates: {
            canonical: `https://campusify.io/${page.slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: descriptionText,
            images: ogImage ? [ogImage] : [],
        },
    };
}

export default async function BlogPost(props) {
    const params = await props.params;
    const page = await getPageBySlug(params.slug);

    if (!page) {
        notFound();
    }

    const cleanedContent = cleanContent(page.content.rendered);

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content - Takes more space */}
                    <article className="flex-1 lg:w-[70%]">
                        <header className="mb-12">
                            {/* Blog Label */}
                            <div className="blog-label mb-4">
                                BLOG
                            </div>

                            {/* Title - Sans-serif like navbar */}
                            <h1
                                className="blog-title mb-6"
                                dangerouslySetInnerHTML={{ __html: page.title.rendered }}
                            />

                            {/* Metadata */}
                            <div className="blog-meta flex items-center gap-4 mb-12">
                                <span>{format(new Date(page.date), 'MMMM d, yyyy').toUpperCase()}</span>
                                <span>NISCHAL</span>
                                <span>NO COMMENTS YET</span>
                            </div>

                            {/* Featured Image */}
                            {page.yoast_head_json?.og_image?.[0]?.url && (
                                <div className="mb-10">
                                    <Image
                                        src={page.yoast_head_json.og_image[0].url}
                                        alt=""
                                        width={800}
                                        height={420}
                                        className="w-full h-auto rounded-lg"
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                                        quality={75}
                                    />
                                </div>
                            )}
                        </header>

                        {/* Content */}
                        <div
                            className="prose-content"
                            dangerouslySetInnerHTML={{ __html: cleanedContent }}
                        />

                        {/* Comment Form */}
                        <div className="mt-16 pt-12 border-t border-gray-200">
                            <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgb(34, 40, 30)' }}>Leave a Reply</h2>
                            <p className="text-sm mb-8" style={{ color: 'rgba(35, 41, 31, 0.8)' }}>Your email address will not be published. Required fields are marked <span className="text-red-500">*</span></p>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="comment" className="sr-only">Comment</label>
                                    <textarea
                                        id="comment"
                                        rows={6}
                                        placeholder="Comment*"
                                        className="w-full border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-[rgb(50,51,9)] transition-colors resize-y"
                                        style={{ fontSize: '15px' }}
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Name*"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(50,51,9)] transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Email*"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(50,51,9)] transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="website" className="sr-only">Website</label>
                                        <input
                                            id="website"
                                            type="url"
                                            placeholder="Website"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(50,51,9)] transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <input type="checkbox" id="save-info" className="mt-1 rounded border-gray-300" />
                                    <label htmlFor="save-info" className="text-sm" style={{ color: 'rgba(35, 41, 31, 0.8)' }}>Save my name, email, and website in this browser for the next time I comment.</label>
                                </div>
                                <button type="submit" className="px-6 py-3 bg-[rgb(50,51,9)] text-white font-semibold text-sm rounded-xl hover:bg-[rgb(40,41,7)] transition-colors">
                                    Post Comment
                                </button>
                            </form>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}
