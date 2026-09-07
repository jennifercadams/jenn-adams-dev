import * as React from "react";
import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import App from "./App.js";
import '@fontsource-variable/montserrat/wght.css';

createRoot(document.getElementById("root")!).render(<StrictMode><App/></StrictMode>)
