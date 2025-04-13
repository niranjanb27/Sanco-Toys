import easyinvoice from "easyinvoice";
import fs from "fs/promises";
import Product from "../model/product.model.js";  
import User from "../model/user.model.js"
const generateInvoice = async (order) => {

    const user=await User.findById(order.user);
    // Fetch detailed product info
    const detailedProducts = await Promise.all(
        order.products.map(async (item) => {
            const product = await Product.findById(item.product);
            return {
                quantity: item.quantity,
                description: product?.name || "Unknown Product",
                price: product?.price || 0
            };
        })
    );

    const data = {
        documentTitle: "Invoice",
        currency: "INR",
        sender: {
            company: "Sanco Toys",
            address: "A 106 & 107,H Block,MIDC Pimpri",
            zip: "411018",
            city: "Pune",
            country: "India"
        },
        client: {
            // company: order.user.name,
            // address: order.shippingAddress.street + ", " + order.shippingAddress.city + ", " + order.shippingAddress.zip,
            // zip: order.shippingAddress.zip,
            // city: order.shippingAddress.city,
            // country: order.shippingAddress.country

            company: user.name,
            address:order.shippingAddress,
            country:"India"
        },
        invoiceNumber: order._id.toString(),
        invoiceDate: new Date().toISOString().split("T")[0],
        products: detailedProducts,
        total: order.totalAmount
    };

    const result = await easyinvoice.createInvoice(data);
    const invoicePath = `invoices/invoice_${order._id}.pdf`;
    await fs.writeFile(invoicePath, result.pdf, "base64");

    return invoicePath;
};
export {generateInvoice};