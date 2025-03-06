import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImgContainerData {
  id_img: number;
  img_bg: string;
  img_logo: string;
  heading_patner_name: string;
  desc_patner: string;
}

interface ImgContainerDataState {
  images: ImgContainerData[];
  selectedImage?: ImgContainerData | null; // Menyimpan data yang dipilih
}

const initialState: ImgContainerDataState = {
  images: [
    { id_img: 1, img_bg: "wallpaper_jepang_fix.png", img_logo: "emaple", heading_patner_name: "Bengkel Jaya Oleng", desc_patner: "ini adalah patner pertama kali" },
    { id_img: 2, img_bg: "wallpaper_new.jpg", img_logo: "logo2", heading_patner_name: "Partner Kedua", desc_patner: "Ini adalah patner kedua" }
  ],
  selectedImage: null, // Awalnya tidak ada yang dipilih
};

const imgContainerSlice = createSlice({
  name: "imgContainerPatner",
  initialState,
  reducers: {
    getImageById: (state, action: PayloadAction<number>) => {
      const foundImage = state.images.find((img) => img.id_img === action.payload);
      state.selectedImage = foundImage || null; // Simpan hasil pencarian
    }
  }
});

export const { getImageById } = imgContainerSlice.actions;
export default imgContainerSlice.reducer;
export type {ImgContainerData};