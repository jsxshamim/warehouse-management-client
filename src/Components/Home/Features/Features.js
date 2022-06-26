import React from "react";
import "./Features.css";

const Features = () => {
    return (
        <section className="container mx-auto py-20 bg-gray-50">
            <div className="section-top text-center pb-20">
                <h1 className="text-4xl font-bold text-title section-title mb-5">Our Features</h1>
                <p>Give us a try. There's nothing to install. No training manuals needed. No commitments.</p>
            </div>

            <div className="features grid grid-cols-3 gap-10">
                <div className="feature p-6 rounded-lg shadow-lg transition">
                    <div className="flex items-center gap-3 mb-2">
                        <img className="w-12" src="https://www.salesbinder.com/static/ffb9df8389725c42b964be363cd9c36f/e64f1/inventory.webp" alt="" />
                        <h3 className="text-xl font-bold">Inventory Management</h3>
                    </div>
                    <p className="text-lg">Manage your inventory and check stock levels in real-time. Receive low inventory notifications and generate purchase orders to replenish your stock.</p>
                </div>
                <div className="feature p-6 rounded-lg shadow-lg transition">
                    <div className="flex items-center gap-3 mb-2">
                        <img className="w-12" src="https://www.salesbinder.com/static/2f12e0c94036a8a0c6a67fde4eb97ded/e64f1/variations.webp" alt="" />

                        <h3 className="text-xl font-bold">Item Variations</h3>
                    </div>
                    <p className="text-lg">Organize inventory items using custom attributes such as size, color, and location. View how many you have globally or at each location.</p>
                </div>
                <div className="feature p-6 rounded-lg shadow-lg transition">
                    <div className="flex items-center gap-3 mb-2">
                        <img className="w-12" src="https://www.salesbinder.com/static/60710c3ba7a12ed8989a62f68c8d162c/e64f1/accounts.webp" alt="" />
                        <h3 className="text-xl font-bold">Customer Accounts</h3>
                    </div>
                    <p className="text-lg">With built-in CRM features you can keep track of all your customer accounts with ease. Add multiple contacts, private notes, and review their purchase history.</p>
                </div>
                <div className="feature p-6 rounded-lg shadow-lg transition">
                    <div className="flex items-center gap-3 mb-2">
                        <img className="w-12" src="https://www.salesbinder.com/static/ccce4a4e3710862438c8c78beef8bcf3/e64f1/purchase_order.webp" alt="" />
                        <h3 className="text-xl font-bold">Purchase Orders</h3>
                    </div>
                    <p className="text-lg">With integrated purchase orders, you can easily replenish your inventory levels by ordering more stock and even track when those new items will arrive.</p>
                </div>
                <div className="feature p-6 rounded-lg shadow-lg transition">
                    <div className="flex items-center gap-3 mb-2">
                        <img className="w-12" src="https://www.salesbinder.com/static/f767e1a1bbbfe210b305a93560418cb2/e64f1/reports.webp" alt="" />
                        <h3 className="text-xl font-bold">Financial Reports</h3>
                    </div>
                    <p className="text-lg">Generate extremely detailed reports for your inventory, sales and services. Filter your reports by date-range and category to see what's making you the most money.</p>
                </div>
                <div className="feature p-6 rounded-lg shadow-lg transition">
                    <div className="flex items-center gap-3 mb-2">
                        <img className="w-12" src="https://www.salesbinder.com/static/ccbe53b4ed87cda855c0b37d4effc8c2/e64f1/permissions.webp" alt="" />
                        <h3 className="text-xl font-bold">User Permissions</h3>
                    </div>
                    <p className="text-lg">Custom user permissions allows you to toggle what each of your team members can see and do. Hide things, make things read-only, or hide everyone else's stuff.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
