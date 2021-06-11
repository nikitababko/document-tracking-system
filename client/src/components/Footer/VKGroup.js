import React from 'react';

const VKGroup = () => {
  return (
    <>
      <h3 className="footer__item-title">
        Мы в Контакте
        <em>
          <p>Группа нашего университета</p>
        </em>
      </h3>

      <div className="main">
        <div style={{ width: '344px', height: '344px' }}>
          <div id="community_header" class="wcommunity_header">
            <a
              class="wcommunity_header_avatar"
              href="https://vk.com/pk_sguwt"
              target="_blank"
            >
              <img src="https://sun4-10.userapi.com/s/v1/if1/7unNTSJD2W0W3TvYPFM7GTVPCeMBKf-N1MD359uOinhY23tdMFKQfwotVfcAnO2QbBwgPnRB.jpg?size=50x0&amp;quality=96&amp;crop=141,65,691,691&amp;ava=1" />
            </a>
            <div class="wcommunity_name">
              <a
                class="wcommunity_name_link"
                href="https://vk.com/pk_sguwt"
                target="_blank"
              >
                ОФИЦИАЛЬНАЯ ГРУППА "СГУВТ"
              </a>
            </div>
          </div>

          <a
            class="wcommunity_subscribers"
            href="https://vk.com/pk_sguwt"
            onclick="return Community.subscribersBox(event);"
            id="members_count"
          >
            3<span class="num_delim"> </span>371 подписчик
          </a>

          <div class="wcommunity_rows">
            <div
              class="wcommunity_row"
              id="anim_row"
              data-offset="-61"
              style={{ left: '-61px' }}
            >
              <a
                class="wcommunity_avatar"
                href="https://vk.com/id376583"
                target="_blank"
                onmouseover="showTitle(this, 'Anton', 0, {appendParentCls: '_tt_wrap'});"
              >
                <img src="https://sun9-40.userapi.com/c856/u376583/e_0d6009da.jpg" />
              </a>
              <a
                class="wcommunity_avatar"
                href="https://vk.com/id711217"
                target="_blank"
                onmouseover="showTitle(this, 'Егор', 0, {appendParentCls: '_tt_wrap'});"
              >
                <img src="https://sun4-15.userapi.com/s/v1/if1/oP4EYPe7XES9RULmoV7ND0nW1OnZMJMaFtBj_NGFl6qgfEG8XZNUgk4loxq6R8bAWiJl02TW.jpg?size=50x0&amp;quality=96&amp;crop=989,243,1265,1265&amp;ava=1" />
              </a>
              <a
                class="wcommunity_avatar"
                href="https://vk.com/zagidulina_sofya"
                target="_blank"
                onmouseover="showTitle(this, 'Софья', 0, {appendParentCls: '_tt_wrap'});"
              >
                <img src="https://sun4-16.userapi.com/s/v1/ig2/OHYdH3NhVH52Gl804x8c6yWkOEdaI6JtOC-6u5n16dgCiIGWiihPjDpkwj6q480mrxSofXIFEf3c4eVLapMwmxT-.jpg?size=50x0&amp;quality=96&amp;crop=319,0,1923,1923&amp;ava=1" />
              </a>
              <a
                class="wcommunity_avatar"
                href="https://vk.com/id1203178"
                target="_blank"
                onmouseover="showTitle(this, 'Александр', 0, {appendParentCls: '_tt_wrap'});"
              >
                <img src="https://sun4-10.userapi.com/s/v1/if1/7yzcD8fpFwTBFBckOMEPJWe9JlMXxy-9skYdtaZONhOAexXXrWwFcfV0jZgji1hQCtlBsSvc.jpg?size=50x0&amp;quality=96&amp;crop=172,14,259,259&amp;ava=1" />
              </a>
              <a
                class="wcommunity_avatar"
                href="https://vk.com/id1322891"
                target="_blank"
                onmouseover="showTitle(this, 'Нелли', 0, {appendParentCls: '_tt_wrap'});"
              >
                <img src="https://sun4-12.userapi.com/s/v1/ig2/tPJTDnsDt6-1CT8xXzqwCFMsL2ANvSrIZjj5b_WvInE1QRTsviOcMhcEidJuF9hZA-Y5eAel_qh63U1ncZBsKra8.jpg?size=50x0&amp;quality=96&amp;crop=0,0,683,683&amp;ava=1" />
              </a>
              <a
                class="wcommunity_avatar"
                href="https://vk.com/mochalinks"
                target="_blank"
                onmouseover="showTitle(this, 'Константин', 0, {appendParentCls: '_tt_wrap'});"
              >
                <img src="https://sun4-17.userapi.com/s/v1/if1/m9rTSiJfqqJWm-FkrFM7yaJTRlDmIxFxJ8oRoX_AYbChaKBXiNTd4-dDbyjAwPGKeqcLQI1Z.jpg?size=50x0&amp;quality=96&amp;crop=2,152,756,756&amp;ava=1" />
              </a>
            </div>
          </div>

          <div class="wcommunity_row">
            <a
              class="wcommunity_avatar"
              href="https://vk.com/tyomychbekeyev"
              target="_blank"
              onmouseover="showTitle(this, 'Артём', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-11.userapi.com/s/v1/ig2/1kkbfZmQG-dRwQVd-V0hDnEcBaZkcTxSv1UffDS3nGNYZ9UEMNW-AozrR-myaeXB5T_d2R-KaOCmWKJ_UYFXYSPq.jpg?size=50x0&amp;quality=96&amp;crop=113,340,1344,1344&amp;ava=1" />
            </a>
            <a
              class="wcommunity_avatar"
              href="https://vk.com/bednarskaya92"
              target="_blank"
              onmouseover="showTitle(this, 'Дарья', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-10.userapi.com/s/v1/ig2/C4_hUEJO0AE6XYfjgYDaqKdwPCV_GDnKNrvo3TGiLt9wXbLC_ad6qbHkJrSG3Wojt3iZLSzRk7T0GmihQg-lbqdK.jpg?size=50x0&amp;quality=96&amp;crop=320,723,657,657&amp;ava=1" />
            </a>
            <a
              class="wcommunity_avatar"
              href="https://vk.com/id1650977"
              target="_blank"
              onmouseover="showTitle(this, 'Виктория', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-16.userapi.com/s/v1/if1/0jCfTqbl-qvPu5d93f7fQPWd-RMbrHLMXFS6LJmfU5WQIT14wWpBGrSq978DuLppJLd9dRyo.jpg?size=50x0&amp;quality=96&amp;crop=156,961,859,859&amp;ava=1" />
            </a>
            <a
              class="wcommunity_avatar"
              href="https://vk.com/borischernysh"
              target="_blank"
              onmouseover="showTitle(this, 'Борис', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-12.userapi.com/s/v1/if1/DcSbWSkUqBwxm3VbE8XPQxL6dPBFxrQW7v4s9jFwnI3FmfxGPNPjihHmWzMPGtrFqGvImBlF.jpg?size=50x0&amp;quality=96&amp;crop=204,204,1630,1630&amp;ava=1" />
            </a>
            <a
              class="wcommunity_avatar"
              href="https://vk.com/id1746869"
              target="_blank"
              onmouseover="showTitle(this, 'Иван', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-12.userapi.com/s/v1/if1/ml4YXDs1r4Exgan6OoeKDpSjyIMs2pkQ4l6cvOS3fd3orM_BUG4H-w65NYk8avcWV1Oj8pcC.jpg?size=50x0&amp;quality=96&amp;crop=606,94,377,377&amp;ava=1" />
            </a>
            <a
              class="wcommunity_avatar"
              href="https://vk.com/rombl"
              target="_blank"
              onmouseover="showTitle(this, 'Роман', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-12.userapi.com/zTPzzkn8HJg5OnolV_JcGezrgwzebV2NW6nj7g/a5icpM415FE.jpg" />
            </a>
          </div>

          <div class="wcommunity_row">
            <a
              class="wcommunity_avatar"
              href="https://vk.com/ryazan4ik"
              target="_blank"
              onmouseover="showTitle(this, 'Татьяна', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-10.userapi.com/s/v1/if1/RiN9hCMX6il_80E3QkMo-rFNmVeU6LZn_T0x-Q_6EYh_CzrdEH7KmSHbn6l6L-k-OTW5y56z.jpg?size=50x0&amp;quality=96&amp;crop=0,82,884,884&amp;ava=1" />
            </a>
            <a
              class="wcommunity_avatar"
              href="https://vk.com/id2352752"
              target="_blank"
              onmouseover="showTitle(this, 'Юлия', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-16.userapi.com/s/v1/ig1/QpkGEs9HV19h5dEE0Mh2zydTZ51D1XFXQzB8bC1zOZtRCsMvT4-iWV-kGbSMeQgJNTfSllYd.jpg?size=50x0&amp;quality=96&amp;crop=1,147,359,359&amp;ava=1" />
            </a>
            <a
              class="wcommunity_avatar"
              href="https://vk.com/pyteec563"
              target="_blank"
              onmouseover="showTitle(this, 'Олег', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-10.userapi.com/s/v1/ig2/jpFQOJo2Yv-IUUqlDBdKT59bD7mUmsjobtlSBcSQT6VJ20P4Cby-Kb50-578sdygj1kqSLfd-ugpBTszmcZxV36N.jpg?size=50x0&amp;quality=96&amp;crop=2,422,1078,1078&amp;ava=1" />
            </a>
            <a
              class="wcommunity_avatar"
              href="https://vk.com/olga_spirenkova"
              target="_blank"
              onmouseover="showTitle(this, 'Ольга', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-17.userapi.com/s/v1/ig2/semoAZpqZVhyPpEtX4jm7o6ToubX1GGf-eQzC_ARwhsEltWiFrI2Tcy4hB10RHTadVdUz7vehm7caxcp5FMmRvgz.jpg?size=50x0&amp;quality=96&amp;crop=3,5,1606,1606&amp;ava=1" />
            </a>
            <a
              class="wcommunity_avatar"
              href="https://vk.com/id3195617"
              target="_blank"
              onmouseover="showTitle(this, 'Александр', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-17.userapi.com/s/v1/ig2/PirZnSVCsNXpyKvCY7L-aK8J9ReLMb1VPuMXP4U6XLtdmhMvjmbBkb9cfPm2JR1C5ac1iuu-h-5-ZuMBT1J9RFLG.jpg?size=50x0&amp;quality=96&amp;crop=1,271,1617,1617&amp;ava=1" />
            </a>
            <a
              class="wcommunity_avatar"
              href="https://vk.com/sov___a"
              target="_blank"
              onmouseover="showTitle(this, 'Ольга', 0, {appendParentCls: '_tt_wrap'});"
            >
              <img src="https://sun4-16.userapi.com/s/v1/ig1/G74-Obl2zGFFoGKzGfr9fJGaWxY3ypnV3KxsGcV-y8q4wvpS7zMBMIjbUpsS2PJVXw4U23-c.jpg?size=50x0&amp;quality=96&amp;crop=1,29,1050,1050&amp;ava=1" />
            </a>
          </div>

          <div id="community_footer" class="wcommunity_footer">
            <button
              class="flat_button logo_button  color3_bg"
              // onclick="Community.changeGroupState(hasClass(this, '_subscribed') ? 0 : 1, this);"
            >
              <i class="fab fa-vk"></i> Подписаться на новости
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VKGroup;
