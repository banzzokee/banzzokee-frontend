import styles from './ShelterEditPage.module.css';
import BackHeader from '../../components/common/header/BackHeader';
import cx from 'clsx';
export default function ShelterEditPage() {
  const photo = <img src="../../../public/User.png"></img>;
  return (
    <>
      <BackHeader></BackHeader>
      <div className={styles.container}>
        <form className={styles.edit} action="">
          <div className={styles.editInput}>
            <div className={styles.pictures}>
              <div className={styles.picture}>{photo}</div>
              <div className={styles.add}>
                <input className={styles.addPhoto} type="file" name="" id="fileInput"></input>
                <label className={styles.addIcon} htmlFor="fileInput">
                  <img src="../../../public/addPhoto.svg" alt="" />
                </label>
              </div>
            </div>
            <div className={styles.shelterInfo}>
              <p>보호소 이름:</p>
              <input className={styles.input} type="text" placeholder="이전 등록값" />
              <p>보호소 소개:</p>
              <input className={styles.input} type="password" placeholder="이전 등록값" />
              <p>연락처:</p>
              <input className={styles.input} type="password" placeholder="이전 등록값" />
              <p>주소:</p>
              <input className={styles.input} type="password" placeholder="이전 등록값" />
            </div>
          </div>
          <div className={styles.button} onClick={'dothis'}>
            보호소 수정
          </div>
          <div className={cx(styles.button, styles.deleteButton)} onClick={'dothis'}>
            보호소 삭제
          </div>
        </form>
      </div>
    </>
  );
}
