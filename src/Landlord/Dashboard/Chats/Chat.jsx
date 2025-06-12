import React, { useState, useRef } from "react";

const people = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

const Chat = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [messageMap, setMessageMap] = useState({
    1: [
      { type: "text", content: "Hey! How are you?", sender: "them" },
      { type: "text", content: "I'm good, thanks! And you?", sender: "you" },
      { type: "text", content: "Doing well! Ready for the meeting?", sender: "them" },
      { type: "text", content: "Doing well! Ready for the meeting?", sender: "them" },
      { type: "text", content: "Doing well! Ready for the meeting?", sender: "them" },
      { type: "text", content: "Doing well! Ready for the meeting?", sender: "them" },
    ],
  });
  
  const [currentInput, setCurrentInput] = useState("");
  const [filePreviews, setFilePreviews] = useState([]);
  const [uploadType, setUploadType] = useState(null); 
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const [showUploadOptions, setShowUploadOptions] = useState(false);
  const fileRef = useRef(null);
  const mediaRef = useRef(null);
  const handleUploadChoice = (type) => {
    setUploadType(type); 
    setShowUploadOptions(false);
    if (type === "file") fileRef.current?.click();
    if (type === "media") mediaRef.current?.click();
  };

  const selectedPerson = people.find((p) => p.id === selectedId);


  const handleSendMessage = () => {
    if (
      !selectedId ||
      (currentInput.trim() === "" && filePreviews.length === 0)
    )
      return;

    const newMessages = [];

    if (currentInput.trim() !== "") {
      newMessages.push({ type: "text", content: currentInput.trim(), sender: "you" });
    }

    filePreviews.forEach((file) => {
      newMessages.push({
        type: file.uploadedAs === "media" ? "media" : "file",
        content: file.url,
        name: file.name,
        fileType: file.type,
        sender: "you",
      });
    });

    setMessageMap((prev) => ({
      ...prev,
      [selectedId]: [...(prev[selectedId] || []), ...newMessages],
    }));

    setCurrentInput("");
    setFilePreviews([]);
  };
  const handleFileChange = (e) => {
    setSelectedImageIdx(0);
    const files = Array.from(e.target.files || []);
    const previews = files.map((file) => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
      uploadedAs: uploadType,
    }));

    setFilePreviews(previews);
  };

  return (
    <section className="flex items-start justify-between h-screen">
      {/* Left Panel */}
      <div className="basis-[24%] p-4 bg-gray-100 h-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-rental-deep/20 outline-none p-3 rounded-full mb-4"
        />
        <ul className="space-y-2">
          {people.map((person) => (
            <li
              key={person.id}
              className={`cursor-pointer p-3 rounded-lg ${
                selectedId === person.id
                  ? "bg-rental-deep text-white"
                  : "bg-white"
              }`}
              onClick={() => {
                setSelectedId(person.id);
                setCurrentInput("");
              }}
            >
              {person.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel */}
      <div className="basis-[75%] bg-rental-deep/10 rounded-tl-lg rounded-bl-lg p-4 h-full flex flex-col">
        {selectedPerson ? (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Chat with {selectedPerson.name}
            </h2>

            {/* Messages */}
          {/* Messages */}
<div className="flex-1 overflow-y-auto space-y-2 mb-4 pr-2">
  {(messageMap[selectedId] || []).map((msg, idx) => (
    <div
      key={idx}
   className={`p-3 rounded-tl-md rounded-bl-md rounded-br-md w-max max-w-lg break-words ${
    msg.sender === "you"
      ? "bg-renatal-blue text-white ml-auto" // Your custom bg for your messages
      : "bg-white text-renatal-blue"  // Their messages background
  }`}
    >
      {msg.type === "text" ? (
        <p>{msg.content}</p>
      ) : msg.type === "media" && msg.fileType.startsWith("image") ? (
        <div>
          <img
            src={msg.content}
            alt={msg.name}
            className="max-h-48 rounded"
          />
        </div>
      ) : msg.type === "media" && msg.fileType.startsWith("video") ? (
        <div>
          <p className="text-xs text-gray-500 mb-1">{msg.name}</p>
          <video src={msg.content} controls className="max-h-48 rounded" />
        </div>
      ) : (
        <div>
          <p className="text-xs text-gray-500 mb-1">{msg.name}</p>
          <a href={msg.content} download className="text-blue-600 underline">
            Download file
          </a>
        </div>
      )}
    </div>
  ))}
</div>

            {/* File Previews */}
            {filePreviews.length > 0 && (
              <div className="space-y-3 mb-4">
                {filePreviews.map((file, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-white rounded-md shadow-md w-max max-w-xs"
                  >
                 
                    {/* Only preview if uploadType is 'media' */}
                  {uploadType === "media" && filePreviews.some(file => file.type.startsWith("image")) && (
  <div className="mb-4">
    {/* Filter images once */}
    {(() => {
      const images = filePreviews.filter(file => file.type.startsWith("image"));

      return (
        <>
          {/* Main Image Preview */}
          <img
    src={images[selectedImageIdx]?.url}
    alt={images[selectedImageIdx]?.name || "preview"}
    className="max-h-40 rounded"
  />
 

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 flex-wrap">
              {images.map((file, idx) => (
                <img
                  key={idx}
                  src={file.url}
                  alt={file.name}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                    selectedImageIdx === idx ? "border-rental-deep" : "border-transparent"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      );
    })()}
  </div>
)}

                  </div>
                ))}
              </div>
            )}

            {showUploadOptions && (
              <div className="absolute bottom-16 right-20 bg-white shadow-lg rounded-lg p-3 z-10 w-52">
                <button
                  onClick={() => handleUploadChoice("media")}
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  🖼️ Photos & Videos
                </button>
                <button
                  onClick={() => handleUploadChoice("file")}
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  📁 Files
                </button>
              </div>
            )}

            <div className="flex items-center gap-2  w-full">
              <div className="flex items-center gap-2  relative w-full">
                {/* Upload Icon Button */}
                <button onClick={() => setShowUploadOptions((prev) => !prev)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 hover:text-rental-deep"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828l6.586-6.586a4 4 0 00-5.656-5.656L6.343 10.343a6 6 0 108.485 8.485"
                    />
                  </svg>
                </button>

                {/* Message Input */}
                <input
                  type="text"
                  placeholder="Type a message"
                  className="flex-1 bg-white p-3 rounded-full outline-none w-full"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                />

                {/* Send Button */}
                <button
                  onClick={handleSendMessage}
                  className="bg-rental-deep text-white px-4 py-2 rounded-full"
                >
                  Send
                </button>

                {/* Hidden Inputs */}
                <input
                  type="file"
                  multiple
                  ref={fileRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  ref={mediaRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-500 m-auto">
            Select a person to start chatting
          </p>
        )}
      </div>
    </section>
  );
};

export default Chat;
