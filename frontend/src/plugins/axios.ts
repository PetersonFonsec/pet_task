'use strict';

import axios from 'axios';
import { baseURL } from '../global';

export default axios.create({ baseURL })
