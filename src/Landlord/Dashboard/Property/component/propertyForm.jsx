import React from "react";
import PropertyTypeDrop from "./typeDropdown";
import IntervalFilter from "../../Bookings/component/intervalFilter";

const PropertyForm = ({
  errors,
  touched,
  handleFieldChange,
  handleBlur,
  setFilter,
  filter,
  title,
  typeDrop,
  setTypeDrop,
  mystate,
  city,
  street,
  zipCode,
  rent,
  mybedroom,
  myBathRooms,
  mykitchen,
  description,
  images,
  handleFileChange ,
  Amenitiesdata,
  selectedAmenities,
  availability,
  handleAmenityChange,
  handleClearAll,
  setAvailability,
  handleProofChange,
  handleProofClear,
  poofImages 
  
}) => {
  return (
    <div>
      <h1 className="text-lg font-semibold text-renatal-blue mt-6 mb-2">
        Basic Information
      </h1>
      <section className="flex w-full gap-x-32 ">
        <div className="basis-3/12">
          <p className="mb-1 font-semibold text-rental-dark/80">
            Property Title{" "}
            {errors.title && touched.title && (
              <span className="text-danger lowercase font-bold text-xs">
                ({errors.title})
              </span>
            )}
          </p>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => handleFieldChange("title", e.target.value)}
            onBlur={() => handleBlur("title")}
            placeholder="e.g. Modern Apartment in Downtown"
            className={`${
              errors?.title && touched.title
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } border  px-4 py-2 text-sm font-semibold w-full  text-rental-dark rounded-md outline-none`}
          />
        </div>
        <div className="basis-3/12">
          <p className="mb-1 font-semibold text-rental-dark/80">
            Property Type
          </p>
          <PropertyTypeDrop selected={typeDrop} onChange={setTypeDrop} />
        </div>
      </section>
      <h1 className="text-lg font-semibold text-renatal-blue mt-6 mb-2">
        Location
      </h1>
      <section className="flex w-10/12 gap-x-3  ">
        <div className=" w-full">
          <p className="mb-1 font-semibold text-rental-dark/80">
            State{" "}
            {errors.mystate && touched.mystate && (
              <span className="text-danger font-semibold text-xs">
                ({errors.mystate})
              </span>
            )}
          </p>
          <input
            type="text"
            name="mystate"
            value={mystate}
            onBlur={() => handleBlur("mystate")}
            onChange={(e) => handleFieldChange("mystate", e.target.value)}
            placeholder="Osun"
            className={`${
              errors.mystate && touched.mystate
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } border  px-4 py-2 text-sm font-semibold w-full text-rental-dark rounded-md outline-none`}
          />
        </div>
        <div className=" w-full">
          <p className="mb-1 font-semibold text-rental-dark/80">
            City{" "}
            {errors.city && touched.city && (
              <span className="text-danger font-semibold text-xs">
                ({errors.city})
              </span>
            )}
          </p>
          <input
            type="text"
            name="city"
            value={city}
            onBlur={() => handleBlur("city")}
            onChange={(e) => handleFieldChange("city", e.target.value)}
            placeholder="Ife"
            className={`${
              errors.city && touched.city
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } border  px-4 py-2 text-sm font-semibold w-full text-rental-dark rounded-md outline-none`}
          />
        </div>
        <div className=" w-full">
          <p className="mb-1 font-semibold text-rental-dark/80">
            Street{" "}
            {errors.street && touched.street && (
              <span className="text-danger font-semibold text-xs">
                ({errors.street})
              </span>
            )}
          </p>
          <input
            type="text"
            name="street"
            value={street}
            onBlur={() => handleBlur("street")}
            onChange={(e) => handleFieldChange("street", e.target.value)}
            placeholder="Oduduwa Street"
            className={`${
              errors.street && touched.street
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } border  px-4 py-2 text-sm font-semibold w-full text-rental-dark rounded-md outline-none`}
          />
        </div>
        <div className=" w-full">
          <p className="mb-1 font-semibold text-rental-dark/80">
            Zip Code{" "}
            {errors.zipCode && touched.zipCode && (
              <span className="text-danger font-semibold text-xs">
                ({errors.zipCode})
              </span>
            )}
          </p>
          <input
            type="number"
            name="zipCode"
            value={zipCode}
            onBlur={() => handleBlur("zipCode")}
            onChange={(e) => handleFieldChange("zipCode", e.target.value)}
            maxLength={5}
            placeholder="100253"
            className={`${
              errors.zipCode && touched.zipCode
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } border  px-4 py-2 text-sm font-semibold w-full text-rental-dark rounded-md outline-none`}
          />
        </div>
      </section>
      <h1 className="text-lg font-semibold text-renatal-blue mt-6 mb-2">
        Rent Details
      </h1>
      <section className="flex justify-start gap-x-3">
        <article className=" relative  items-start">
          <p className="mb-1 font-semibold text-rental-dark/80">
            Amount{" "}
            {errors.rent && touched.rent && (
              <span className="text-danger font-bold lowercase text-xs ">
                ({errors.rent})
              </span>
            )}
          </p>
          {rent && <span className="absolute left-3 bottom-2">₦</span>}

          <input
            type="text"
            placeholder="₦ 0.00"
            value={rent}
            onBlur={() => handleBlur("rent")}
            onChange={(e) => handleFieldChange("rent", e.target.value)}
            className={`${
              errors.rent && touched.rent
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } border
            }  pl-6 py-2 text-sm font-semibold rounded-md outline-none`}
          />
        </article>

        <article>
          <p className="mb-1 font-semibold text-rental-dark/80">Interval</p>

          <IntervalFilter selected={filter} onChange={setFilter} />
        </article>
      </section>
      <h1 className="text-lg font-semibold text-renatal-blue mt-6 mb-2">
        Property Details
      </h1>
      <section className="flex justify-start gap-x-3">
        <div className=" ">
          <p className="mb-1 font-semibold text-rental-dark/80">
            Bedrooms{" "}
            {errors.mybedroom && (
              <span className="text-danger font-semibold text-xs">
                ({errors.mybedroom})
              </span>
            )}
          </p>
          <input
            type="number"
            min="0"
            name="mybedroom"
            value={mybedroom}
            onChange={(e) => handleFieldChange("mybedroom", e.target.value)}
            placeholder="0"
            className={`${
              errors.mybedroom
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } border px-4 py-2 text-sm font-semibold  text-rental-dark rounded-md outline-none`}
          />
        </div>
        <div className=" ">
          <p className="mb-1 font-semibold text-rental-dark/80">
            Bathrooms{" "}
            {errors.myBathRooms && (
              <span className="text-danger font-semibold text-xs">
                ({errors.myBathRooms})
              </span>
            )}
          </p>
          <input
            type="number"
            min="0"
            name="myBathRooms"
            value={myBathRooms}
            onChange={(e) => handleFieldChange("myBathRooms", e.target.value)}
            placeholder="0"
            className={`${
              errors.myBathRooms
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } border px-4 py-2 text-sm font-semibold  text-rental-dark rounded-md outline-none`}
          />
        </div>
        <div className=" ">
          <p className="mb-1 font-semibold text-rental-dark/80">
            Kitchen{" "}
            {errors.mykitchen && (
              <span className="text-danger font-semibold text-xs">
                ({errors.mykitchen})
              </span>
            )}
          </p>
          <input
            type="number"
            min="0"
            name="mykitchen"
            value={mykitchen}
            onChange={(e) => handleFieldChange("mykitchen", e.target.value)}
            placeholder="0"
            className={`${
              errors.mykitchen
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } border px-4 py-2 text-sm font-semibold  text-rental-dark rounded-md outline-none`}
          />
        </div>
      </section>
      <h1 className="text-lg font-semibold text-renatal-blue mt-6 mb-3">
        Property Description{" "}
        {errors.description && touched.description && (
          <span className="text-danger font-semibold text-xs">
            ({errors.description})
          </span>
        )}
      </h1>
      <textarea
        name="description"
        value={description}
        onBlur={() => handleBlur("description")}
        onChange={(e) => handleFieldChange("description", e.target.value)}
        className={`w-6/12 h-40 p-4 border rounded outline-none resize-none ${
          errors.description && touched.description
            ? "border-danger shadow-danger/50 shadow-sm"
            : "border-rental-deep"
        }`}
        placeholder="Describe your property, including special features, nearby attractions, etc...."
      ></textarea>
      <section>
        <h1 className="text-lg font-semibold text-renatal-blue mt-6 mb-2">
          Property Images{" "}
          {errors.images && (
            <span className="text-danger font-bold lowercase text-xs ">
              ({errors.images})
            </span>
          )}
        </h1>
        <section className="flex justify-between items-center">
          <label
            className={`flex px-4 py-3 flex-col items-center  rounded cursor-pointer w-full border-dashed border justify-center border-rental-deep transition ${
              images.length > 0 ? "basis-1/2" : ""
            }`}
          >
            <img src="/uploadplus.png" alt="uploadplus.png" className="my-3" />
            <p className="text-xs font-bold text-rental-dark/70 mb-1">
              Click to upload images
            </p>
            <p className="text-xs font-bold text-rental-dark/40">
              JPG, PNG, or GIF up to 5MB
            </p>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {images.length > 0 && (
            <section className="basis-[49%]">
              <div className="flex flex-wrap gap-2 mb-4">
                {images.map((file, index) => (
                  <div
                    key={index}
                    className="w-16 h-14 relative border rounded overflow-hidden"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`preview-${index}`}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center ">
                <p className="text-sm text-gray-600">
                  {images.length} / 6 image{images.length < 2 ? "" : "s"}{" "}
                  uploaded
                </p>
                <button
                  onClick={handleClearAll}
                  className="text-[#C8170D] text-sm underline font-medium"
                >
                  Clear All
                </button>
              </div>
              
            </section>
          )}
        </section>
      </section>
      <section>
        <h1 className="text-lg font-semibold text-renatal-blue mt-6 mb-2">
          Proof of Ownership{" "}
          {errors.poofImages && (
            <span className="text-danger font-bold lowercase text-xs ">
              ({errors.poofImages})
            </span>
          )}
        </h1>
        <section className="flex justify-between items-center">
          <label
            className={`flex px-4 py-3 flex-col items-center  rounded cursor-pointer w-full border-dashed border justify-center border-rental-deep transition ${
              poofImages.length > 0 ? "basis-1/2" : ""
            }`}
          >
            <img src="/uploadplus.png" alt="uploadplus.png" className="my-3" />
            <p className="text-xs font-bold text-rental-dark/70 mb-1">
              Click to upload images
            </p>
            <p className="text-xs font-bold text-rental-dark/40">
              JPG, PNG, or GIF up to 5MB
            </p>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleProofChange}
              className="hidden"
            />
          </label>
          {poofImages.length > 0 && (
            <section className="basis-[49%]">
              <div className="flex flex-wrap gap-2 mb-4">
                {poofImages.map((file, index) => (
                  <div
                    key={index}
                    className="w-16 h-14 relative border rounded overflow-hidden"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`preview-${index}`}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center ">
                <p className="text-sm text-gray-600">
                  {poofImages.length} / 3 image{poofImages.length < 2 ? "" : "s"}{" "}
                  uploaded
                </p>
                <button
                  onClick={handleProofClear}
                  className="text-[#C8170D] text-sm underline font-medium"
                >
                  Clear All
                </button>
              </div>
              
            </section>
          )}
        </section>
      </section>
      <h1 className="text-lg font-semibold text-renatal-blue mt-6 mb-2">
        Amenities{" "}
        {errors.selectedAmenities && (
          <span className="text-danger font-bold lowercase text-xs ">
            ({errors.selectedAmenities})
          </span>
        )}
      </h1>
      <section className="flex justify-between items-center w-8/12 ">
        {Amenitiesdata.map((data) => {
          const isChecked = selectedAmenities.includes(data.name);

          return (
            <label
              key={data.name}
              className="flex gap-x-2 items-center cursor-pointer"
            >
              <input
                type="checkbox"
                className="mr-1 accent-renatal-blue"
                checked={isChecked}
                onChange={(e) =>
                  handleAmenityChange(data.name, e.target.checked)
                }
              />
              <img src={data.icon} alt={data.name} />
              <p className="text-sm">{data.name}</p>
            </label>
          );
        })}
      </section>

      <h1 className="text-lg font-semibold text-renatal-blue mt-6 mb-2">
        Availability Status
      </h1>
      <section className="gap-x-4 flex items-center">
        <label className="flex gap-x-1.5 items-center cursor-pointer">
          <input
            type="radio"
            name="availability"
            value="available"
            checked={availability === "available"}
            onChange={(e) => setAvailability(e.target.value)}
          />
          Available
        </label>
        <label className="flex gap-x-1.5 items-center cursor-pointer">
          <input
            type="radio"
            name="availability"
            value="unavailable"
            checked={availability === "unavailable"}
            onChange={(e) => setAvailability(e.target.value)}
          />
          Unavailable
        </label>
      </section>
    </div>
  );
};

export default PropertyForm;
