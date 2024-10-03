import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles for toast notifications
import { Modal, Input, Button, Alert } from "antd"; // Import Ant Design components
import ValentineComponent2 from "./Comp2";

const ValentineComponent = () => {
  const [button1Size, setButton1Size] = useState({
    width: 150,
    height: 50,
    fontSize: 20,
  });
  const [valentineVisibility, setValentineVisibility] = useState(true);
  const [yayVisibility, setYayVisibility] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [showSecondImage, setShowSecondImage] = useState(false); // To show the second image after 2 seconds
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showComponent2, setShowComponent2] = useState(false); // State for showing ValentineComponent2

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Handle increasing the size of Button 1 when Button 2 is clicked
  const handleButton2Click = () => {
    toast.error("Error 404"); // Toast notification for No button
    setButton1Size((prevSize) => ({
      width: prevSize.width * 1.1,
      height: prevSize.height * 1.1,
      fontSize: prevSize.fontSize + 1,
    }));
  };

  // Handle the "Yes" button click, show the YAYYYY message, and then open the camera
  const handleButton1Click = () => {
    toast.success("Ok 200"); // Toast notification for Yes button
    setValentineVisibility(false);
    setTimeout(() => {
      setYayVisibility(true);
      setTimeout(() => {
        setYayVisibility(false); // Hide the YAYYYY message
        openCamera(); // Open the camera
      }, 5000); // Show YAYYYY message for 5 seconds
    }, 300);
  };

  // Open the camera and stream to the video element
  const openCamera = async () => {
    setCameraVisible(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // Capture the image from the video stream
  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/png");
    setImageSrc(imageData);
    console.log("hello");

    // Stop the video stream after capturing the image
    video.srcObject.getTracks().forEach((track) => track.stop());
    setCameraVisible(false); // Hide the camera once the picture is taken

    // Show second image after 2 seconds
    setTimeout(() => {
      setShowSecondImage(true);
      // Open modal after displaying the second image
      setTimeout(() => {
        setModalVisible(true);
      }, 3000); // 3 seconds after showing the second image
    }, 2000);
  };

  // Handle password submission
  const handlePasswordSubmit = () => {
    if (password === "Udaipur" || password === "udaipur") {
      setShowComponent2(true); // Show ValentineComponent2
      toast.success("Finally, you guessed it!"); // Show success toast
      setModalVisible(false); // Close the modal
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
    } else {
      setAlertMessage("Hint: Our most magical kiss happened here!"); // Show hint alert
    }
  };
  if(showComponent2){
    return <ValentineComponent2/>
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <ToastContainer /> {/* Toast notifications will be displayed here */}

      {/* Valentine question and buttons */}
      {valentineVisibility && (
        <div>
          <div style={{ color: "red", fontWeight: "bold", fontSize: "40px" }}>
          Can I keep you forever ?
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
            <div
              id="buton1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
                color: "white",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                width: `${button1Size.width}px`,
                height: `${button1Size.height}px`,
                fontSize: `${button1Size.fontSize}px`,
              }}
              onClick={handleButton1Click}
            >
              Yes
            </div>

            <div
              id="buton2"
              style={{
                width: "150px",
                height: "50px",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={handleButton2Click}
            >
              No
            </div>
          </div>
        </div>
      )}

      {/* YAYYYY message */}
      {yayVisibility && (
        <div style={{ marginTop: "40px" }}>
          <div style={{ fontSize: "60px", fontWeight: "bold", width: "400px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "lightcoral", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.5)" }}>
            YAYYYY
          </div>
          <img
            id="new-image"
            src="https://media.tenor.com/dVMwRYiAGsAAAAAi/kiss.gif"
            alt="celebration gif"
            style={{ width: "320px", height: "256px", marginTop: "20px" }}
          />
        </div>
      )}

      {/* Camera feed and capture button */}
      {cameraVisible && (
        <div style={{ marginTop: "40px", display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <video
              ref={videoRef}
              autoPlay
              style={{ width: "384px", height: "288px", backgroundColor: "black" }}
            ></video>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "10px",
                padding: "10px 20px",
                marginTop: "20px",
              }}
              onClick={captureImage}
            >
              Capture Photo
            </button>
          </div>
        </div>
      )}

      {/* Display the captured image */}
      {imageSrc && (
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "40px" }}>
          {/* What your laptop sees */}
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>What Your Laptop Sees:</h2>
            <img
              src={imageSrc}
              alt="Captured"
              style={{ marginTop: "10px", width: "384px", height: "288px", borderRadius: "10px" }}
            />
          </div>

          {/* What I see */}
          {showSecondImage && (
            <div style={{ opacity: showSecondImage ? 1 : 0, transition: "opacity 1s, transform 1s", transform: showSecondImage ? "rotate(0deg)" : "rotate(12deg)" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>What I See:</h2>
              <img
                src="./what-i-see.jpg"
                alt="What I See"
                style={{ marginTop: "10px", width: "384px", height: "288px", borderRadius: "10px" }}
              />
            </div>
          )}
        </div>
      )}
      <canvas ref={canvasRef} width="640" height="480" style={{ display: "none" }}></canvas>

      {/* Ant Design Modal for Password Input */}
      <Modal
        title="Enter Password"
        open={modalVisible}
        onCancel={() => setModalVisible(false)} // Close the modal
        footer={null} // No footer buttons
      >
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <Button type="primary" onClick={handlePasswordSubmit} style={{ marginTop: "12px" }}>
          Enter
        </Button>
        {alertMessage && (
          <Alert message={alertMessage} type="info" showIcon style={{ marginTop: "12px" }} />
        )}
      </Modal>
    </div>
  );
};

export default ValentineComponent;
