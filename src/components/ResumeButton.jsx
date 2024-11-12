import { Button } from "@/components/ui/button";

function ResumeButton() {
  return (
    <Button className="bg-blue-500 text-white font-semibold mt-5 transition duration-200 hover:bg-blue-600">
      Resume preparation
      <i className="fas fa-chevron-right ml-2"></i>
      <span className="ml-2 w-2 h-2 bg-white rounded-full"></span>
    </Button>
  );
}

export default ResumeButton;
