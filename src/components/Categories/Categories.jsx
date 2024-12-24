import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "../../API/axios";
import CategoryCard from "../CategoryCard/CategoryCard";
const CARD_WIDTH = 310;

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");
  const [sortDirection, setSortDirection] = useState("Latest");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const containerRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideRight, setHideRight] = useState(false);

  const filterCategories = useMemo(() => {
    return categories?.filter((category) => {
      const matchesSearch = category.productName.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = selectedFilter === "All" || category.category === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [categories, query, selectedFilter]);

  const categoryTypes = useMemo(() => {
    const types = new Set(categories.map(category => category.category));
    return ["All", ...Array.from(types)];
  }, [categories]);

  const processedCategories = useMemo(() => {
    const sortedCategories = [...filterCategories];
    return sortDirection === "Latest"
      ? sortedCategories.sort((a, b) => new Date(a.startdate) - new Date(b.startdate))
      : sortedCategories.sort((a, b) => new Date(b.startdate) - new Date(a.startdate));
  }, [filterCategories, sortDirection]);

  const getProductsCategories = async () => {
    try {
      const resp = await axios.get("/api/product/viewAll-product");
      setCategories(resp.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -CARD_WIDTH : CARD_WIDTH;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getProductsCategories();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, [sortDirection, query, categories]);

  useEffect(() => {
    const container = containerRef.current;
    const updateScroll = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setScrollPosition(container.scrollLeft);
      setHideRight(container.scrollLeft >= maxScrollLeft - 1);
    };

    container.addEventListener("scroll", updateScroll);
    return () => container.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="w-full px-4 py-8">
      {/* Filter and Sort Controls */}
      <div className="flex flex-wrap gap-1 items-center justify-between mb-6">
        <div className="flex flex-wrap gap-2">
          {categoryTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedFilter(type)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedFilter === type
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setSortDirection("Latest")}
              className={`px-4 py-2 rounded-l-md border ${
                sortDirection === "Latest"
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white hover:bg-gray-50 border-gray-300"
              }`}
            >
              Latest
            </button>
            <button
              onClick={() => setSortDirection("Oldest")}
              className={`px-4 py-2 rounded-r-md border-t border-r border-b ${
                sortDirection === "Oldest"
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white hover:bg-gray-50 border-gray-300"
              }`}
            >
              Oldest
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-opacity ${
            scrollPosition > 0 ? "opacity-100" : "opacity-0"
          }`}
          disabled={scrollPosition <= 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {processedCategories.length > 0 ? (
            processedCategories.map((category) => (
              <div
                key={category.name}
                className="flex-none w-[310px] scroll-snap-align-start"
              >
                <CategoryCard category={category} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full py-8">
              No categories found.
            </p>
          )}
        </div>

        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-opacity ${
            !hideRight ? "opacity-100" : "opacity-0"
          }`}
          disabled={hideRight}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
 

export default Categories;