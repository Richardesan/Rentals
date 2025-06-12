import React, { useState, useEffect } from "react";
import { useAuth } from "../../../context/authContext";
import { getAccount, updateAccount } from "../../../services/queries";
import UserModal from "./component/updateUser";
import { toast } from "react-toastify";
import UpdateUserNin from "./component/updateUserNin";
import UpdateUserPassword from "./component/updateUserPassword";
import UpdateProfileImg from "./component/updateProfileImg";
import UploadSignature from "./component/uploadSignature";

const Profile = () => {
  const { user, setAuthUser, token } = useAuth();

  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [openNin, setOpenNin] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [openImg, setOpenImg] = useState(false);
  const [openSignature, setOpenSignature] = useState(false);
  const [formData, setFormData] = useState({
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
    description: user?.description || "",
  });

  function maskNumber(input) {
    const str = input.toString();
    const visiblePart = str.slice(-3);
    const maskedPart = "*".repeat(Math.max(str.length - 3, 0));
    return maskedPart + visiblePart;
  }
  const updateProfile = async () => {
    setLoading(true);
    try {
      const data = await updateAccount({ token, formData });
      console.log(data);
      toast.success("Profile updated successfully!", {
        style: {
          backgroundColor: "#0C2D5B",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    } catch (err) {
      toast.error("Failed to update profile", {
        style: {
          backgroundColor: "#C8170D",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    } finally {
      setLoading(false);
      setReload((prev) => !prev);
      setOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getUser = async () => {
    try {
      const data = await getAccount({ token });
      setAuthUser(data?.data);
    } catch (err) {
      console.error("Error fetching listings:", err);
    }
  };
  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token, reload]);
  function concatFirstLetters(str1, str2) {
    const first1 = str1.charAt(0) || "";
    const first2 = str2.charAt(0) || "";
    return first1 + first2;
  }
  const myImg = concatFirstLetters(user.lastname, user.firstname);
  return (
    <div className="lato-regular">
      <section>
        <article className="flex justify-between items-center gap-x-10 mt-8">
          <div className="flex w-full justify-between items-center rounded-lg  p-5 shadow-[0px_4px_4px_0px_#00000040]">
            <div className="space-y-1">
              {user?.profilePicture ? (
                <img
                  src={user?.profilePicture}
                  className="w-16 h-16 object-cover object-top rounded-full overflow-hidden"
                />
              ) : (
                <p className="w-16 h-16 flex items-center justify-center text-white bg-renatal-blue rounded-full text-2xl">
                  {myImg}
                </p>
              )}
              <p className="text-lg font-bold">Avatar</p>
              <p className="text-rental-dark/70">
                Upload .PNG or .JPEG up to 2MB
              </p>
            </div>
            <p
              onClick={() => setOpenImg(true)}
              className=" border cursor-pointer border-rental-deep rounded-md font-bold py-2 px-8"
            >
              Upload
            </p>
          </div>

          <div className="flex w-full justify-between items-center rounded-lg  p-5 shadow-[0px_4px_4px_0px_#00000040]">
            <div className="space-y-1">
              {user?.signature ? (
                <img
                  src={user?.signature}
                  className="w-16 h-16 object-cover object-top rounded-full overflow-hidden"
                />
              ) : (
                <p className="w-16 h-16 flex items-center justify-center text-white bg-renatal-blue rounded-full text-2xl">
                  S
                </p>
              )}
              <p className="text-lg font-bold">Signature</p>
              <p className="text-rental-dark/70">
                Upload .PNG or .JPEG up to 2MB
              </p>
            </div>
            <p
              onClick={() => setOpenSignature(true)}
              className=" border cursor-pointer border-rental-deep rounded-md font-bold py-2 px-8"
            >
              Upload
            </p>
          </div>
        </article>
        <article className="flex justify-between items-center rounded-lg  p-5 shadow-[0px_4px_4px_0px_#00000040]">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Personal Information</h1>
            <div className="">
              <p className="text-lg font-bold mb-1">Name</p>
              <p className="text-rental-dark/70">
                {user.firstname} {user.lastname}
              </p>
            </div>
            <div>
              <p className="text-lg font-bold">Email</p>
              <p className="text-rental-dark/70">{user.email}</p>
            </div>
            <div>
              <p className="text-lg font-bold">Bio</p>
              <p className="text-rental-dark/70 w-10/12">{user.description}</p>
            </div>
          </div>
          <p
            className=" border border-rental-deep rounded-md font-bold py-2 px-8 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Edit
          </p>
        </article>
        <article className="flex justify-between mt-8 items-center rounded-lg  p-5 shadow-[0px_4px_4px_0px_#00000040]">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Account Information</h1>

            <p className="text-lg font-bold">Password</p>
            <p className="text-rental-dark/70">******************</p>
          </div>
          <p
            className=" border border-rental-deep rounded-md font-bold py-2 px-8 cursor-pointer"
            onClick={() => setOpenPassword(true)}
          >
            Edit
          </p>
        </article>
        <article className="flex justify-between mt-8 items-center rounded-lg  p-5 shadow-[0px_4px_4px_0px_#00000040]">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Identity</h1>

            <p className="text-lg font-bold">NIN</p>
            <p className="text-rental-dark/70">
              {maskNumber(user.identificationNumber)}
            </p>
          </div>
          <p
            className=" border border-rental-deep rounded-md font-bold py-2 px-8 cursor-pointer"
            onClick={() => setOpenNin(true)}
          >
            Edit
          </p>
        </article>
      </section>
      <UserModal
        isOpen={open}
        onClose={() => setOpen(false)}
        formData={formData}
        updateProfile={updateProfile}
        setFormData={setFormData}
        handleChange={handleChange}
        loading={loading}
      />
      <UpdateUserNin
        isOpen={openNin}
        onClose={() => setOpenNin(false)}
        setReload={setReload}
      />
      <UpdateUserPassword
        isOpen={openPassword}
        onClose={() => setOpenPassword(false)}
        setReload={setReload}
      />
      <UpdateProfileImg
        isOpen={openImg}
        onClose={() => setOpenImg(false)}
        setReload={setReload}
        myImg={myImg}
        user={user}
      />
      <UploadSignature
        isOpen={openSignature}
        onClose={() => setOpenSignature(false)}
        setReload={setReload}
        user={user}
      />
    </div>
  );
};

export default Profile;
