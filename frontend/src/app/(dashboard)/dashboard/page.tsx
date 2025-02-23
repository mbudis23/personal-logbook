export default function DashboardPage() {
  return (
    <main className="bg-white min-h-screen grid grid-cols-6 text-black p-4 gap-[16px]">
      <div className="col-span-5">
        <div className="grid grid-cols-5 p-3">
          <h3 className="font-bold border-b">Date</h3>
          <h3 className="font-bold border-b">Title</h3>
          <h3 className="font-bold border-b">Description</h3>
          <h3 className="font-bold border-b">Category</h3>
          <h3 className="font-bold border-b">Action</h3>
        </div>
      </div>
      <div className="col-span-1 border-l p-3">
        <div>
          <h3 className="font-bold border-b">Filters</h3>
          <input
            className="outline-none"
            type="text w-full"
            placeholder="Filter Date"
          />
          <input className="outline-none" type="text" placeholder="Category" />
          <input className="outline-none" type="text" placeholder="Search" />
        </div>
        <div>
          <h3 className="font-bold border-b">Insert</h3>
          <button
            // onClick={handleLogin}
            className="bg-black text-white rounded-sm w-full"
            // disabled={loading} // Mencegah user menekan tombol berkali-kali
          >
            Add Log
          </button>
        </div>
      </div>
    </main>
  );
}
