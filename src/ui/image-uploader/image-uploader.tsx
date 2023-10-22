import styled from 'styled-components';
import { InputFile } from '#ui/input/input-file';
import { useEffect, useState } from 'react';

type Props = {
  file: File | null;
  onFileChange: (arg: File) => void;
};

export const ImageUploader: React.FC<Props> = ({ onFileChange, file }) => {
  const [previewImg, setPreviewImg] = useState('');
  useEffect(() => {
    if (previewImg) {
      URL.revokeObjectURL(previewImg);
    }
    if (file !== null) {
      setPreviewImg(URL.createObjectURL(file));
    }
  }, [file]);

  return (
    <>
      <UploadAreaDiv>
        <InputFile
          labelText="Image"
          onChange={({ currentTarget }) =>
            onFileChange(currentTarget.files![0])
          }
        />
      </UploadAreaDiv>
      <ImagePreviewSrc>
        <ImgPreview src={previewImg} alt="" />
      </ImagePreviewSrc>
    </>
  );
};

const UploadAreaDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImagePreviewSrc = styled.div`
  height: 100px;
  width: 100px;
  margin: 20px;
`;

const ImgPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: transparent;
`;
