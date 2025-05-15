import { useDispatch } from "react-redux";
import { removeItem } from "../../features/shopingSlice";

function QueryModal({ setOpenModal, item }) {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeItem(item.id));
    setOpenModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm backdrop-brightness-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-[400px]">
        <div className="flex justify-end">
          <button
            onClick={() => setOpenModal(false)}
            className="text-xl font-bold text-gray-700"
          >
            ×
          </button>
        </div>
        <div className="text-center my-4">
          <h1 className="text-lg font-semibold mb-4">
            Are you sure you want to remove this item?
          </h1>
        </div>
        <div className="flex justify-center gap-6">
          <button
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            onClick={removeHandler}
          >
            Yes, Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default QueryModal;
