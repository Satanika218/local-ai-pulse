
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { downloadServicesPDFForTesting } from "@/utils/downloadServicesPDF";

const PDFTestButton = () => {
  return (
    <Button 
      onClick={downloadServicesPDFForTesting}
      className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
    >
      <Download className="h-4 w-4 mr-2" />
      Test PDF Download
    </Button>
  );
};

export default PDFTestButton;
