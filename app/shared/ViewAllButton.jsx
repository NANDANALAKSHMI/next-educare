
import { ArrowUpRight } from 'lucide-react';

const ViewAllButton = () => {
  return (
    <div>

      <button className="  flex lg:text-[18px] text-[12px] items-center gap-1 bg-[#7A1D36] text-white  px-6 py-1 rounded-[4px] rotate-[-3deg] hover:rotate-0 transition-all">
        View All
        <ArrowUpRight size={14} className="ml-1" />
      </button>
    </div>
  );
};

export default ViewAllButton;