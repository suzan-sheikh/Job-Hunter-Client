
const Blog = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
                <div className="container p-6 mx-auto space-y-8 px-4">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Blogs Section</h2>
                        <p className="font-serif text-sm text-gray-600">Where Curiosity Meets Code: Exploring the World of Programming.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">


                        <article className="flex flex-col bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXao6E8pPuqqwt7C_HMZwjCapJQhKvzBqfrg&usqp=CAU" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug uppercase">Access Tokens and Refresh Tokens</h3>
                                
                                
                                <p className="text-justify mb-4"><span className="text-secondary border-l-4 border-primary pl-2 uppercase">Access Tokens: </span> Store access tokens in memory on the client side. This allows for easy access and inclusion in API requests while minimizing exposure.</p>

                                <p className="text-justify mb-4"><span className="text-secondary border-l-4 border-primary pl-2 uppercase">Refresh Tokens:</span> Store refresh tokens securely using mechanisms such as HTTP-only cookies or browser storage with proper encryption. HTTP-only cookies prevent client-side JavaScript from accessing the token, mitigating risks associated with XSS attacks.</p>

                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                    <span>May 10, 2024</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>


                        <article className="flex flex-col bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://media-cdn.openxcell.com/wp-content/uploads/2024/03/29174300/Next-JS-Vs-Express_-An-In-depth.webp" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug uppercase">Access Tokens and Refresh Tokens</h3>
                                
                                
                                <p className="text-justify mb-4"><span className="text-secondary border-l-4 border-primary pl-2 uppercase"> express js: </span> is a fast, unopinionated, minimalist web framework for Node.js. It is designed for building web applications and APIs. Express.js provides a robust set of features for web and mobile applications. It is the de facto standard server framework for Node.js.</p>

                                <p className="text-justify mb-4"><span className="text-secondary border-l-4 border-primary pl-2 uppercase">Next js: </span> is a popular React framework that enables server-side rendering (SSR), static site generation (SSG), and other advanced features for React applications.</p>

                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                    <span>May 09, 2024</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>


                        <article className="flex flex-col bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiz9bmgvj7MLGKx6OLUbMzLhBzhRtx-2cpg&usqp=CAU" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug uppercase"> Explain MY code </h3>
                                
                                
                                <p className="text-justify mb-4"><span className="text-secondary border-l-4 border-primary pl-2 uppercase"> My Code: </span> Hi, i am Md Suan Sheikh code is my dreme 11 years </p>

                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                    <span>May 11, 2024</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;