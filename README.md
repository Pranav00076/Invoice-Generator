Simple Invoice Generator by Pranav, Ujjwal, Mustafa.

A lightweight, browser-based tool to generate and print professional invoices. Built entirely with vanilla HTML, CSS, and JavaScript, featuring a real-time split-screen preview.

Features

Real-Time Preview: Split-screen interface allows you to edit details on the left and see the changes instantly on the right.

Dynamic Calculations: Automatically calculates line totals and grand totals as you type.

Item Management: Add or remove line items dynamically.

Print Optimization: Dedicated @media print CSS ensures only the invoice paper is printed (hiding the editor interface and buttons).

Zero Dependencies: No frameworks or libraries required. Runs offline in any modern browser.

Quick Start

Download: Clone this repository or simply download the index.html file.

Run: Open the file in your web browser (Chrome, Firefox, Safari, etc.).

Create: Fill in the invoice details in the left-hand editor.

Export: Click the Print / Save PDF button to print a physical copy or save it as a PDF.

How It Works

The project is contained within a single HTML file for maximum portability.

HTML: Structurally divided into a .container with an .editor pane and a .preview-container pane.

CSS: Uses Flexbox for the layout and specific print styles to ensure the printed output looks like a professional document on A4/Letter paper.

JavaScript: Handles DOM manipulation to sync inputs from the editor to the preview pane and calculates math logic for prices and totals.

Usage Guide

Header Info: Customize the Invoice Title, Number, and Date.

Contact Details: Enter "From" (Your Company) and "Bill To" (Client) information.

Line Items: - Enter Description, Quantity, and Price.

Click + Add Item to add more rows.

Click the red X to delete a row.

Printing:

When you click "Print", the browser's print dialog opens.

To save as a file, change the Destination in the print dialog to "Save as PDF".

Customization

You can modify the styles in the <style> block within the HTML file:

Change .invoice-paper max-width to adjust paper size.

Modify .preview-container background color to change the app workspace look.

Update @media print rules to adjust margins for specific printers.
