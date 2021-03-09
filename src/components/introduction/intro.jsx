import React, { useEffect, useState } from "react";
import styles from "./intro.module.css";
import Modal from "./modal/modal";

const Intro = (props) => {
  const [selected, setSelected] = useState(null);

  const friends = {
    1: {
      id: 1,
      name: "APEACH",
      description:
        "Secret Forest의 복숭아 나무에서 유전자 변이로 태어난 어피치. Secret Forest의 풍부한 햇살을 받아 유독 돋보이는 분홍색을 띱니다. 복숭아 나무에서 탈출한 뒤, Friends City에서 맨 처음 튜브를 만나게 됩니다. 튜브와의 인연으로 Friends City에서 어피치는 다양한 친구들을 만나며 흥미로운 경험을 하게 됩니다. 섹시한 뒤태와 아름다운 분홍빛을 무기로 친구들을 유혹해 보지만, 본능적인 장난기 때문인지 친구들은 항상 어피치를 경계합니다. 그럼에도 아랑곳하지 않고 넘치는 흥을 뿜어내며 오늘도 어피치는 친구들에게 장난을 겁니다.",
      image: "../../images/apeach_bob.png",
    },
    2: {
      id: 2,
      name: "MUZI",
      description:
        "Secret Forest의 복숭아 나무에서 유전자 변이로 태어난 어피치. Secret Forest의 풍부한 햇살을 받아 유독 돋보이는 분홍색을 띱니다. 복숭아 나무에서 탈출한 뒤, Friends City에서 맨 처음 튜브를 만나게 됩니다. 튜브와의 인연으로 Friends City에서 어피치는 다양한 친구들을 만나며 흥미로운 경험을 하게 됩니다. 섹시한 뒤태와 아름다운 분홍빛을 무기로 친구들을 유혹해 보지만, 본능적인 장난기 때문인지 친구들은 항상 어피치를 경계합니다. 그럼에도 아랑곳하지 않고 넘치는 흥을 뿜어내며 오늘도 어피치는 친구들에게 장난을 겁니다.",
      image: "../../images/muzi.png",
    },
    3: {
      id: 3,
      name: "CON",
      description:
        "Secret Forest의 복숭아 나무에서 유전자 변이로 태어난 어피치. Secret Forest의 풍부한 햇살을 받아 유독 돋보이는 분홍색을 띱니다. 복숭아 나무에서 탈출한 뒤, Friends City에서 맨 처음 튜브를 만나게 됩니다. 튜브와의 인연으로 Friends City에서 어피치는 다양한 친구들을 만나며 흥미로운 경험을 하게 됩니다. 섹시한 뒤태와 아름다운 분홍빛을 무기로 친구들을 유혹해 보지만, 본능적인 장난기 때문인지 친구들은 항상 어피치를 경계합니다. 그럼에도 아랑곳하지 않고 넘치는 흥을 뿜어내며 오늘도 어피치는 친구들에게 장난을 겁니다.",
      image: "../../images/logo.png",
    },
    4: {
      id: 4,
      name: "RYAN",
      description:
        "Secret Forest의 복숭아 나무에서 유전자 변이로 태어난 어피치. Secret Forest의 풍부한 햇살을 받아 유독 돋보이는 분홍색을 띱니다. 복숭아 나무에서 탈출한 뒤, Friends City에서 맨 처음 튜브를 만나게 됩니다. 튜브와의 인연으로 Friends City에서 어피치는 다양한 친구들을 만나며 흥미로운 경험을 하게 됩니다. 섹시한 뒤태와 아름다운 분홍빛을 무기로 친구들을 유혹해 보지만, 본능적인 장난기 때문인지 친구들은 항상 어피치를 경계합니다. 그럼에도 아랑곳하지 않고 넘치는 흥을 뿜어내며 오늘도 어피치는 친구들에게 장난을 겁니다.",
      image: "../../images/ryan.png",
    },
    5: {
      id: 5,
      name: "TUBE",
      description:
        "Secret Forest의 복숭아 나무에서 유전자 변이로 태어난 어피치. Secret Forest의 풍부한 햇살을 받아 유독 돋보이는 분홍색을 띱니다. 복숭아 나무에서 탈출한 뒤, Friends City에서 맨 처음 튜브를 만나게 됩니다. 튜브와의 인연으로 Friends City에서 어피치는 다양한 친구들을 만나며 흥미로운 경험을 하게 됩니다. 섹시한 뒤태와 아름다운 분홍빛을 무기로 친구들을 유혹해 보지만, 본능적인 장난기 때문인지 친구들은 항상 어피치를 경계합니다. 그럼에도 아랑곳하지 않고 넘치는 흥을 뿜어내며 오늘도 어피치는 친구들에게 장난을 겁니다.",
      image: "../../images/tube.png",
    },
    6: {
      id: 6,
      name: "JAY-G",
      description:
        "Secret Forest의 복숭아 나무에서 유전자 변이로 태어난 어피치. Secret Forest의 풍부한 햇살을 받아 유독 돋보이는 분홍색을 띱니다. 복숭아 나무에서 탈출한 뒤, Friends City에서 맨 처음 튜브를 만나게 됩니다. 튜브와의 인연으로 Friends City에서 어피치는 다양한 친구들을 만나며 흥미로운 경험을 하게 됩니다. 섹시한 뒤태와 아름다운 분홍빛을 무기로 친구들을 유혹해 보지만, 본능적인 장난기 때문인지 친구들은 항상 어피치를 경계합니다. 그럼에도 아랑곳하지 않고 넘치는 흥을 뿜어내며 오늘도 어피치는 친구들에게 장난을 겁니다.",
      image: "../../images/jayg.png",
    },
    7: {
      id: 7,
      name: "NEO",
      description:
        "Secret Forest의 복숭아 나무에서 유전자 변이로 태어난 어피치. Secret Forest의 풍부한 햇살을 받아 유독 돋보이는 분홍색을 띱니다. 복숭아 나무에서 탈출한 뒤, Friends City에서 맨 처음 튜브를 만나게 됩니다. 튜브와의 인연으로 Friends City에서 어피치는 다양한 친구들을 만나며 흥미로운 경험을 하게 됩니다. 섹시한 뒤태와 아름다운 분홍빛을 무기로 친구들을 유혹해 보지만, 본능적인 장난기 때문인지 친구들은 항상 어피치를 경계합니다. 그럼에도 아랑곳하지 않고 넘치는 흥을 뿜어내며 오늘도 어피치는 친구들에게 장난을 겁니다.",
      image: "../../images/neo.png",
    },
    8: {
      id: 8,
      name: "FRODO",
      description:
        "Secret Forest의 복숭아 나무에서 유전자 변이로 태어난 어피치. Secret Forest의 풍부한 햇살을 받아 유독 돋보이는 분홍색을 띱니다. 복숭아 나무에서 탈출한 뒤, Friends City에서 맨 처음 튜브를 만나게 됩니다. 튜브와의 인연으로 Friends City에서 어피치는 다양한 친구들을 만나며 흥미로운 경험을 하게 됩니다. 섹시한 뒤태와 아름다운 분홍빛을 무기로 친구들을 유혹해 보지만, 본능적인 장난기 때문인지 친구들은 항상 어피치를 경계합니다. 그럼에도 아랑곳하지 않고 넘치는 흥을 뿜어내며 오늘도 어피치는 친구들에게 장난을 겁니다.",
      image: "../../images/frodo.png",
    },
  };

  const viewModal = (e) => {
    if (e.target.id === "") {
      setSelected(e.target.parentNode.id);
    } else {
      setSelected(e.target.id);
    }
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>카카오 프렌즈를 소개합니다</h1>
      <div className={styles.info_box}>
        <div className={styles.top}>
          <div className={styles.apeach} id="1" onClick={viewModal}>
            <h2 className={styles.name}>APEACH</h2>
            <img
              src="../../images/apeach_bob.png"
              alt="apeach"
              className={styles.char_img}
            />
            <p className={styles.name_kor}>어피치</p>
            <p className={styles.description}>미워할 수 없는 장난꾸러기</p>
          </div>

          <div className={styles.muzi} id="2" onClick={viewModal}>
            <h2 className={styles.name}>MUZI</h2>
            <img
              src="../../images/muzi.png"
              alt="muzi"
              className={styles.char_img}
            />
            <p className={styles.name_kor}>무지</p>
            <p className={styles.description}>무한긍정 눈치제로</p>
          </div>

          <div className={styles.con} id="3" onClick={viewModal}>
            <h2 className={styles.name}>CON</h2>
            <img
              src="../../images/logo.png"
              alt="con"
              className={`${styles.char_img} ${styles.con}`}
            />
            <p className={styles.name_kor}>콘</p>
            <p className={styles.description}>관찰이 취미인 꼬마 과학자</p>
          </div>

          <div className={styles.ryan} id="4" onClick={viewModal}>
            <h2 className={styles.name}>RYAN</h2>
            <img
              src="../../images/ryan.png"
              alt="ryan"
              className={styles.char_img}
            />
            <p className={styles.name_kor}>라이언</p>
            <p className={styles.description}>배려심 많은 듬직한 아기사자</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.tube} id="5" onClick={viewModal}>
            <h2 className={styles.name}>TUBE</h2>
            <img
              src="../../images/tube.png"
              alt="tube"
              className={styles.char_img}
            />
            <p className={styles.name_kor}>튜브</p>
            <p className={styles.description}>코감기를 달고사는 오리</p>
          </div>

          <div className={styles.jayg} id="6" onClick={viewModal}>
            <h2 className={styles.name}>JAY-G</h2>
            <img
              src="../../images/jayg.png"
              alt="jayg"
              className={styles.char_img}
            />
            <p className={styles.name_kor}>제이지</p>
            <p className={styles.description}>흥이 많은 아기두더지</p>
          </div>

          <div className={styles.neo} id="7" onClick={viewModal}>
            <h2 className={styles.name}>NEO</h2>
            <img
              src="../../images/neo.png"
              alt="neo"
              className={styles.char_img}
            />
            <p className={styles.name_kor}>네오</p>
            <p className={styles.description}>아이돌을 꿈꾸는 새침떼기</p>
          </div>

          <div className={styles.frodo} id="8" onClick={viewModal}>
            <h2 className={styles.name}>FRODO</h2>
            <img
              src="../../images/frodo.png"
              alt="frodo"
              className={styles.char_img}
            />
            <p className={styles.name_kor}>프로도</p>
            <p className={styles.description}>활기찬 골목대장</p>
          </div>
        </div>
      </div>
      {selected && (
        <div className={styles.modal}>
          <Modal closeModal={closeModal} friend={friends[selected]} />
        </div>
      )}
    </section>
  );
};

export default Intro;
