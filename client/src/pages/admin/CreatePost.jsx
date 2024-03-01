import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { uploadPost } from "../../service/post.service";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Button, Input } from "antd";
import UploadSingle from "../../components/admin/UploadSingle";

const CreatePost = () => {
  const dispatch = useDispatch();
  const mdParser = new MarkdownIt();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const [author, setAuthor] = useState("");
  const [coverImg, setCoverImg] = useState("");

  // hàm onChange content post
  function handleEditorChange({ html }) {
    setContent(html);
  }

  // hàm submit form tạo post
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: uuidv4(),
      title: title,
      content: content,
      author: author,
      cover_img: coverImg,
      view: 0,
      status: 0, // dự định: 0 đã tạo, 1 đã đăng, 2 đã ẩn
      created_at: new Date().toLocaleString(),
    };
    console.log(newPost);
    // dispatch(uploadPost(newPost));
  };
  return (
    <>
      <div className="w-full h-[100vh] p-4">
        <h3 className="text-2xl font-semibold text-black">Create post</h3>
        <form className="pb-10" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-3">
            <label className="text-lg font-medium" htmlFor="">
              Title post
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="py-2 my-2"
              placeholder="enter title"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-lg font-medium" htmlFor="">
              Cover Image
            </label>
            <Input
              value={coverImg}
              onChange={(e) => setCoverImg(e.target.value)}
              className="py-2 my-2"
              placeholder="enter url cover img"
            />
          </div>
          <UploadSingle title={title}></UploadSingle>
          <span className="text-lg font-medium">Content</span>
          <MdEditor
            className="h-[600px] mt-2"
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
          <div className="flex justify-between items-center mt-3">
            <div className="flex flex-col w-[60%]">
              <label className="text-lg font-medium" htmlFor="">
                Author
              </label>
              <Input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="py-2 my-2"
                placeholder="enter author"
              />
            </div>
            <Button danger htmlType="submit">
              Lưu bài viết
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
