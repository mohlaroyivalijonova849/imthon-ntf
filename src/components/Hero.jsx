import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Stack,
  Box,
} from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Hero() {
  return (
    <div className="container">
      <Stack
        direction="row"
        spacing={2}
        container
        alignItems="center"
        sx={{ paddingY: 10 }}
      >
        <div>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            We are changing the way people shop
          </Typography>
          <Typography variant="body1" sx={{ mt: 4, maxWidth: "xl" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </Typography>
          <Box sx={{ mt: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/products"
            >
              Our Products
            </Button>
          </Box>
        </div>
        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={hero1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hero2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hero3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hero4} />
            </SwiperSlide>
          </Swiper>
        </div>
      </Stack>
    </div>
  );
}

export default Hero;
