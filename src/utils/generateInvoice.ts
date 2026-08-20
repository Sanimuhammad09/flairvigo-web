import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { format } from 'date-fns';

export function generateInvoicePDF(order: any) {
  // Create a new PDF document (A4 portrait)
  const doc = new jsPDF();
  
  const companyName = "FLAIRVIGO";
  const companySlogan = "Modesty in Every Stitch";
  const companyEmail = "support@flairvigo.com";
  const companyWebsite = "www.flairvigo.com";

  // Brand Colors (RGB)
  const inkDeep = [52, 10, 10]; // #340A0A
  const accentGold = [173, 125, 75]; // #AD7D4B
  const surfaceCream = [255, 249, 227]; // #FFF9E3

  // Header Background (Ink Deep)
  doc.setFillColor(inkDeep[0], inkDeep[1], inkDeep[2]);
  doc.rect(0, 0, 210, 45, 'F');
  
  // Header Text - Logo Substitute
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('times', 'bold'); // Using serif-like font for luxury feel
  doc.text(companyName, 14, 25);
  
  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text(companySlogan, 15, 33);
  
  // Invoice Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text("INVOICE", 180, 25, { align: 'right' });
  
  // Reset Text Color
  doc.setTextColor(50, 50, 50);
  
  // Try to use createdAt, fallback to current date if missing
  const orderDate = order.createdAt ? format(new Date(order.createdAt), 'MMM dd, yyyy') : format(new Date(), 'MMM dd, yyyy');
  const orderId = order.id ? order.id.slice(0, 8).toUpperCase() : 'N/A';

  // Order Info Section
  doc.setFontSize(14);
  doc.setFont('times', 'bold');
  doc.text("Order Information", 14, 65);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Order ID: #${orderId}`, 14, 75);
  doc.text(`Date: ${orderDate}`, 14, 82);
  doc.text(`Status: ${(order.status || 'Paid').toUpperCase()}`, 14, 89);

  // Customer Info Section
  doc.setFontSize(14);
  doc.setFont('times', 'bold');
  doc.text("Billed To", 120, 65);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`${order.shippingAddress?.firstName || order.user?.firstName || ''} ${order.shippingAddress?.lastName || order.user?.lastName || ''}`, 120, 75);
  doc.text(`${order.shippingAddress?.email || order.user?.email || 'N/A'}`, 120, 82);
  doc.text(`${order.shippingAddress?.city || ''}${order.shippingAddress?.city && order.shippingAddress?.country ? ', ' : ''}${order.shippingAddress?.country || ''}`, 120, 89);

  // Divider Line
  doc.setDrawColor(229, 229, 229);
  doc.line(14, 100, 196, 100);

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
    startY: 110,
    head: [tableColumn],
    body: tableRows,
    theme: 'plain',
    headStyles: { 
      fillColor: surfaceCream as any, 
      textColor: inkDeep as any,
      fontStyle: 'bold',
      lineWidth: 0.1,
      lineColor: inkDeep as any
    },
    styles: { 
      fontSize: 10, 
      cellPadding: 6,
      textColor: [50, 50, 50]
    },
    alternateRowStyles: {
      fillColor: [250, 250, 250]
    },
    columnStyles: {
      0: { cellWidth: 70 },
      1: { cellWidth: 40 },
      2: { cellWidth: 20, halign: 'center' },
      3: { cellWidth: 30, halign: 'right' },
      4: { cellWidth: 30, halign: 'right' },
    }
  });

  const finalY = (doc as any).lastAutoTable?.finalY || 110;

  // Totals Section
  const shipping = order.shippingCost || 0;
  const tax = order.taxAmount || 0;
  const grandTotal = order.totalAmount || (subtotal + shipping + tax);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text("Subtotal:", 140, finalY + 15);
  doc.text(`N${subtotal.toLocaleString()}`, 196, finalY + 15, { align: 'right' });
  
  doc.text("Shipping:", 140, finalY + 22);
  doc.text(`N${shipping.toLocaleString()}`, 196, finalY + 22, { align: 'right' });
  
  doc.text("Tax:", 140, finalY + 29);
  doc.text(`N${tax.toLocaleString()}`, 196, finalY + 29, { align: 'right' });

  // Total Box
  doc.setFillColor(surfaceCream[0], surfaceCream[1], surfaceCream[2]);
  doc.rect(135, finalY + 34, 61, 12, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(inkDeep[0], inkDeep[1], inkDeep[2]);
  doc.text("TOTAL:", 140, finalY + 42);
  doc.setFontSize(12);
  doc.text(`N${grandTotal.toLocaleString()}`, 194, finalY + 42, { align: 'right' });

  // Footer
  const pageHeight = doc.internal.pageSize.height;
  
  doc.setDrawColor(229, 229, 229);
  doc.line(14, pageHeight - 30, 196, pageHeight - 30);
  
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text("Thank you for choosing FlairVigo. We appreciate your business.", 105, pageHeight - 20, { align: 'center' });
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.text(`${companyWebsite}  |  ${companyEmail}`, 105, pageHeight - 14, { align: 'center' });

  // Save the PDF
  doc.save(`Invoice_FlairVigo_${orderId}.pdf`);
}
