
import Style from './about.module.css'
import img from '../img/1.jpg'
const  About  = () => {
 return( 
        <div className={Style.box}>
                <img className={Style.img} src={img} />
                
                                <p className={Style.text}>Компания "ЭкоСита" является примером современного предприятия, которое заботится о экологической чистоте и улучшении окружающей среды. Наша компания занимается разработкой и производством экологически безопасных продуктов и технологий, которые помогают снизить загрязнение и улучшить качество жизни нашего планеты.
                Наш компаний расположен в picturesque месте, где каждый сотрудник может наслаждаться природой и чистым воздухом, что вдохновляет и стимулирует нас на создание новых идей и решений.
                В нашей компании мы уделяем большое внимание развитию и совершенствованию наших продуктов и технологий, чтобы они были наиболее эффективными и экологически безопасными. Наша цель - предоставить нашим клиентам продукты и услуги, которые будут способствовать сохранению окружающей среды и улучшению жизни нашего народа.
                Вместе с тем, наша компания активно участвует в различных мероприятиях и акциях, направленных на повышение осведомности о важности экологической чистоты и защиты окружающей среды. Например, мы регулярно организуем экологические экспедиции и мастер-классы для детей и взрослых, чтобы они могли узнать больше о природе и научиться защищать ее.
                В целом, компания "ЭкоСита" является примером того, как современное предприятие может сочетать в себе экономическую успешность и экологическую ответственность, делая нашу мировую лучше.</p>



        </div>
    ) 
  
    
  
};



export default About;