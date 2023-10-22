import { Button } from '#ui/button';
import { Input } from '#ui/input/input';
import { Title } from '#ui/title/title';
import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks';
import { addNewPost } from '#features/add-post/add-post.slice';
import { ImageUploader } from '#ui/image-uploader/image-uploader';

export const AddPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [lessonNumber, setLessonNumber] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();

  return (
    <MainTemplateWrapper>
      <ContentWithPaddings>
        <Main>
          <Title>Add post</Title>
          <BodyContainer>
            <TitleInputDiv>
              <Input
                labelText="Title"
                value={title}
                onChange={({ currentTarget }) => setTitle(currentTarget.value)}
              />
            </TitleInputDiv>
            <LessonAreaDiv>
              <LableTextDiv>
                <Input
                  labelText="Lesson number"
                  accept="image/*"
                  value={lessonNumber}
                  type="number"
                  inputMode="numeric"
                  min={0}
                  onChange={({ currentTarget }) =>
                    setLessonNumber(currentTarget.value)
                  }
                />
              </LableTextDiv>
             <ImageUploader file={file} onFileChange={(file) => setFile(file)}  />
            </LessonAreaDiv>
            <DescriptionInputDiv>
              <Input
                labelText="Description"
                value={description}
                onChange={({ currentTarget }) =>
                  setDescription(currentTarget.value)
                }
              />
            </DescriptionInputDiv>
            <TextareaDiv>
              <Input
                labelText="Text"
                value={text}
                onChange={({ currentTarget }) => setText(currentTarget.value)}
              />
            </TextareaDiv>

            <ButtonsDiv>
              <ButtonDeleteDiv>
                {' '}
                <Button variant="secondary2" onClick={() => {}}>
                  Delete post
                </Button>
              </ButtonDeleteDiv>

              <ButtonsDivAddCancel>
                <ButtonCancelDiv>
                  {' '}
                  <Button variant="secondary" onClick={() => {}}>
                    Cancel
                  </Button>
                </ButtonCancelDiv>
                <ButtonAddDiv>
                  {' '}
                  <Button
                    variant="primary"
                    onClick={() => {
                      if (file) {
                        dispatch(
                          addNewPost({
                            title,
                            description: '',
                            text,
                            lesson_num: 50,
                            image: file,
                          })
                        );
                      }
                    }}
                  >
                    Add post
                  </Button>
                </ButtonAddDiv>
              </ButtonsDivAddCancel>
            </ButtonsDiv>
          </BodyContainer>
        </Main>

        <Footer>
          <FooterDelimiter />
          <Year>{new Date().getFullYear()}</Year>
        </Footer>
      </ContentWithPaddings>
    </MainTemplateWrapper>
  );
};

const MainTemplateWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-primary-color);
`;

const ContentWithPaddings = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
`;

const BodyContainer = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px;
  margin: auto;
`;

const TitleInputDiv = styled.div`
  margin-bottom: 20px;
`;

const LessonAreaDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LableTextDiv = styled.div`
  margin-right: 20px;
`;

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

const UploadButtonDiv = styled.div``;

const DescriptionInputDiv = styled.div`
  margin-bottom: 20px;
`;

const TextareaDiv = styled.div`
  margin-bottom: 20px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ButtonDeleteDiv = styled.div``;

const ButtonsDivAddCancel = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

const ButtonCancelDiv = styled.div`
  margin-right: 30px;
`;

const ButtonAddDiv = styled.div``;

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  color: var(--text-secondary-color);
`;

const FooterDelimiter = styled.hr`
  width: 100%;
`;

const Year = styled.div``;
