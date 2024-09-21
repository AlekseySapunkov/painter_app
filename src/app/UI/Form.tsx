import styles from "./Form.module.css"
const Form = (props:any)=>{
  const closeButtonHandler =(event:any)=>{
    event.preventDefault()
    props.onClose()

  }
return <div className={styles.formBackground}>
<form action="#" method="post" target="_blank" className={styles.form}>
<button className={styles.closeButton} onClick={closeButtonHandler}></button>
    <h2 className={styles.h2}>Шаблон формы</h2>
    <div className={styles.formElement_wrapper}>
      <legend>Персональные данные</legend>
      <ul>
        <li className={styles.li}>
          <label htmlFor="name">Имя: *</label>
          <input className={styles['form-control']}type="text" name="name" placeholder="Иван Иванов" id="name" size={30} required/>
        </li>
      </ul>
    </div>
    <div className={styles.formElement_wrapper}>
    <legend className={styles.legend}>Выберите интересующую услугу</legend>
    <select className="dropdown">
     <option>Мастерклассы</option>
     <option>CG</option>
     <option>Картины</option>
        </select>
    </div>
    <div className={styles.formElement_wrapper}>
      <legend className={styles.legend}>Контакты</legend>
      <ul>
        <li className={styles.li}>
          <label htmlFor="email">E-mail: *</label>
          <input className={styles['form-control']} type="email" name="mail" placeholder="ivanov@gmail.com" id="email" size={30} required />
        </li> 
        <li className={styles.li}>
          <label htmlFor="number">Телефон: *</label>
          <input className={styles['form-control']} type="tel" name="phone" placeholder="+7 000 000-00-00" id="number" maxLength={18} required/>
        </li>
      </ul>
    </div>
    <div className={styles.formElement_wrapper}>
      <legend className={styles.legend}>Откуда узнали обо мне</legend>
      <ul>
        <li className={styles.li}>
          <input type="checkbox" name="intensive-courses" id="courses"  className={styles.input}/>
          <label htmlFor="courses"> Инстаграм</label>
        </li>
        <li className={styles.li}>
          <input type="checkbox" name="books" id="books" className={styles.input}/>
          <label htmlFor="books"> Телеграм</label>
        </li>
        <li className={styles.li}>
          <input type="checkbox" name="video" id="video" className={styles.input}/>
          <label htmlFor="video"> От друзей</label>
        </li>
      </ul>
    </div>
    <div>
      <button className={styles.btn} type="submit">Отправить</button>
      <p className={styles.p}>* — Обязательные поля</p>
    </div>
  </form>
  </div>
}
export default Form