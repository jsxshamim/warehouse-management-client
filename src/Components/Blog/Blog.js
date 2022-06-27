import React from "react";

const Blog = () => {
    return (
        <section className="container mx-auto pt-24">
            <h1 className="text-4xl mb-5">Difference Between Javascript and Node.Js</h1>
            <div className="blog mb-5">
                <div className="leading-relaxed">
                    <p className="mb-3">
                        JavaScript is a scripting language that can only be run in the browser. The role of JavaScript in making HTML web pages dynamic is immense. Since JavaScript runs in browsers, its biggest advantage is that it can be used on all
                        types of operating systems.
                    </p>
                    <p className="mb-3">
                        JavaScript is a complete client-side language, meaning that when a user runs JavaScript on a web page, it will only be executed in that browser. JavaScript has no direct connection to the server, data will be lost as soon as
                        the page is reloaded.
                    </p>
                    <p className="mb-3">
                        And node js is solving this problem. Node JS is used for server site development. It can also be called Runtime of JavaScript. We can write all the code of JavaScript in Node Js but we cannot work with DOM in Node Js. node js
                        has multiple functions besides JavaScript functions. Node js file read, write, update and delete work can be done very easily.
                    </p>
                </div>
            </div>

            <div className="blog mb-5">
                <h1 className="text-4xl mb-5">Differences Between sql and nosql database.</h1>
                <div className="leading-relaxed">
                    <p className="mb-3">
                        A relational database is a set of tables containing predefined sections of data. Each table column contains one or more data categories. Each row contains a unique example for the class determined by the column. The user can
                        access the data from the database The structure of the database table. The data from the SQL Server somehow fit into the table. If your data does not fit into the table, then you need to design your database structure will be
                        complicated and difficult to deal with again.
                    </p>
                    <p className="mb-3">NoSQL databases are often faster because their data models are simpler.</p>
                    <p className="mb-3">SQL systems are flexible in the main nozzle to enable developers to use applications in a way that meets their needs.</p>
                    <p className="mb-3">A key-value storage system that lists savings by keys for recovery. These systems may contain structured or unprotected information.</p>
                </div>
            </div>

            <div className="blog mb-5">
                <h1 className="text-4xl mb-5">When should you use node.js and when should you use mongoDB</h1>
                <div className="leading-relaxed">
                    <p className="mb-3">
                        MongoDB is a NoSQL database which I've found quite easy to use. If you can represent your data in a form of a bunch of documents, MongoDB could be a good choice. If you would rather imagine your data as a bunch of
                        interconnected tables, MongoDB may not be a good choice. MongoDB is more suited in scenarios that call for reading/writing a lot of data, without much emphasis on transaction safety
                    </p>
                    <p className="mb-3">Node.js has significantly extended the use-cases of JavaScript. Node.js Suitable for Real-time applications, online gaming apps, Video Conferencing apps, E-commerce transaction software. </p>
                    <p className="mb-3">
                        Like single-page websites, Node.js can build a single-page app, where the look and feel are similar to a desktop application. the asynchronous data flow quality on the backend in Node.js makes it the best bet for SPA
                        development.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blog;
