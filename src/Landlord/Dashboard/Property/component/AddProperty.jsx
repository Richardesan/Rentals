import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import PropertyForm from "./propertyForm";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../utils/route";
import Success from "./success";
import { addLandlordProperty } from "../../../../services/queries";
import { useAuth } from "../../../../context/authContext";
import axios from "axios";
const AddProperty = () => {
  const { token } = useAuth();
  const formRef = useRef(null);
  const [rent, setRent] = useState("");
  const [filter, setFilter] = useState("Daily");
  const [typeDrop, setTypeDrop] = useState("Single home");
  const [images, setImages] = useState([]);
  const [poofImages, setpoofImages] = useState([]);
  const [title, setTitle] = useState("");
  const [mystate, setMyState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [myBathRooms, setMyBathRooms] = useState("");
  const [mybedroom, setMyBedroom] = useState("");
  const [mykitchen, setMykitchen] = useState("");
  const [description, setDescription] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [availability, setAvailability] = useState("available");
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const addCommas = (number) => number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeCommas = (number) => number.replace(/,/g, "");
  const allAmenities = ["Power", "Water", "Parking", "Security", "wifi"];

  const amenityFlags = allAmenities.reduce((acc, amenity) => {
    acc[amenity] = selectedAmenities.includes(amenity);
    return acc;
  }, {});

  const handleFieldChange = (field, value) => {
    switch (field) {
      case "rent":
        const raw = removeCommas(value);

        if (!/^\d*$/.test(raw)) return;
        if (raw.length > 12) return;

        const formatted = addCommas(raw);
        setRent(formatted);

        const rentValue = Number(raw);
        if (rentValue > 200) {
          setErrors((prev) => ({ ...prev, rent: undefined }));
        } else {
          setErrors((prev) => ({
            ...prev,
            rent: "amout to little",
          }));
        }
        break;
      case "title": {
        setTitle(value);

        if (value.trim().length >= 3) {
          setErrors((prev) => ({ ...prev, title: undefined }));
        } else {
          setErrors((prev) => ({
            ...prev,
            title: "must be at least 3 characters",
          }));
        }

        break;
      }
      case "mystate": {
        setMyState(value);
        if (value.trim().length >= 3) {
          setErrors((prev) => ({ ...prev, mystate: undefined }));
        } else {
          setErrors((prev) => ({
            ...prev,
            mystate: "must be at least 3 characters",
          }));
        }

        break;
      }
      case "city": {
        setCity(value);

        if (value.trim().length >= 3) {
          setErrors((prev) => ({ ...prev, city: undefined }));
        } else {
          setErrors((prev) => ({
            ...prev,
            city: "must be at least 3 characters",
          }));
        }
        break;
      }

      case "description": {
        setDescription(value);

        if (value.trim().length >= 10) {
          setErrors((prev) => ({ ...prev, description: undefined }));
        } else {
          setErrors((prev) => ({
            ...prev,
            description: "must be at least 10 characters",
          }));
        }
        break;
      }
      case "street": {
        setStreet(value);

        if (value.trim().length >= 3) {
          setErrors((prev) => ({ ...prev, street: undefined }));
        } else {
          setErrors((prev) => ({
            ...prev,
            street: "must be at least 3 characters",
          }));
        }
        break;
      }
      case "zipCode": {
        if (!/^\d*$/.test(value)) return;

        setZipCode(value);

        if (value.length === 5) {
          setErrors((prev) => ({ ...prev, zipCode: undefined }));
        } else {
          setErrors((prev) => ({
            ...prev,
            zipCode: "Must be exactly 5 digits",
          }));
        }

        break;
      }

      case "myBathRooms": {
        if (!/^\d*$/.test(value)) return;

        setMyBathRooms(value);

        const numValue = Number(value);

        if (numValue > 0) {
          setErrors((prev) => ({ ...prev, myBathRooms: undefined }));
        } else {
          setErrors((prev) => ({ ...prev, myBathRooms: "Invalid number" }));
        }
        break;
      }
      case "mybedroom": {
        if (!/^\d*$/.test(value)) return; // allow only digits

        setMyBedroom(value);

        const numValue = Number(value);

        if (numValue > 0) {
          setErrors((prev) => ({ ...prev, mybedroom: undefined }));
        } else {
          setErrors((prev) => ({ ...prev, mybedroom: "Invalid number" }));
        }
        break;
      }
      case "mykitchen": {
        if (!/^\d*$/.test(value)) return; // allow only digits

        setMykitchen(value);

        const numValue = Number(value);

        if (numValue > 0) {
          setErrors((prev) => ({ ...prev, mykitchen: undefined }));
        } else {
          setErrors((prev) => ({ ...prev, mykitchen: "Invalid number" }));
        }
        break;
      }

      default:
        break;
    }
  };
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFiles = [...images, ...selectedFiles];
    if (touched.images && newFiles.length >= 3) {
      setErrors((prev) => ({ ...prev, images: undefined }));
    }

    if (newFiles.length > 10) {
      toast.error("You can only upload a maximum of 10 images.", {
        style: {
          backgroundColor: "#C8170D",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
      return;
    }

    setImages(newFiles);
    e.target.value = "";
  };
  const handleProofChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFiles = [...poofImages, ...selectedFiles];
    if (touched.poofImages && newFiles.length >= 2) {
      setErrors((prev) => ({ ...prev, poofImages: undefined }));
    }

    if (newFiles.length > 5) {
      toast.error("You can only upload a maximum of 5 images.", {
        style: {
          backgroundColor: "#C8170D",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
      return;
    }

    setpoofImages(newFiles);
    e.target.value = "";
  };
  const handleClearAll = () => {
    setImages([]);
  };

  const handleProofClear = () => {
    setpoofImages([]);
  };
  const Amenitiesdata = [
    {
      icon: "/wifi.svg",
      name: "wifi",
    },
    {
      icon: "/Water.svg",
      name: "Water",
    },
    {
      icon: "/charger.svg",
      name: "Power",
    },
    {
      icon: "/parking.svg",
      name: "Parking",
    },
    {
      icon: "/shield.svg",
      name: "Security",
    },
  ];
  const btnStyle = `bg-renatal-blue text-white py-2.5 px-9 rounded-lg w-fit capitalize font-semibold`;

  const validate = () => {
    const newErrors = {};
    const rawRent = Number(removeCommas(rent));
    if (!rawRent || rawRent <= 0) {
      newErrors.rent = "Invalid amount";
    }
    if (!/^\d{5}$/.test(zipCode)) {
      newErrors.zipCode = "required";
    }
    if (!/^\d+$/.test(myBathRooms)) {
      newErrors.myBathRooms = "required";
    }
    if (!/^\d+$/.test(mybedroom)) {
      newErrors.mybedroom = "required";
    }
    if (!/^\d+$/.test(mykitchen)) {
      newErrors.mykitchen = "required";
    }
    if (!title.trim()) {
      newErrors.title = "required";
    }
    if (!description.trim()) {
      newErrors.description = "required";
    }

    if (!mystate.trim()) {
      newErrors.mystate = "required";
    }
    if (!city.trim()) {
      newErrors.city = "required";
    }
    if (!street.trim()) {
      newErrors.street = "required";
    }
    if (images.length < 3) {
      newErrors.images = "Please upload at least 3 images.";
    }
    if (poofImages.length < 2) {
      newErrors.poofImages = "Please upload at least 2 images";
    }

    if (selectedAmenities.length === 0) {
      newErrors.selectedAmenities = "Select at least 1 amenity";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };


  const handleAmenityChange = (amenityName, checked) => {
    let updated;

    if (checked) {
      updated = [...selectedAmenities, amenityName];
    } else {
      updated = selectedAmenities.filter((item) => item !== amenityName);
    }

    setSelectedAmenities(updated);

    if (touched.selectedAmenities) {
      if (updated.length > 0) {
        setErrors((prev) => ({
          ...prev,
          selectedAmenities: undefined,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          selectedAmenities: "Select at least 1 amenity",
        }));
      }
    }
  };

const handleSubmit = async () => {
  setTouched({
    title: true,
    mystate: true,
    city: true,
    street: true,
    zipCode: true,
    rent: true,
    description: true,
    images: true,
    poofImages: true,
    selectedAmenities: true,
  });

  if (!validate()) {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const rawRent = Number(removeCommas(rent));

  const propertyPayload = {
    title,
    description,
    "address[zipCode]": zipCode,
    "address[state]": mystate,
    "address[city]": city,
    "address[street]": street,
    propertyType: "apartment",
    numberOfBedrooms: mybedroom,
    numberOfBathrooms: myBathRooms,
    numberOfKitchen: mykitchen,
    "amenities[wifi]": amenityFlags.wifi,
    "amenities[power]": amenityFlags.Power,
    "amenities[parking]": amenityFlags.Parking,
    "amenities[water]": amenityFlags.Water,
    "amenities[securitySystem]": amenityFlags.Security,
    price: rawRent,
    paymentTerm: "annually",
    visibility: "public property",
    availability,
    proofOfOwnership: poofImages,
    images,
  };

  const formData = new FormData();

  Object.entries(propertyPayload).forEach(([key, value]) => {
    // 🟩 1. Files
    if (
      Array.isArray(value) &&
      (key === "images" || key === "proofOfOwnership")
    ) {
      if (value.length === 0) {
        throw new Error(`Missing files for ${key}`);
      }
      value.forEach((file) => {
        if (file instanceof File) {
          formData.append(`${key}[]`, file);
        }
      });
    }

    // 🟩 2. Booleans
    else if (typeof value === "boolean") {
      formData.append(key, String(value));
    }

    // 🟩 3. Non-empty strings/numbers
    else if (value !== null && value !== undefined && value !== "") {
      formData.append(key, String(value));
    }

    // 🟨 4. Skipped values (null, undefined, empty) — intentional
  });

  try {
  const response = await axios.post(
    "https://splendid-bluejay-eminently.ngrok-free.app/api/v1/property/listing",
    formData, // Ensure this is a valid FormData object
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "69420",
        // Let Axios set Content-Type for FormData
      },
    }
  );

  console.log("Raw Axios response:", response.data);

  toast.success("Property listed!", {
    style: {
      backgroundColor: "#0C2D5B",
      color: "#fff",
      fontSize: "0.8rem",
      padding: "8px 12px",
    },
  });

  setSuccess(true);
} catch (error) {
  console.error("Property listing error (raw):", error);

  const errorMessage =
    error?.response?.data?.message || "Error listing property!";

  toast.error(errorMessage, {
    style: {
      backgroundColor: "#0C2D5B",
      color: "#fff",
      fontSize: "0.8rem",
      padding: "8px 12px",
    },
  });
}

};


  return (
    <div
      className={`lato-regular ${
        success ? "h-[87vh] flex justify-center items-center" : "pb-8 pt-4"
      }`}
      ref={formRef}
    >
      {!success && (
        <div>
          <PropertyForm
            errors={errors}
            touched={touched}
            setErrors={setErrors}
            typeDrop={typeDrop}
            setTypeDrop={setTypeDrop}
            handleAmenityChange={handleAmenityChange}
            filter={filter}
            setFilter={setFilter}
            handleFieldChange={handleFieldChange}
            handleBlur={handleBlur}
            handleClearAll={handleClearAll}
            handleProofClear={handleProofClear}
            title={title}
            mystate={mystate}
            city={city}
            street={street}
            rent={rent}
            zipCode={zipCode}
            mybedroom={mybedroom}
            myBathRooms={myBathRooms}
            mykitchen={mykitchen}
            description={description}
            images={images}
            handleProofChange={handleProofChange}
            poofImages={poofImages}
            handleFileChange={handleFileChange}
            Amenitiesdata={Amenitiesdata}
            selectedAmenities={selectedAmenities}
            availability={availability}
            setAvailability={setAvailability}
          />
          <section className="flex justify-center items-center gap-x-5 mt-6">
            <Link to={AppRoutes.landlordProperty}>
              <div className="border flex items-center py-2.5 cursor-pointer gap-x-4 justify-center border-renatal-blue/70 font-semibold px-9 rounded-lg">
                <p>Cancel</p>
                <div>&times;</div>
              </div>
            </Link>

            <button className={`${btnStyle}`} onClick={handleSubmit}>
              Publish Property
            </button>
          </section>
        </div>
      )}
      {success && <Success />}
    </div>
  );
};

export default AddProperty;
