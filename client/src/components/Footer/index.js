import React from 'react';

import VKGroup from './VKGroup';

import './index.scss';
import Feedback from './Feedback';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__item">
          <VKGroup />
        </div>

        <div className="footer__item">
          <h3 className="footer__item-title">
            Map
            <em>
              <p>location of the university</p>
            </em>
          </h3>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5438.9596213265!2d82.9149749823504!3d55.029182916980616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf828793aa57afaa!2z0KHQuNCx0LjRgNGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCy0L7QtNC90L7Qs9C-INGC0YDQsNC90YHQv9C-0YDRgtCw!5e0!3m2!1sru!2sru!4v1484030978245"
            width="100%"
            height="300px"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>

        <div className="footer__item">
          <Feedback />

          <div>
            <h3 className="footer__item-title">
              FGBOU VO
              <em>
                <p>
                  "Siberian State <br /> University of Water
                  <br /> transport "
                </p>
              </em>
            </h3>

            <p>
              <strong>Novosibirsk, st. Schetinkina, 33 (main building)</strong>
            </p>
            <p>
              <span>
                <i class="fas fa-phone-alt"></i> +7 (383) 222-64-68,{' '}
              </span>
              <span>
                <i class="fas fa-phone-alt"></i> +7 (383) 222-49-76,
              </span>
            </p>
            <p>
              <i class="fas fa-envelope"></i> info@nsawt.ru
            </p>
            <p>
              <em>
                <strong>Selection committee</strong>
              </em>
            </p>
            <p>
              <i class="fas fa-phone-alt"></i> +7 (383) 222-12-00,
            </p>
            <p>
              <i class="fas fa-envelope"></i> fdp@nsawt.ru
            </p>
            <p>www.ssuwt.ru</p>
          </div>

          <div>
            <p>
              <em>
                <strong>
                  Novosibirsk, st. Michurina, 4 (Novosibirsk command river
                  school to them. S. I. Dezhneva)
                </strong>
              </em>
            </p>
            <p>
              <span>
                <i class="fas fa-phone-alt"></i> +7 (383) 222-11-37,{' '}
              </span>
              <span>
                <i class="fas fa-phone-alt"></i> +7 (383) 222-60-84
              </span>
            </p>
            <p>
              <i class="fas fa-envelope"></i> nkru@nsawt.ru
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
