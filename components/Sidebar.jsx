import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="w-full lg:w-[280px] lg:flex-shrink-0 lg:sticky lg:top-24 lg:self-start flex flex-col gap-10">
            {/* Search Widget */}
            <div>
                <h3 className="sidebar-title mb-4">Search</h3>
                <div className="flex flex-col gap-3">
                    <input
                        type="search"
                        aria-label="Search"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[rgb(50,51,9)] transition-colors bg-white"
                        style={{ fontSize: '15px' }}
                    />
                    <button className="self-start px-6 py-2.5 bg-[rgb(50,51,9)] text-white text-sm font-semibold rounded-xl hover:bg-[rgb(40,41,7)] transition-colors">
                        Search
                    </button>
                </div>
            </div>

            {/* Recent Posts */}
            <div>
                <h3 className="sidebar-title mb-4">Recent Posts</h3>
                <ul className="space-y-3">
                    {[
                        "Campusify vs. Traditional Management Systems: Why It's the Better Choice",
                        "The Future of Campus Management: How Campusify Stays Ahead",
                        "Automate and Streamline Daily Tasks with Campusify",
                        "Personalized Learning Experiences with Campusify",
                        "Why Security Matters in Campus Management: Campusify's Approach"
                    ].map((title, i) => (
                        <li key={i}>
                            <Link href="#" className="sidebar-link hover:text-[rgb(50,51,9)] transition-colors block">
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Comments */}
            <div>
                <h3 className="sidebar-title mb-4">Recent Comments</h3>
                <p className="text-sm italic" style={{ color: 'rgba(35, 41, 31, 0.8)' }}>No comments to show.</p>
            </div>

            {/* Archives */}
            <div>
                <h3 className="sidebar-title mb-4">Archives</h3>
                <ul className="space-y-2">
                    {['July 2024', 'June 2024', 'May 2024'].map((month) => (
                        <li key={month}>
                            <Link href="#" className="sidebar-link hover:text-[rgb(50,51,9)] transition-colors">
                                {month}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Categories */}
            <div>
                <h3 className="sidebar-title mb-4">Categories</h3>
                <ul className="space-y-2">
                    {['Blog', 'Faculty', 'Management', 'Students'].map((cat) => (
                        <li key={cat}>
                            <Link href="#" className="sidebar-link hover:text-[rgb(50,51,9)] transition-colors">
                                {cat}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
