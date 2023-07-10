import './App.css';
import { Chart } from "react-google-charts";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from './assets/jacket.jpg';
import img2 from './assets/dress.jpg';
import img3 from './assets/jeans.jpg';
import img4 from './assets/kros.jpg';


export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];


export const options = {
  title: "My Daily Activities",
};

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>
      <h2>1. Chart component</h2>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <h2>2. Chart component</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={img1} alt="img"></img></SwiperSlide>
        <SwiperSlide><img src={img2} alt="img"></img></SwiperSlide>
        <SwiperSlide><img src={img3} alt="img"></img></SwiperSlide>
        <SwiperSlide><img src={img4} alt="img"></img></SwiperSlide>

      </Swiper>
    </div>
  );
}

export default App;
