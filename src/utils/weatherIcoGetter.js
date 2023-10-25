import bkn_Ra_d from '../img/weatherIcons/bkn_+ra_d.svg';
import bkn_Ra_n from '../img/weatherIcons/bkn_+ra_n.svg';
import bkn_Sn_d from '../img/weatherIcons/bkn_+sn_d.svg';
import bkn_Sn_n from '../img/weatherIcons/bkn_+sn_n.svg';
import bkn_d from '../img/weatherIcons/bkn_d.svg';
import bkn_n from '../img/weatherIcons/bkn_n.svg';
import bkn_ra_d from '../img/weatherIcons/bkn_ra_d.svg';
import bkn__ra_d from '../img/weatherIcons/bkn_-ra_d.svg';
import bkn_ra_n from '../img/weatherIcons/bkn_ra_n.svg';
import bkn__ra_n from '../img/weatherIcons/bkn_-ra_n.svg';
import bkn_sn_d from '../img/weatherIcons/bkn_sn_d.svg';
import bkn__sn_d from '../img/weatherIcons/bkn_-sn_d.svg';
import bkn_sn_n from '../img/weatherIcons/bkn_sn_n.svg';
import bkn__sn_n from '../img/weatherIcons/bkn_-sn_n.svg';
import bl from '../img/weatherIcons/bl.svg';
import bl_ from '../img/weatherIcons/bl-.svg';
import fct_Ra from '../img/weatherIcons/fct_+ra.svg';
import fct_Sn from '../img/weatherIcons/fct_+sn.svg';
import fct_ra from '../img/weatherIcons/fct_ra.svg';
import fct__ra from '../img/weatherIcons/fct_-ra.svg';
import fct_ra_sn from '../img/weatherIcons/fct_ra_sn.svg';
import fct_sn from '../img/weatherIcons/fct_sn.svg';
import fct__sn from '../img/weatherIcons/fct_-sn.svg';
import fct_ts from '../img/weatherIcons/fct_ts.svg';
import fct_ts_ra from '../img/weatherIcons/fct_ts_ra.svg';
import fg_d from '../img/weatherIcons/fg_d.svg';
import fg_n from '../img/weatherIcons/fg_n.svg';
import ic_air_q from '../img/weatherIcons/ic_air_q.svg';
import ovc from '../img/weatherIcons/ovc.svg';
import ovc_Ra from '../img/weatherIcons/ovc_+ra.svg';
import ovc_Sn from '../img/weatherIcons/ovc_+sn.svg';
import ovc_h from '../img/weatherIcons/ovc_h.svg';
import ovc_ra from '../img/weatherIcons/ovc_ra.svg';
import ovc__ra from '../img/weatherIcons/ovc_-ra.svg';
import ovc_ra_sn from '../img/weatherIcons/ovc_ra_sn.svg';
import ovc_sn from '../img/weatherIcons/ovc_sn.svg';
import ovc__sn from '../img/weatherIcons/ovc_-sn.svg';
import ovc_ts from '../img/weatherIcons/ovc_ts.svg';
import ovc_ts_h from '../img/weatherIcons/ovc_ts_h.svg';
import ovc_ts_ra from '../img/weatherIcons/ovc_ts_ra.svg';
import skc_d from '../img/weatherIcons/skc_d.svg';
import skc_n from '../img/weatherIcons/skc_n.svg';

const weatherIcons = {
  'bkn_+ra_d': bkn_Ra_d,
  'bkn_+ra_n': bkn_Ra_n,
  'bkn_+sn_d': bkn_Sn_d,
  'bkn_+sn_n': bkn_Sn_n,
  'bkn_d': bkn_d,
  'bkn_n': bkn_n,
  'bkn_ra_d': bkn_ra_d,
  'bkn_-ra_d': bkn__ra_d,
  'bkn_ra_n': bkn_ra_n,
  'bkn_-ra_n': bkn__ra_n,
  'bkn_sn_d': bkn_sn_d,
  'bkn_-sn_d': bkn__sn_d,
  'bkn_sn_n': bkn_sn_n,
  'bkn_-sn_n': bkn__sn_n,
  'bl': bl,
  'bl-': bl_,
  'fct_+ra': fct_Ra,
  'fct_+sn': fct_Sn,
  'fct_ra': fct_ra,
  'fct_-ra': fct__ra,
  'fct_ra_sn': fct_ra_sn,
  'fct_sn': fct_sn,
  'fct_-sn': fct__sn,
  'fct_ts': fct_ts,
  'fct_ts_ra': fct_ts_ra,
  'fg_d': fg_d,
  'fg_n': fg_n,
  'ic_air_q': ic_air_q,
  'ovc': ovc,
  'ovc_+ra': ovc_Ra,
  'ovc_+sn': ovc_Sn,
  'ovc_h': ovc_h,
  'ovc_ra': ovc_ra,
  'ovc_-ra': ovc__ra,
  'ovc_ra_sn': ovc_ra_sn,
  'ovc_sn': ovc_sn,
  'ovc_-sn': ovc__sn,
  'ovc_ts': ovc_ts,
  'ovc_ts_h': ovc_ts_h,
  'ovc_ts_ra': ovc_ts_ra,
  'skc_d': skc_d,
  'skc_n': skc_n,
};

const getWeatherIcon = (iconName) => {
  return weatherIcons[iconName];
};

export default getWeatherIcon;
