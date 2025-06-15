import jsPDF from 'jspdf';
import { SEOAuditData } from '@/pages/SEOAudit';

// New function signature: accept score and logoUrl
export const generateSEOAuditPDF = async (
  auditData: SEOAuditData,
  score: number,
  logoUrl?: string
) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  
  const brandNavy: [number, number, number] = [20, 33, 61];
  const brandLime: [number, number, number] = [150, 255, 0];
  const brandSilver: [number, number, number] = [156, 163, 175];

  // Header with 11th Temple branding
  doc.setFillColor(...brandNavy);
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('11th Temple', 20, 25);
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('SEO Audit Report', 20, 35);

  // Add logo in the top right corner if provided
  if (logoUrl) {
    try {
      // Convert relative URL to absolute URL
      const absoluteLogoUrl = logoUrl.startsWith('http') ? logoUrl : `${window.location.origin}${logoUrl}`;
      
      // Load and add the logo
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = () => {
          try {
            // Create canvas to get image data
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0);
            
            const imgData = canvas.toDataURL('image/png');
            
            // Add logo to PDF (top right corner)
            const logoWidth = 30;
            const logoHeight = (img.height / img.width) * logoWidth;
            doc.addImage(imgData, 'PNG', pageWidth - logoWidth - 10, 10, logoWidth, logoHeight);
            resolve(undefined);
          } catch (error) {
            console.error('Error processing logo:', error);
            resolve(undefined);
          }
        };
        img.onerror = () => {
          console.error('Error loading logo');
          resolve(undefined);
        };
        img.src = absoluteLogoUrl;
      });
    } catch (error) {
      console.error('Error adding logo to PDF:', error);
    }
  }

  let yPosition = 60;

  // Business Information
  doc.setTextColor(...brandNavy);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Business Overview', 20, yPosition);
  
  yPosition += 15;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Business Name: ${auditData.businessName}`, 20, yPosition);
  yPosition += 8;
  doc.text(`Website: ${auditData.websiteUrl}`, 20, yPosition);
  yPosition += 8;
  doc.text(`Industry: ${auditData.industry}`, 20, yPosition);
  yPosition += 8;
  doc.text(`Target Location: ${auditData.targetLocation}`, 20, yPosition);
  yPosition += 8;
  doc.text(`Current Ranking: ${auditData.currentRanking}`, 20, yPosition);

  // Primary Keywords
  if (auditData.primaryKeywords.length > 0) {
    yPosition += 20;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...brandNavy);
    doc.text('Primary Keywords', 20, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    auditData.primaryKeywords.forEach((keyword) => {
      doc.text(`• ${keyword}`, 25, yPosition);
      yPosition += 6;
    });
  }
  // Competitors
  if (auditData.competitors.length > 0) {
    yPosition += 10;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...brandNavy);
    doc.text('Main Competitors', 20, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    auditData.competitors.forEach((competitor) => {
      doc.text(`• ${competitor}`, 25, yPosition);
      yPosition += 6;
    });
  }

  // SEO Goals
  if (auditData.seoGoals.length > 0) {
    yPosition += 10;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...brandNavy);
    doc.text('SEO Goals', 20, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    auditData.seoGoals.forEach((goal) => {
      doc.text(`• ${goal}`, 25, yPosition);
      yPosition += 6;
    });
  }

  // Current Issues
  if (auditData.currentIssues.length > 0) {
    yPosition += 10;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...brandNavy);
    doc.text('Current SEO Issues', 20, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    auditData.currentIssues.forEach((issue) => {
      doc.text(`• ${issue}`, 25, yPosition);
      yPosition += 6;
    });
  }

  // SEO Score (use passed-in score, not random)
  yPosition += 20;
  doc.setFillColor(...brandLime);
  doc.rect(20, yPosition - 5, 50, 25, 'F');
  
  doc.setTextColor(...brandNavy);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(`${score}/100`, 30, yPosition + 8);
  
  doc.setTextColor(...brandNavy);
  doc.setFontSize(14);
  doc.text('Overall SEO Score', 80, yPosition + 8);

  // Recommendations
  yPosition += 40;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...brandNavy);
  doc.text('Priority SEO Recommendations', 20, yPosition);

  // You could pass custom recommendations, for now stick to existing array:
  const recommendations = [
    'Implement comprehensive keyword strategy',
    'Optimize website for local search terms',
    'Improve page loading speed and performance',
    'Create high-quality, SEO-optimized content',
    'Build authoritative backlink profile',
    'Optimize Google My Business listing',
    'Implement structured data markup',
    'Improve internal linking structure'
  ];
  yPosition += 15;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  recommendations.forEach((rec, index) => {
    if (yPosition > pageHeight - 30) {
      doc.addPage();
      yPosition = 30;
    }
    doc.text(`${index + 1}. ${rec}`, 25, yPosition);
    yPosition += 8;
  });

  // Footer
  const footerY = pageHeight - 20;
  doc.setFillColor(...brandNavy);
  doc.rect(0, footerY - 5, pageWidth, 25, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('Generated by 11th Temple SEO', 20, footerY + 5);
  doc.text(`Report Date: ${new Date().toLocaleDateString()}`, 20, footerY + 12);
  const contactInfo = 'Contact us for SEO implementation: hello@11thtemple.com';
  doc.text(contactInfo, pageWidth - 20 - doc.getTextWidth(contactInfo), footerY + 5);

  // Save the PDF
  doc.save(`${auditData.businessName}_SEO_Audit.pdf`);
};
