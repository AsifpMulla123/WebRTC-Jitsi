import React, { useState } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

function App() {
  const [callStarted, setCallStarted] = useState(false);
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">WebRTC Video Call Application</h1>
      {!callStarted ? (
        <button
          className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg"
          onClick={() => setCallStarted(true)}
        >
          Start Call
        </button>
      ) : (
        <>
          <JitsiMeeting
            domain="meet.jit.si"
            roomName="MyAwesomeMeeting"
            configOverwrite={{
              startWithAudioMuted: true,
              startWithVideoMuted: false,
              prejoinPageEnabled: false,
              disableDeepLinking: true,
              defaultLanguage: "en",
            }}
            interfaceConfigOverwrite={{
              SHOW_JITSI_WATERMARK: false,
              SHOW_WATERMARK_FOR_GUESTS: false,
              SHOW_BRAND_WATERMARK: false,
              BRAND_WATERMARK_LINK: "",
              MOBILE_APP_PROMO: false,
              SHOW_PROMOTIONAL_CLOSE_PAGE: false,
            }}
            getIFrameRef={(iframeRef) => {
              iframeRef.style.height = "500px";
              iframeRef.style.width = "100%";
            }}
          />
          <button
            className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg shadow-lg mt-4"
            onClick={() => setCallStarted(false)}
          >
            End Call
          </button>
        </>
      )}
    </div>
  );
}

export default App;
