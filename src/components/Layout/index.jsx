import { Route, Routes } from "react-router-dom";
import Flowers from "../../pages/Flowers";
import Error from "../../pages/Error";
import Home from "../../pages/Home"
import Generic from "../../pages/Generic"
import Plants from '../../pages/Plants'
import SinglePlant from "../../pages/SinglePlant";

const index = () => {
  return (
    <section>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/plants/:id" element={<SinglePlant />} />
          <Route path="/gifts" element={<Generic />} />
          <Route path="/discounts" element={<Generic />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </section>
  );
};

export default index;
