import { useState } from "react";
import useShowToast from "./useShowToast";

//Used in Edit profile modal, and creating a post

const usePreviewImg = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const showToast = useShowToast();
	const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

	//runs when yoy select the image from file explorer
    const handleImageChange = (e) => {
		const file = e.target.files[0];
        //startsWith checks if its an image file, nothing to do with file name
		if (file && file.type.startsWith("image/")) {
			if (file.size > maxFileSizeInBytes) {
				showToast("Error", "File size must be less than 2MB", "error");
				setSelectedFile(null);
				return;
			}
			const reader = new FileReader();

			reader.onloadend = () => {
				setSelectedFile(reader.result);
			};

			//convert image file to base64 encoded string
            reader.readAsDataURL(file);
		} else {
			showToast("Error", "Please select an image file", "error");
			setSelectedFile(null);
		}
	};

	return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;