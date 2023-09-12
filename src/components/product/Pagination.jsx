import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-700 transition-colors duration-300"
        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        disabled={currentPage === 1}
      >
        <MdArrowBackIos />
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className={
            currentPage === pageNumber
              ? "text-indigo-600 font-bold border-b-2 border-indigo-600"
              : "font-normal"
          }
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-700 transition-colors duration-300"
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};
