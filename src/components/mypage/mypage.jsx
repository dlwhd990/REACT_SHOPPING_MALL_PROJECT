import React, { useRef, useState, useEffect } from "react";
import styles from "./mypage.module.css";

const Mypage = ({
  ImageInputRound,
  userDataRepository,
  userData,
  authService,
}) => {
  let nameRef = useRef();

  const [file, setFile] = useState(userData.imageURL);
  const [updated, setUpdated] = useState({
    id: userData.id,
    nickname: userData.nickname,
    imageURL: userData.imageURL,
  });
  const [dataSaveCall, setDataSaveCall] = useState(false);
  console.log(updated);
  console.log(file);
  const [tmpName, setTmpName] = useState(userData.nickname);

  const onFileChange = (newfile) => {
    setFile(newfile);
    console.log(file);
  };
  console.log(file);

  const onChange = (e) => {
    setTmpName(e.target.value);
  };

  const saveData = () => {
    setUpdated({
      id: userData.id,
      nickname: nameRef.current.value,
      imageURL: file,
    });
    setDataSaveCall(!dataSaveCall);
  };

  useEffect(() => {
    if (dataSaveCall) {
      userDataRepository.saveUserData(userData.id, updated);
      setDataSaveCall(!dataSaveCall);
      window.alert("회원정보가 수정되었습니다.");
    }
  }, [dataSaveCall]);

  return (
    <section className={styles.mypage}>
      <section className={styles.container}>
        <div className={styles.info}>
          <div className={styles.info_top}>
            <div className={styles.part_image}>
              {file && (
                <ImageInputRound image={file} onFileChange={onFileChange} />
              )}
            </div>
            <div className={styles.top_right}>
              <div className={styles.part_name}>
                <span className={styles.name_title}>닉네임</span>
                <input
                  ref={nameRef}
                  type="text"
                  value={tmpName}
                  className={styles.name_input}
                  onChange={onChange}
                />
              </div>
              <div className={styles.part_email}>
                <span className={styles.email_title}>이메일</span>
                <span className={styles.email_input}>
                  {authService.check().email}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.part_save_button}>
            <button className={styles.save_button} onClick={saveData}>
              저장
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Mypage;
