import { Route, Routes } from "react-router-dom";
import { About } from "./Pages/About/About";
import { Landing } from "./Pages/Landing/Landing";
import { SquatchSounds } from "./Pages/SquatchSounds/SquatchSounds";

const SiteRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/squatch-sounds" element={<SquatchSounds />} />

            {/* <Route
                path="/private/*"
                element={
                    <PrivateRoute>
                        <Routes>
                            <Route path="/my-songs" element={<MySongs />} />
                        </Routes>
                    </PrivateRoute>
                }
            /> */}
        </Routes>
    );
}

export default SiteRoutes;