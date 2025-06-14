import React, { useState, useEffect, useRef, useCallback } from "react";
import AllListing from "./component/AllListing";
import { Link } from "react-router-dom";
import FilterDropdown from "./component/filterDropDown";
import { AppRoutes } from "../../../utils/route";
import { getAllListing } from "../../../services/queries";
import { useAuth } from "../../../context/authContext";
import { toast } from "react-toastify";
import FilterListing from "./component/Filter";
import { ChevronDown, Check } from "lucide-react";

const Property = () => {
  const { token } = useAuth();
  const [myList, setMylist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(false);
  const [myFilter, setMyfilter] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    minPrice: "",
    maxPrice: "",
    availability: "",
    page: 1,
    limit: 6,
  });
  const observer = useRef(null);
  const loadMoreRef = useRef(null);

  const getList = useCallback(async () => {
    if (!token || !hasMore) return;

try {
      const data = await getAllListing({
        token,
        page,
        limit: 6,
        ...(filters.startDate && { startDate: filters.startDate }),
        ...(filters.endDate && { endDate: filters.endDate }),
        ...(filters.minPrice && { minPrice: parseFloat(filters.minPrice) }),
        ...(filters.maxPrice && { maxPrice: parseFloat(filters.maxPrice) }),
        ...(filters.availability !== "" && { availability: filters.availability === "true" }),
      });

      const newListings = data?.data?.listings || [];

      setMylist((prev) => [...prev, ...newListings]);
      setHasMore(newListings.length > 0);
    } catch (err) {
      console.error("Error fetching listings:", err);
      toast.error("Failed to fetch listings", {
        style: {
          backgroundColor: "#C8170D",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    } finally {
      setLoading(false);
    }
  }, [token, page, filters, hasMore]);
const [shouldFetch, setShouldFetch] = useState(false);

useEffect(() => {
  if (!token) return;

  setPage(1);
  setMylist([]);
  setHasMore(true);
  setLoading(true);

  // Wait for the reset to complete, then trigger the fetch
  setShouldFetch(true);
}, [filters, reload]);

useEffect(() => {
  if (!token || !shouldFetch) return;

  getList();
  setShouldFetch(false); // Prevent double-fetching
}, [token, page, shouldFetch]);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFilters((prev) => ({ ...prev, [name]: value }));
  setReload((prev) => !prev); // Trigger the reload effect
};

  
  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    if (loadMoreRef.current) {
      observer.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loading, hasMore]);


  return (
    <div className="  lato-regular">
      <div>
        <section className="mt-11 px-28 flex w-full justify-between items-center">
          <article>
            <p className="text-4xl font-medium">Find Properties</p>
            <p>Search for properties and suit your conveniences</p>
          </article>
          <Link to={AppRoutes.landlordAddProperty}>
            <article className="bg-primaryCol text-white flex items-center font-semibold rounded-md  px-7 py-2 gap-x-3 cursor-pointer">
              <img src="/add.svg" alt="arrowdown.png" />

              <p>Add Property</p>
            </article>
          </Link>
        </section>
        <section className="flex items-center justify-between text-lg my-7 ">
          <div className="flex items-center gap-x-3 ">
            <p className="text-primaryCol underline cursor-pointer">
              All Listings
            </p>
          </div>
          <article className="flex gap-x-10 items-center">
            <div className="bg-gold-gradient p-[1px] rounded-full relative">
              <img
                src="/inputsearch.png"
                className="absolute  top-1/2 -translate-y-1/2 left-2"
              />
              <input
                type="Search properties"
                className="outline-none rounded-full px-10 py-1 placeholder:text-rental-deep text-rental-dark"
                placeholder="Search Properties"
              />
            </div>
            <div className="flex items-start gap-x-3 relative">
              <img src="/filter.svg" alt="filtericon.png" />
              <button
                onClick={() => setMyfilter((prev) => !prev)}
                className="inline-flex justify-between items-center w-40 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Filter by
                <ChevronDown
                  className={`ml-2 h-4 w-4 ${
                    myFilter ? "rotate-180 transition-all  duration-200" : ""
                  }`}
                />
              </button>
              {myFilter && (
                <FilterListing
                  getList={getList}
                  handleChange={handleChange}
                  filters={filters}
                />
              )}
            </div>
          </article>
        </section>
      </div>

      <AllListing myList={myList} loading={loading} setReload={setReload} />
      
      {/* Observer Anchor */}
      <div
        ref={loadMoreRef}
        className="h-10 mt-10 flex justify-center items-center"
      >
        {loading && (
          <span className="text-sm text-gray-500">Loading more...</span>
        )}
        {!hasMore && (
          <span className="text-sm text-gray-400">No more listings.</span>
        )}
      </div>
    </div>
  );
};

export default Property;
