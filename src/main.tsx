import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-international-phone/style.css";

import { initGTM } from "./services/gtm";

initGTM('GTM-T7MPD9W5');

createRoot(document.getElementById("root")!).render(<App />);
