import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { format } from 'date-fns';

export function generateInvoicePDF(order: any) {
  // Create a new PDF document (A4 portrait)
  const doc = new jsPDF();
  
  const companyName = "FLAIRVIGO";
  const companyEmail = "support@flairvigo.com";
  const companyWebsite = "www.flairvigo.com";

  // Header Background
  doc.setFillColor(42, 42, 42); // #2a2a2a (ink-deep)
  doc.rect(0, 0, 210, 40, 'F');
  
  // Header Text
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(companyName, 14, 25);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text("INVOICE / RECEIPT", 160, 25);
  
  // Reset Text Color
  doc.setTextColor(0, 0, 0);
  
  // Order Info Section
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text("Order Information", 14, 55);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  // Try to use createdAt, fallback to current date if missing
  const orderDate = order.createdAt ? format(new Date(order.createdAt), 'MMM dd, yyyy') : format(new Date(), 'MMM dd, yyyy');
  const orderId = order.id ? order.id.slice(0, 8).toUpperCase() : 'N/A';
  
  doc.text(`Order ID: #${orderId}`, 14, 63);
  doc.text(`Date: ${orderDate}`, 14, 69);
  doc.text(`Status: ${(order.status || 'Paid').toUpperCase()}`, 14, 75);

  // Customer Info Section
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text("Billed To", 120, 55);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`${order.shippingAddress?.firstName || order.user?.firstName || ''} ${order.shippingAddress?.lastName || order.user?.lastName || ''}`, 120, 63);
  doc.text(`${order.shippingAddress?.email || order.user?.email || 'N/A'}`, 120, 69);
  doc.text(`${order.shippingAddress?.city || ''}, ${order.shippingAddress?.country || ''}`, 120, 75);

  // Items Table
  const tableColumn = ["Item", "Variant", "Quantity", "Price", "Total"];
  const tableRows: any[] = [];

  let subtotal = 0;
  
  if (order.items && Array.isArray(order.items)) {
    order.items.forEach((item: any) => {
      const productName = item.product?.name || item.name || "Unknown Product";
      const variantDesc = item.variant?.size ? `${item.variant.color || ''} / ${item.variant.size}` : "N/A";
      const qty = item.quantity || 1;
      const price = item.price || 0;
      const total = qty * price;
      
      subtotal += total;

      tableRows.push([
        productName,
        variantDesc,
        qty.toString(),
        `N${price.toLocaleString()}`,
        `N${total.toLocaleString()}`
      ]);
    });
  }

  // Use autoTable directly
  autoTable(doc, {
    startY: 90,
    head: [tableColumn],
    body: tableRows,
    theme: 'grid',
    headStyles: { fillColor: [42, 42, 42], textColor: 255 },
    styles: { fontSize: 10, cellPadding: 5 },
    columnStyles: {
      0: { cellWidth: 70 },
      1: { cellWidth: 40 },
      2: { cellWidth: 20, halign: 'center' },
      3: { cellWidth: 30, halign: 'right' },
      4: { cellWidth: 30, halign: 'right' },
    }
  });

  const finalY = (doc as any).lastAutoTable?.finalY || 90;

  // Totals Section
  const shipping = order.shippingCost || 0;
  const tax = order.taxAmount || 0;
  const grandTotal = order.totalAmount || (subtotal + shipping + tax);

  doc.setFont('helvetica', 'normal');
  doc.text("Subtotal:", 140, finalY + 15);
  doc.text(`N${subtotal.toLocaleString()}`, 190, finalY + 15, { align: 'right' });
  
  doc.text("Shipping:", 140, finalY + 22);
  doc.text(`N${shipping.toLocaleString()}`, 190, finalY + 22, { align: 'right' });
  
  doc.text("Tax:", 140, finalY + 29);
  doc.text(`N${tax.toLocaleString()}`, 190, finalY + 29, { align: 'right' });

  doc.setFont('helvetica', 'bold');
  doc.text("Total:", 140, finalY + 39);
  doc.text(`N${grandTotal.toLocaleString()}`, 190, finalY + 39, { align: 'right' });

  // Footer
  const pageHeight = doc.internal.pageSize.height;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(150);
  doc.text("Thank you for choosing FlairVigo. Modesty in Every Stitch.", 105, pageHeight - 20, { align: 'center' });
  doc.text(`${companyWebsite} | ${companyEmail}`, 105, pageHeight - 15, { align: 'center' });

  // Save the PDF
  doc.save(`Invoice_FlairVigo_${orderId}.pdf`);
}
