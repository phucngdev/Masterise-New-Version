import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const UPLOAD_FOLDER = "files";

export default function MyEditor() {
  const [change, setChange] = useState();
  console.log(change);
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file
            .then((file) => {
              const fileName = file.name;
              console.log(fileName);
              const storageRef = ref(storage, `${UPLOAD_FOLDER}/${fileName}`);
              const task = uploadBytes(storageRef, file);
              task
                .then((snapshot) => {
                  getDownloadURL(snapshot.ref)
                    .then((downloadURL) => {
                      resolve({ default: downloadURL });
                    })
                    .catch((error) => {
                      reject(error);
                    });
                })
                .catch((error) => {
                  reject(error);
                });
            })
            .catch((error) => {
              reject(error);
            });
        });
      },
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  return (
    <div className="App">
      <CKEditor
        config={{
          extraPlugins: [uploadPlugin],
        }}
        editor={ClassicEditor}
        onReady={(editor) => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        onChange={(event, editor) => {
          setChange(editor.getData());
        }}
      />
    </div>
  );
}
