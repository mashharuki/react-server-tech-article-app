import { ArrowLeft } from "lucide-react";
import { Link } from "@lazarv/react-server/navigation";
import { PopularArticleList } from "../../components/PopularArticleList";

export default async function Popular() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Popular Articles
        </h1>
        <PopularArticleList limit={50} />
      </div>
    </div>
  );
}
