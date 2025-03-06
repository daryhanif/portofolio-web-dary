// import ImgContainerComponent from "./imgContainer.component";
import ImgContainerNavigationComponent from "./imgContainerNavigation.component";
import { RootState } from "../../app/stores.folders/store";
import { useSelector } from "react-redux";

import { FC } from "react";

const MainContainer: FC = () => {
    // Mengambil selectedImage dari Redux store
    const selectedImage =  useSelector((state: RootState) => state.imgContainer.images);
    console.log(selectedImage);
    if (!selectedImage) {
        return <div>Tidak ada gambar yang dipilih.</div>;
    }


    return (
        <>
        {selectedImage.map((item) => {
            <div>
                <ImgContainerNavigationComponent 
                        id_img={item.id_img}
                        img_logo={`public/assets/${item.img_logo}`} 
                        heading_patner_name={item.heading_patner_name} 
                />
            </div>
        })}

            {/* <ImgContainerComponent 
                img_bg={selectedImage.img_bg} 
                heading_patner_name={selectedImage.heading_patner_name} 
                desc_patner={selectedImage.desc_patner}
            /> */}
        </>
    );
};

export default MainContainer;
