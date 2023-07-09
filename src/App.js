
import VideosSlider from './VideosSlider';

function App() {
  return (
  <div className="App">
    <div className="wrapper">
      <header>
        <div className="wrapperLeft">
          <img src="/images/im.png"  alt="Иконка сайта">
        </img>
      <h3>Нумерология</h3>
      </div>
        <div className="wrapperInfo">
          <nav>
            <ul>
              <li><a href="https://vk.com/syava_young">Главная</a></li>
              <li><a href="https://vk.com/syava_young">Обо мне</a></li>
              <li><a href="https://vk.com/syava_young">Услуги</a></li>
              <li><a href="https://vk.com/syava_young">Отзывы</a></li>
              <li><a href="https://vk.com/syava_young">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="background">
      <img src="/images/image 25.png" alt="Внешний фон" style={{ width: '100vw', height: 'auto' }} />
        </div>
        <div className = "DescriptionOrder">
      <img 
      width={324}
      height={456}
      src="/images/IrinaM.png"  alt="Фото заказчика">
      </img>
      <div className="descriptionBlock">
      <h2>Ирина Махова</h2>
          <p width={948} height={208}>
            У каждого человека есть свое призвание, предназначение. Ирина
            Махова - практикующий нумеролог. За годы практики я собрала
            тысячи таких историй из обратной связи от своих клиентов.
          </p>
          <ul>
            <li>
              <a href="https://vk.com/syava_young">Задать вопрос</a>
          </li>
        </ul>
      </div>
  </div>
        <div className="MyServices">
          <h2>Мои Услуги</h2>

          <div className="image-container">
            <a href="https://vk.com/syava_young" className="image-wrapper">
              <img src="/images/image 7.png" alt="Услуга 1" />
            </a>

            <a href="https://vk.com/syava_young" className="image-wrapper">
              <img src="/images/image 8.png" alt="Услуга 2" />
            </a>

            <a href="https://vk.com/syava_young" className="image-wrapper">
              <img src="/images/image 9.png" alt="Услуга 3" />
            </a>

            <a href="https://vk.com/syava_young" className="image-wrapper">
              <img src="/images/image 10.png" alt="Услуга 4" />
            </a>

            <a href="https://vk.com/syava_young" className="image-wrapper">
              <img src="/images/image 11.png" alt="Услуга 5" />
            </a>
          </div>
        </div>
    </div>

    <div className="Reviews">
        {/* Первое видео */}
        <VideosSlider></VideosSlider>
      
    </div>

  <div className="NewContact">
    <h1>
      Мои контакты
    </h1>
    <h2 className="site">Сайт</h2>
    <h2 className="about-author">Об авторе</h2>
    <h2 className="about-numerology">О нумерологии</h2>
    <h2 className="faqs">Часто задаваемые вопросы</h2>

    <div className="image-21"></div>

      <h2 className="services">Услуги</h2>
      <h2 className="success-code">Код успешности</h2>
      <h2 className="business-code">Код на бизнес</h2>
      <h2 className="antiphinkod">Антифинкод</h2>

      <h2 className="send-message">Отправить сообщение</h2>

      <div className="image-4"></div>
      <div className="image-22"></div>
      <div className="image-23"></div>
</div>

  </div>
  );
}

export default App;
