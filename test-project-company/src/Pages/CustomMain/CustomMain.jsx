import styles from './CustomMain.module.css';
const СustomMain = () => {

  return (
    <main className={'main'}>
      <div className={'container'}>
          <div className={styles.flexContainer}>
              <img src="https://tmsearch.onlinepatent.ru/images/01d/01dd0faf-1bbb-4a81-b3ea-26cbb32a6d17.jpg" alt=""/>
              <div className={styles.title}><h1>Testing</h1></div>
              <div className="button-add">
                  <button className={styles.addUsers}>+ Создать</button>
              </div>
          </div>
          <div className={styles.mainCategory}>
              <div className={styles.categoryItem}>

              </div>
              <div className={styles.categoryItem}>

              </div>
              <div className={styles.categoryItem}>

              </div>
          </div>
          <div className="dasboard">

          </div>
      </div>
    </main>
  );
};

export default СustomMain;
